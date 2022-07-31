import React from "react";
import profilePicture from "../../img/profilePicture.JPG";

export default function Contact() {
  return (
    <>
      <div className="title"></div>

      <section
        className="contactSection"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <div className="card mb-3 contactCard">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={profilePicture}
                className="profilePicture"
                alt="profile-picture"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Contact Information</h2>
                <div className="contactInfo">
                  <h4>Email</h4>
                  <p>jmdotcoding@gmail.com</p>
                </div>
                <div className="contactInfo">
                  <h4>LinkedIn</h4>
                  <p>
                    <a
                      className="contactLink"
                      href="https://www.linkedin.com/in/jesswritincode/"
                    >
                      LinkedIn Profile
                    </a>
                  </p>
                  <p></p>
                </div>
                <div className="contactInfo">
                  <h4>GitHub</h4>
                  <p>
                    <a
                      className="contactLink"
                      href="https://github.com/jessemarino"
                    >
                      Github Profile
                    </a>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
