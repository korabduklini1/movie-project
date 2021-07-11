import React from "react";
import { useMovieContext } from "../../context/MovieContext";

const Favorite = (props) => {
  const { toggleFeatured } = useMovieContext();

  const handleOnClick = () => toggleFeatured(props.movieId);

  return (
    <a className="Favorite ui right corner label" onClick={handleOnClick}>
      <i className={`${props.isFavorite ? "yellow" : "empty"} star icon`} />
    </a>
  );
};

export default Favorite;
