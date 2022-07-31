import React from "react";
import codeQuiz from "../../img/doYouCode.png";
import takeNote from "../../img/note.png";
import roleMaster from "../../img/rolemaster.png";
import myTeam from "../../img/myteam.png";
import pythonTechNews from "../../img/pythonTechNews.png";
import badgeMaker from "../../img/catWorx.png";

export default function Portfolio() {
  return (
    <>
      <div className="title"></div>

      <section
        className="portfolioSection"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <div className="card-port" style={{ width: "18rem" }}>
          <img src={codeQuiz} className="card-img-top-port" alt="calculator" />
          <div className="card-body">
            <h5 className="card-title-port">Code Quiz</h5>
            <p className="card-text">
              A timed multiple choice coding quiz with basic coding questions.
              (JavaScript)
            </p>
            <a
              href="https://jessemarino.github.io/do-you-even-code/"
              className="btn btn-dark"
            >
              Check it out
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
              Content management system(CMS) built to manage a company’s
              employee database (JavaScript)
            </p>
            <a
              href="https://github.com/jessemarino/role_master"
              className="btn btn-dark"
            >
              Check it out
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
              A social media form to share, discuss, and discover new
              techologies. After creating an account users can post, comment and
              up vote. (Python)
            </p>
            <a
              href="https://news-feed-with-python.herokuapp.com/"
              className="btn btn-dark"
            >
              Check it out
            </a>
          </div>
        </div>

        <div className="card-port" style={{ width: "18rem" }}>
          <img src={myTeam} className="card-img-top-port" alt="myTeam" />
          <div className="card-body">
            <h5 className="card-title-port">My Team</h5>
            <p className="card-text">
              Team profile generator that takes employee information via CLI and
              generates an HTML page displaying the teams summaries.
              (JavaScript)
            </p>
            <a
              href="https://github.com/jessemarino/write_em_down"
              className="btn btn-dark"
            >
              Check it out
            </a>
          </div>
        </div>

        <div className="card-port" style={{ width: "18rem" }}>
          <img src={badgeMaker} className="card-img-top-port" alt="myTeam" />
          <div className="card-body">
            <h5 className="card-title-port">CatWorx BadgeMaker</h5>
            <p className="card-text">
              Security badge generator that takes an employee's name, id, and
              photo via CLI. (C#)
            </p>
            <a
              href="https://github.com/jessemarino/CatWorx.BadgeMaker"
              className="btn btn-dark"
            >
              Check it out
            </a>
          </div>
        </div>

        <div className="card-port" style={{ width: "18rem" }}>
          <img src={takeNote} className="card-img-top-port" alt="calculator" />
          <div className="card-body">
            <h5 className="card-title-port">Take a Note</h5>
            <p className="card-text">
              Note taking app that allows you to add, save, and delete notes.
              (JavaScript)
            </p>
            <a
              href="https://limitless-sea-73688.herokuapp.com/"
              className="btn btn-dark"
            >
              Check it out
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
