import React from "react";
import doYouCode from "../../img/doYouCode.png";
import textPic from "../../img/quicktext.png";
import cryptoPic from "../../img/cryptopunx.png";
import passwordGenerator from "../../img/passwordGenerator.png";
import note from "../../img/note.png";
import calander from "../../img/calander.png";
import roleMaster from "../../img/rolemaster.png";
import myTeam from "../../img/myteam.png";
import pythonTechNews from "../../img/pythonTechNews.png";
import badgeMaker from "../../img/badgemaker.png";

export default function Portfolio() {
  return (
    <>
      <div className="title"></div>

      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="card-port" style={{ width: "18rem" }}>
          <img src={doYouCode} className="card-img-top-port" alt="calculator" />
          <div className="card-body">
            <h5 className="card-title-port">Code Quiz</h5>
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

        <div className="card-port" style={{ width: "18rem" }}>
          <img
            src={roleMaster}
            className="card-img-top-port"
            alt="roleMaster"
          />
          <div className="card-body">
            <h5 className="card-title-port">Role Master</h5>
            <p className="card-text">
              An app for users that need an employee management system.
            </p>
            <a
              href="https://github.com/jessemarino/role_master"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>

        <div className="card-port" style={{ width: "18rem" }}>
          <img
            src={pythonTechNews}
            className="card-img-top-port"
            alt="myTeam"
          />
          <div className="card-body">
            <h5 className="card-title-port">Just Tech News</h5>
            <p className="card-text">
              Just Tech News is a form for users to share new tech they have
              discovered.
            </p>
            <a
              href="https://news-feed-with-python.herokuapp.com/"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>

        <div className="card-port" style={{ width: "18rem" }}>
          <img src={myTeam} className="card-img-top-port" alt="myTeam" />
          <div className="card-body">
            <h5 className="card-title-port">My Team</h5>
            <p className="card-text">
              An app for users that need an want to create employee cards. This
              app takes in employee info via CLI and then writes it to a HTML
              file.
            </p>
            <a
              href="https://github.com/jessemarino/write_em_down"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>

        <div className="card-port" style={{ width: "18rem" }}>
          <img src={badgeMaker} className="card-img-top-port" alt="myTeam" />
          <div className="card-body">
            <h5 className="card-title-port">CatWorx BadgeMaker</h5>
            <p className="card-text">
              CatWorx badgeMaker is for users that need to create badges for
              their employees. Users can enter employee info via CLI or update
              the CSV file and generate them all at once.
            </p>
            <a
              href="https://github.com/jessemarino/CatWorx.BadgeMaker"
              className="btn btn-dark"
            >
              Check it out!
            </a>
          </div>
        </div>

        <div className="card-port" style={{ width: "18rem" }}>
          <img src={note} className="card-img-top-port" alt="calculator" />
          <div className="card-body">
            <h5 className="card-title-port">Take a Note</h5>
            <p className="card-text">Try out this note taking app!</p>
            <a
              href="https://limitless-sea-73688.herokuapp.com/"
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
