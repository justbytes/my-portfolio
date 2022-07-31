import React from "react";

export default function Resume() {
  return (
    <>
      <div className="title"></div>
      <div className="resume">
        <p className="resumeLink">
          Check out my resume {""}
          <a
            className=" resumeBtn "
            href="https://docs.google.com/document/d/1xToHHpqT6BF5BvOERihdtQU6KI-VteiDJcCR3LWUrFE/edit?usp=sharing"
          >
            here.
          </a>
        </p>
      </div>
      <div className="experiance">
        <h3>Languages</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">Java</li>
          <li className="list-group-item">C#</li>
          <li className="list-group-item">Python</li>
        </ul>
      </div>
      <div className="experiance">
        <h3>Frameworks</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Apollo GraphQL</li>
          <li className="list-group-item">Bootstrap</li>
          <li className="list-group-item">Babel</li>
          <li className="list-group-item">Bycrpt </li>
          <li className="list-group-item">Express.JS</li>
          <li className="list-group-item">Flask</li>
          <li className="list-group-item">Handlebars.JS</li>
          <li className="list-group-item">Insomnia</li>
          <li className="list-group-item">Inquirer</li>
          <li className="list-group-item">Jest.JS</li>
          <li className="list-group-item">Jinja</li>
          <li className="list-group-item">jQuery</li>
          <li className="list-group-item">JWT</li>
          <li className="list-group-item">.NET</li>
          <li className="list-group-item">Node.JS</li>
          <li className="list-group-item">NPM</li>
          <li className="list-group-item">PyPi</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Redux</li>
          <li className="list-group-item">Sequelize</li>
          <li className="list-group-item">Spring</li>
          <li className="list-group-item">Spring Boot</li>
          <li className="list-group-item">ThymeLeaf</li>
          <li className="list-group-item">PyMySQL</li>
          <li className="list-group-item">Webpack</li>
        </ul>
      </div>
      <div className="experiance">
        <h3>Databases</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">MongoDB</li>
          <li className="list-group-item">MYSQL</li>
        </ul>
      </div>
      <div className="experiance">
        <h3>IDE's</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Visual Studios</li>
          <li className="list-group-item">IntelliJ</li>
        </ul>
      </div>
      <div className="experiance">
        <h3>Cloud</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Heroku</li>
        </ul>
      </div>
    </>
  );
}
