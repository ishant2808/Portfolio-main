import React from "react";
import "./project.css";
import krishak from "../../assets/KrishakImage.jpg";
import healthhelp from "../../assets/HealthelpImage.jpg";
import happyplace from "../../assets/HappyPlaceImage.jpg";


export const Project = () => {
  return (
    <section className="card section" id="card">
      <div className="card--container container">
        <h2 className="section--title">Projects</h2>

        <div className="cards--container container">

          <article className="card--item">
            <div className="card--item-image">
              <img src={krishak} alt="" srcset="" />
            </div>
            <h3>Travel Trove</h3>
            <div className="btnn">
              <div className="btn">React Js</div>
              <div className="btn">Node Js</div>
              <div className="btn">MongoDB</div>
              <div className="btn">Rest Api</div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={happyplace} alt="" srcset="" />
            </div>
            <h3>CodePen Clone</h3>
            <div className="btnn">
              <div className="btn">Js</div>
              <div className="btn">React Js</div>
              <div className="btn">Css</div>
              <div className="btn">Firebase</div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={healthhelp} alt="" srcset="" />
            </div>
            <h3>E-Commerce Website</h3>
            <div className="btnn">
              <div className="btn">HTML</div>
              <div className="btn">CSS</div>
              <div className="btn">JS</div>
            </div>
          </article>

          {/* ADD MORE PROJECTS */}

        </div>
      </div>
    </section>
  );
};
