import "../port.css";
import React from "react";
import calculatorPic from "../../img/calculator.jpeg";
import textPic from "../../img/texteditor.png";
import golfPic from "../../img/golfapedia.png";
import cryptoPic from "../../img/cryptopunx.png";
import PassGenPic from "../../img/1.png";

export default function Portfolio() {
  return (
    <>
      <div>
        <h2>Portfolio</h2>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={cryptoPic} class="card-img-top" alt="crypto-page" />
        <div className="card-body">
          <h5 className="card-title">Crypto PunX</h5>
          <p className="card-text">
            Check out Crypto Punx for all your crypto needs. This site was made
            for new investors trying to get into the crypto world.
          </p>
          <a
            href="https://guarded-scrubland-93446.herokuapp.com"
            className="btn btn-primary"
          >
            To Cyrpto Punx!
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={golfPic} class="card-img-top" alt="golfopida" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Wanna find a golf course near you?</p>
          <a
            href="https://nirav-v.github.io/golfapedia/"
            className="btn btn-primary"
          >
            Get Golfin!
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={PassGenPic} class="card-img-top" alt="passwordGenerator" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Suck at making secure passwords?</p>
          <a
            href="https://jessemarino.github.io/the_super_generator/"
            className="btn btn-primary"
          >
            Password!
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={textPic} class="card-img-top" alt="text-editor" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Try out this text editor!</p>
          <a
            href="https://infinite-headland-27852.herokuapp.com/"
            className="btn btn-primary"
          >
            Edit Text
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={calculatorPic} class="card-img-top" alt="calculator" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Need a calculator for your helmholtz coil?
          </p>
          <a
            href="https://www.omnicalculator.com/physics/helmholtz-resonator"
            className="btn btn-primary"
          >
            Lets calculate
          </a>
        </div>
      </div>

      {/* <figure class="card wd100">
        <img
          src="../../../public/images/cryptopunx.png"
          alt="cryptopunx image"
        />
        <a href="https://guarded-scrubland-93446.herokuapp.com/">
          <button class="golfbtn">Go To</button>
        </a>
      </figure>
      <div class="small-cards">
        <figure class="card wd50">
          <img
            src="../../../public/images/golfapedia.png"
            alt="golfapedia image"
          />
          <a href="https://nirav-v.github.io/golfapedia/">
            <button>Go To</button>
          </a>
        </figure>
        <figure class="card wd50">
          <img src="../../../public/images/horipic.png" alt="horiseon image" />
          <a href="https://jessemarino.github.io/horiseon-newandimprovied/">
            <button>Go To</button>
          </a>
        </figure>
        <figure class="card wd50">
          <img
            src="../../../public/images/1.png"
            alt="passwordgenerator image"
          />
          <a href="https://jessemarino.github.io/the_super_generator/">
            <button>Go To</button>
          </a>
        </figure>
        <figure class="card wd50">
          <img src="../../img/calculator.jpeg" alt="calculator image" />
          <a href="https://www.omnicalculator.com/physics/helmholtz-resonator">
            <button>Go To</button>
          </a>
        </figure>
      </div> */}
    </>
  );
}
