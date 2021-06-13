import React, { useState } from "react";
import { movies } from "../../movies";
import "./index.css";

const MovieCards = React.memo(({ id, poster, name, rating, releaseYear }) => {
  console.log(`Card id :`, id);
  return (
    <div className={`cardsContainer`}>
      <div className={`cardId`}>{id}</div>
      <div className={`cardImage`}>
        <img src={poster} alt={name} height={`300px`} width={`200px`} />
      </div>
      <div className={`cardName`}>{name}</div>
      <div className={`cardDetails`}>
        <div>{`Rating : ${rating}`}</div>
        <div>{`Release Year : ${releaseYear}`}</div>
      </div>
    </div>
  );
});

const MovieHomeScreen = () => {
  console.log("Movie Home Screen");
  const [movieData, setMovieData] = useState(movies);

  let oldMovieData = movieData;
  oldMovieData[
    oldMovieData.findIndex((obj) => obj.id.localeCompare("4") === 0)
  ].rating = Math.floor(Math.random() * 5 + 1).toString();
  oldMovieData[
    oldMovieData.findIndex((obj) => obj.id.localeCompare("5") === 0)
  ].rating = Math.floor(Math.random() * 5 + 1).toString();

  clearTimeout(
    setTimeout(() => {
      setMovieData([...oldMovieData]);
    }, 5000)
  );

  return (
    <div className={`movieHomeContainer`}>
      {movieData.map((value, index) => (
        <MovieCards
          key={index}
          id={value.id}
          poster={value.poster}
          name={value.name}
          rating={value.rating}
          releaseYear={value.releaseYear}
        />
      ))}
    </div>
  );
};

export default MovieHomeScreen;
