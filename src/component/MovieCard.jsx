import React from "react";
import Rate from "./Rating";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating, id } = movie;
  return (
    <div>
      <div
        className="card"
        style={{ width: "18rem", padding: " 20px ", margin: "45px" }}
      >
        <img src={posterURL} alt="" className="card-img-top" />

        <Rate rating={rating} />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={`/movie/${id}`} className="btn btn-primary ">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
