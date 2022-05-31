import React from "react";

export default function Portfolio() {
  return (
    <>
      <div>
        <h2>Portfolio</h2>
      </div>
      <figure class="card wd100">
        <img src="./assets/images/cryptopunx.png" alt="cryptopunx image" />
        <a href="https://guarded-scrubland-93446.herokuapp.com/">
          <button class="golfbtn">Go To</button>
        </a>
      </figure>
      <div class="small-cards">
        <figure class="card wd50">
          <img src="./assets/images/golfapedia.png" alt="golfapedia image" />
          <a href="https://nirav-v.github.io/golfapedia/">
            <button>Go To</button>
          </a>
        </figure>
        <figure class="card wd50">
          <img src="./assets/images/horipic.png" alt="horiseon image" />
          <a href="https://jessemarino.github.io/horiseon-newandimprovied/">
            <button>Go To</button>
          </a>
        </figure>
        <figure class="card wd50">
          <img src="./assets/images/1.png" alt="passwordgenerator image" />
          <a href="https://jessemarino.github.io/the_super_generator/">
            <button>Go To</button>
          </a>
        </figure>
        <figure class="card wd50">
          <img src="./assets/images/calculator.jpeg" alt="calculator image" />
          <a href="https://www.omnicalculator.com/physics/helmholtz-resonator">
            <button>Go To</button>
          </a>
        </figure>
      </div>
    </>
  );
}
