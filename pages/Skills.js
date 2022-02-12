import React from "react";

function Skills() {
  return (
    <div class="skills">
      <div class="skills2">
        <div class="progress-bar-container">
          <h1
            className="fnt"
            style={{ textAlign: "center", fontWeight: "800", fontSize: "3vw" }}
          >
            My Skills
          </h1>
          <h2>C/C++</h2>
          <div class="progress-bar">
            <span class="percentage c"></span>
          </div>
        </div>

        <div class="progress-bar-container">
          <h2>Java</h2>
          <div class="progress-bar">
            <span class="percentage java"></span>
          </div>
        </div>

        <div class="progress-bar-container">
          <h2>Python</h2>
          <div class="progress-bar">
            <span class="percentage python"></span>
          </div>
        </div>

        <div class="progress-bar-container">
          <h2>HTML</h2>
          <div class="progress-bar">
            <span class="percentage html"></span>
          </div>
        </div>

        <div class="progress-bar-container">
          <h2>CSS</h2>
          <div class="progress-bar">
            <span class="percentage css"></span>
          </div>
        </div>

        <div class="progress-bar-container">
          <h2>JavaScript</h2>
          <div class="progress-bar">
            <span class="percentage javascript"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
