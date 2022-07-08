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
              basic coding questions.
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
              Check out Crypto Punx! This app is for users that are new to
              investing and are trying to get into the crypto world.
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
            <p className="card-text">Try out this note taking app!</p>
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
            <p className="card-text">Check out this text editor!</p>
            <a
              href="https://infinite-headland-27852.herokuapp.com/"
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
              This is for users that want to make secure passwords. Users will
              be prompted a few questions then be given a password.
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
              This is a Daily Scheduling app that has color coordinators for the
              hour. Grey means the hour has past, red means that is the current
              hour, and green meaning that hour is to come.
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
