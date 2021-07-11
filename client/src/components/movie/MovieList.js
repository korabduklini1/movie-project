import React, { Component } from "react";
import Movie from "./Movie";
import Message from "../shared/Message/Message";
import { fetchData } from "../../data";
import MovieContext from "../../context/MovieContext";
import { Route, Switch } from "react-router-dom";
import AddMovieForm from "./AddMovieForm";

class MovieList extends Component {
  state = {
    loading: true,
    movies: [],
  };

  componentDidMount() {
    fetchData()
      .then((fetchedMovies) => {
        this.setState({
          ...this.state,
          movies: fetchedMovies,
        });
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        this.setState({ ...this.state, loading: false });
      });
  }

  toggleFeatured = (id) => {
    this.setState({
      ...this.state,
      movies: this.state.movies.map((movie) => (movie._id === id ? { ...movie, featured: !movie.featured } : movie)),
    });
  };

  deleteMovie = (id) => {
    this.setState({
      ...this.state,
      movies: this.state.movies.filter((movie) => movie._id !== id),
    });
  };

  addMovie = (newMovie) => {
    this.setState({
      ...this.state,
      movies: [...this.state.movies, newMovie]
    })
  };

  render() {
    const { loading, movies } = this.state;
    return (
      <MovieContext.Provider
        value={{
          addMovie: this.addMovie,
          deleteMovie: this.deleteMovie,
          toggleFeatured: this.toggleFeatured,
        }}
      >
        <div className="ui container">
          <Switch>
            <Route
              exact path="/movies"
              render={() => {
                return <div className="ui four cards">
                {loading ? (
                  <Message icon="sync" text="Loading movies..." />
                ) : movies.length === 0 ? (
                  <Message text="There are no data " />
                ) : 
                (
                  movies.map((movie) => {
                    return <Movie key={movie._id} movie={movie} />;
                  })

                )}
              </div>;
            }}
            >
            </Route>
            <Route exact path="/movies/new" component={AddMovieForm}/>
          </Switch>
        </div>
      </MovieContext.Provider>
    );
  }
}

export default MovieList;


