import React from "react";

export default function Resume() {
  return (
    <>
      <div>
        <h1>Resume</h1>
        <p>
          Download my Resume{" "}
          <a href="https://docs.google.com/document/d/1AqBVtRPNnAkyK1Fe3gLh437tizIAt2GhSdUeCncXYe8/edit?usp=sharing">
            here
          </a>
        </p>
      </div>
      <div>
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
      <div>
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
