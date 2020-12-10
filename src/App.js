import React, { useState } from "react";
import "./styles.css";

var recommendations = {
  Shows: [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71rhHq%2BNcyL._SL1500_.jpg",
      name: "The Mentalist",
      imdb: "8.1",
      genre: "Thriller | Suspense",
      plot:
        "Patrick Jane, an independent consultant, works with the California Bureau of Investigation and uses his sharp skills of observation to help solve crimes."
    },
    {
      image: "https://tvguide1.cbsistatic.com/feed/1/992/118568992.jpg",
      name: "The Big Bang Theory",
      imdb: "8.1",
      genre: "Comedy",
      plot:
        "The lives of four socially awkward friends, Leonard, Sheldon, Howard and Raj, take a wild turn when they meet the beautiful and free-spirited Penny."
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTM0ODIwNjI3NF5BMl5BanBnXkFtZTcwODU2ODUzMw@@._V1_.jpg",
      name: "Chuck",
      imdb: "8.2",
      genre: "Comedy | Action | Suspense",
      plot:
        "Chuck's life turns upside down after he downloads a few government secrets into his brain. He is then employed by the CIA and the NSA for their secret missions."
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTExZDZjNTMtNDVmNy00ZTk2LWFiMzUtZDlkZGRlOGU0ZWRmXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_.jpg",
      name: "Line Of Duty",
      imdb: "8.7",
      genre: "Suspense | Action",
      plot:
        "DS Steve Arnott is transferred to the anti-corruption unit after he refuses to participate in a cover-up that involves an innocent man getting shot in a police encounter."
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_.jpg",
      name: "The Haunting Of Hill House",
      imdb: "8.6",
      genre: "Horror | Thriller",
      plot:
        "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it."
    }
  ],
  Books: [
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL.jpg",
      name: "Atomic Habits",
      about:
        "In Atomic Habits, author and self-improvement guru James Clear outlines a practical framework for improving just about every aspect of your life through the power of habit. ",
      author: "James Clear"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/81I68HH7a2L.jpg",
      name: "The Mindset",
      about:
        "Carol Dweck is one of those researchers and in her book Mindset she discerns between two attitudes: the fixed mindset and the growth mindset.",
      author: "Carol S. Dweck"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg",
      name: "Ikigai",
      about:
        "The book touches the various aspects of life which can help us achieve a long happy life. It is based on ancient, well practised Japanese technique called — IKIGAI. The word derives from iki, meaning life and kai, meaning the realisation of hopes and expectations. A reason to jump out of bed each morning!",
      author: "Albert Liebermann & Hector Garcia "
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/819k64RIILL.jpg",
      name: "The Present",
      about:
        "The Present is an engaging story of a young man's journey to adulthood, and his tireless search for The Present, a mysterious and elusive gift he first hears about from a wise old man. This Present, according to the old man, is the most valuable gift a person can receive.",
      author: "Spencer Johnson"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/81gTwYAhU7L.jpg",
      name: "The Power Of Your Subsconcious Mind",
      about:
        "The Power Of Your Subconscious Mind is a spiritual self-help classic, which teaches you how to use visualization and other suggestion techniques to adapt your unconscious behavior in positive ways.",
      author: "Jospeh Murphy"
    }
  ]
};

var recommendationsGenres = Object.keys(recommendations);
//console.log(recommendationsGenres);

export default function App() {
  const [genre, setGenre] = useState("Shows");

  function selectGenre(selectedGenre) {
    setGenre(selectedGenre);
    console.log(genre);
  }

  return (
    <div className="App">
      <h1>
        Welcome <i class="fa fa-heart"></i>
      </h1>
      <h2 className="subHeading">
        Some great recommendations for shows and books depending on what you
        like more!
      </h2>
      <div className="socialLinks">
        <ul>
          <li className="social-items">
            <a
              href="https://github.com/MaverickCreative"
              class="social-links"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li className="social-items">
            <a
              href="https://www.linkedin.com/in/maverickcreative/"
              class="social-links"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="social-items">
            <a
              href="https://stackoverflow.com/users/11056952/anurag-sanghvi?tab=profile"
              class="social-links"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-stack-overflow"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="navigation-list">
        <ul className="item-list">
          {recommendationsGenres.map(function (genre) {
            return (
              <li
                key={genre}
                onClick={() => selectGenre(genre)}
                className="list-item"
              >
                {" "}
                {genre}{" "}
              </li>
            );
          })}
        </ul>
        <hr />
      </div>

      <div className="items">
        {recommendations[genre].map(function (item, index) {
          return (
            <div className="item-description">
              <div className="row">
                <div className="col-1-of-3">
                  <div className="item-img">
                    <img src={item.image} alt="img" className="item-image" />
                  </div>
                </div>
                <div className="col-2-of-3 item-details">
                  {" "}
                  <h4 key={index}>{item.name}</h4>
                  {genre === "Shows" ? (
                    <p>
                      <i className="fa fa-imdb"></i>
                      {item.imdb}
                    </p>
                  ) : (
                    <p>
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                      {item.author}
                    </p>
                  )}
                  <p>{item.genre}</p>
                  {genre === "Shows" ? <p>{item.plot}</p> : <p>{item.about}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
