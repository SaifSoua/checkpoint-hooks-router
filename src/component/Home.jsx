import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import Filter from "./Filter";
import Rate from "./Rating";
import React from "react";
export const Home = ({
  title,
  setTitle,
  rating,
  setRating,
  addMovie,
  movieData,
}) => {
  return (
    <div>
      <h1
        style={{ fontStyle: "italic", color: "#003333", textAlign: "center" }}
      >
        Movies
      </h1>
      <Filter title={title} setTitle={setTitle} />
      <Rate rating={rating} setRating={setRating} />
      <AddMovie addMovie={addMovie} />
      <MovieList movieData={movieData} title={title} rating={rating} />
    </div>
  );
};
