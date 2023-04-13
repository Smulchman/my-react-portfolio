import React from "react";
import resumepdf from "../../assets/resume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <object
        data={resumepdf}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <a href="">
          <p>Resume Failed to Load!</p>
        </a>
      </object>
    </div>
  );
}
