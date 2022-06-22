import React from "react";
import doYouCode from "../../img/doYouCode.png";
import textPic from "../../img/quicktext.png";
import golfPic from "../../img/golfapedia.png";
import cryptoPic from "../../img/cryptopunx.png";
import PassGenPic from "../../img/1.png";
import note from "../../img/note.png";
import calander from "../../img/calander.png";

export default function Portfolio() {
  return (
    <>
      <div className="title">
        <h1>Portfolio</h1>
      </div>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={doYouCode} className="card-img-top" alt="calculator" />
          <div className="card-body">
            <h5 className="card-title">Code Quiz</h5>
            <p className="card-text">
              This app is for users that want to test their knowledge on some
              basic coding questions. This is a timed quiz and if you answer
              incorrectly you will have time deducted.
            </p>
            <a
              href="https://jessemarino.github.io/do-you-even-code/"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={cryptoPic} className="card-img-top" alt="crypto-page" />
          <div className="card-body">
            <h5 className="card-title">Crypto PunX</h5>
            <p className="card-text">
              Check out Crypto Punx! This app is for users that are new
              investing in crypto and are trying to get into the crypto world.
            </p>
            <a
              href="https://guarded-scrubland-93446.herokuapp.com"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={note} className="card-img-top" alt="calculator" />
          <div className="card-body">
            <h5 className="card-title">Take a Note</h5>
            <p className="card-text">
              This app is for users that need to take a few notes through-out
              the day. Write a note down and it will be saved. If you need to
              view it all you have to do is click on the note. Once your
              finished with the note you can delete it.
            </p>
            <a
              href="https://limitless-sea-73688.herokuapp.com/"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={textPic} className="card-img-top" alt="text-editor" />
          <div className="card-body">
            <h5 className="card-title">Text Editor</h5>
            <p className="card-text">
              Check out this text editor! Once opened you can add text that will
              stay on app even if you leave or refresh.
            </p>
            <a
              href="https://infinite-headland-27852.herokuapp.com/"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={golfPic} className="card-img-top" alt="golfopida" />
          <div className="card-body">
            <h5 className="card-title">Golfapedia</h5>
            <p className="card-text">
              Golfapedia is an app for users that want to get into golfing.
              Enter a city and it will show all golf courses in your area along
              with the weather.{" "}
            </p>
            <a
              href="https://nirav-v.github.io/golfapedia/"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={PassGenPic}
            className="card-img-top"
            alt="passwordGenerator"
          />
          <div className="card-body">
            <h5 className="card-title">Password Generator</h5>
            <p className="card-text">
              This is app is for users that want to make secure passwords. Users
              will be prompted a few questions then be given a password.
            </p>
            <a
              href="https://jessemarino.github.io/the_super_generator/"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={calander}
            className="card-img-top"
            alt="passwordGenerator"
          />
          <div className="card-body">
            <h5 className="card-title">Daily Scheduler</h5>
            <p className="card-text">
              This app is for users that need to keep track of their daily
              tasks. This planner has color codes for the hour. Grey means the
              hour has past, red means that is the current hour, and green
              meaning that hour is to come.
            </p>
            <a
              href="https://jessemarino.github.io/key_to_a_great_day/"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
