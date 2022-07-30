import React from "react";
import { useAlert } from "react-alert";

export default function Contact() {
  const alert = useAlert();
  return (
    <>
      <div className="title"></div>

      <form className="form">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Write a brief message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();

            alert.show(
              "This form currently doesn't work. If you would like to reach out please email me at jesswritincode@gmail.com. You can also find my contact info on my Github!"
            );
          }}
          type="submit"
          className="btn btn-dark"
        >
          Submit
        </button>
      </form>
    </>
  );
}
