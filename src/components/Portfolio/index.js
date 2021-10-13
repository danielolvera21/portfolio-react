import React from "react";
import runBuddyPic from "../../assets/small/hero-bg.jpg";
import socialScoopPic from "../../assets/small/social-scoop.png";
import movieDatePic from "../../assets/small/movie-date.png";
import pizzaHuntPic from "../../assets/small/pizza.jpg";

function Portfolio(props) {
  // const currentCategory = props

  return (
    <section>
      <h2>My Portfolio</h2>
      <p> A look at some of my past work...</p>
      <div className="flex-row">
        <a
          href="https://rocky-dusk-76545.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-img" src={socialScoopPic} alt="" />
        </a>
        <a
          href="https://danielolvera21.github.io/run-buddy/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-img" src={runBuddyPic} alt="" />
        </a>
        <a
          href="https://danielolvera21.github.io/movie_date/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-img" src={movieDatePic} alt="" />
        </a>
        <a
          href="https://github.com/danielolvera21/pizza-hunt"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-img" src={pizzaHuntPic} alt="" />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
