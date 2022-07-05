import React from "react";

export default function Resume() {
  return (
    <>
      <div className="title">
        <h1>Resume</h1>
      </div>
      <div>
        <p className="downloadBtn">
          Check out my resume{" "}
          <a
            className=" hereBtn "
            href="https://docs.google.com/document/d/1n61BZrdFGnxRdFJ4lB1AEayd6OTRZ_5wKblu7OgoK-4/edit?usp=sharing"
          >
            here
          </a>
        </p>
      </div>
      <div className="experiance">
        <h3>Front-end Experience</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">jQuery</li>
          <li className="list-group-item">responsive design</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Bootstrap</li>
        </ul>
      </div>
      <div className="experiance">
        <h3>Back-end Experience</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">API's</li>
          <li className="list-group-item">Node.js</li>
          <li className="list-group-item">Express.js</li>
          <li className="list-group-item">MySQL</li>
          <li className="list-group-item">MongoDB, Mongoose</li>
          <li className="list-group-item">REST</li>
          <li className="list-group-item">GraphQL</li>
        </ul>
      </div>
    </>
  );
}
