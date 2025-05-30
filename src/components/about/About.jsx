import React from "react";
import "./about.css";
import photo from "../../assets/photo.jpg";
// import { Information } from "./Information";

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section--title">About me</h2>
      <div className="about--container container grid">
        <img src={photo} alt="" className="about--img" />
        <div className="about--data">
          {/* <Information /> */}
          <p className="about--description">
            I am a Software developer, currently pursuing B.Tech in Computer Science from NIET College, Greater Noida. I have learned many programming languages like JAVA, JAVASCRIPT, Python, I am familiar with many frameworks like , JDBC , JSP , NodeJs , ReactJs, etc. I have worked with databases like MongoDB and SQL. Moreover, I am proficient in using developer tools like Git, Github, VS Code and Eclipse IDE, and in hosting on Cloud platform. I love to learn & explore new technologies and building real-world projects
          </p>
          <a download="" href="https://drive.google.com/file/d/1FKfe9fgKuRNzvHxunw9dHK-SVlazSgan/view?usp=drive_link" className="button button--flex" target="_blank" rel="noreferrer">
            Download Resume
            <i class="uil uil-file-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
