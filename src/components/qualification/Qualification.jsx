import React from "react";
import "./qualification.css";

export const Qualification = () => {
  const [toggleState, setToggleState] = React.useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="educa section" id="educa">
      <h2 className="section--title">Qualifications</h2>
      <div className="educa--container container">
        <div className="educa--tabs">

          <div
            className={
              toggleState === 1
                ? "educa--button educa--active button--flex"
                : "educa--button button--flex"
            }
            onClick={() => toggleTab(1)}
            >
            <i className="uil uil-briefcase-alt educa--icon"></i>Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "educa--button educa--active button--flex"
                : "educa--button button--flex"
            }
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-graduation-cap educa--icon"></i>Education
          </div>

        </div>

        <div className="educa--sections">

          <div
            className={
              toggleState === 1
                ? "educa--content educa--content-active"
                : "educa--content"
            }
            >
            <div className="educa--data">
              <div>
                <h3 className="educa--title">SE-Trainee</h3>
                <span className="educa--subtitle">
                  Qspider
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> July 2024 - Present
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">         
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Team-Leader</h3>
                <span className="educa--subtitle">
                 Travel Trove
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> May 2024 - Present
                </div>
              </div>         
            </div> 

            <div className="educa--data">
              <div>
                <h3 className="educa--title">Web-Dev Intern</h3>
                <span className="educa--subtitle">
                LetsGrowMore Pvt Ltd.
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2023 - Oct 2023
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">         
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Coordinator</h3>
                <span className="educa--subtitle">
                Reboot Club
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> Oct 2022
                </div>
              </div>         
            </div> 

          </div>

          <div
            className={
              toggleState === 2
                ? "educa--content educa--content-active"
                : "educa--content"
            }
          >
            <div className="educa--data">
              <div>
                <h3 className="educa--title">Under Graduation</h3>
                <span className="educa--subtitle">
                  NIET Engineering College School, Greater Noida <br></br>(CGPA- 7.66)
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2024
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Senior Secondary Education (CBSE)</h3>
                <span className="educa--subtitle">
                  Lions School, Mirzapur (Percentage- 74.4%)
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2019
                </div>
              </div>
            </div>

            <div className="educa--data">
              <div>
                <h3 className="educa--title">High School Education (CBSE)</h3>
                <span className="educa--subtitle">
                  Lions School, Mirzapur (Percentage- 69.4%)
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
