import React from "react";
import resumepdf from "../../assets/resume.pdf";

// grabbing the width and height of a user's screen
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <object
        data={resumepdf}
        type="application/pdf"
        width="100%"
        height={(windowHeight-150)}
      >
        <a href="">
          <p>Resume Failed to Load!</p>
        </a>
      </object>
    </div>
  );
}
