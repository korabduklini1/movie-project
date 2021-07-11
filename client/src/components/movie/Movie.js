import React, { useState } from "react";
import { useMovieContext } from "../../context/MovieContext";
import Favorite from "./Favorite";

const Movie = (props) => {
  const { movie } = props;
  const { deleteMovie } = useMovieContext();

  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => deleteMovie(movie._id);

  const showConfirmation = () => setShowConfirm(true);

  const hideConfirmation = () => setShowConfirm(false);

  return (
    <div className="Movie ui card">
      <div className="image">
        <span className="ui green label ribbon">${movie.price} </span>
        <Favorite movieId={movie._id} isFavorite={movie.featured} />
        <img src={movie.img} alt={movie.title} />
      </div>

      <div className="content">
        <a href="#" className="header">
          {movie.title}
        </a>
        <div className="meta">
          <i className="icon users"></i> {movie.director}
          <span className="right floated">
            <i className="icon wait right"></i> {movie.duration} min
          </span>
        </div>
      </div>

      <div className="extra content">
        {showConfirm ? (
          <div className="ui two buttons">
            <span className="ui red basic button" onClick={handleDelete}>
              <i className="ui icon check">YES</i>
            </span>
            <span className="ui grey basic button" onClick={hideConfirmation}>
              <i className="ui icon close">NO</i>
            </span>
          </div>
        ) : (
          <div className="ui two buttons">
            <span className="ui green basic button">
              <i className="ui icon edit"></i>
            </span>
            <span className="ui red basic button" onClick={showConfirmation}>
              <i className="ui icon trash"></i>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
