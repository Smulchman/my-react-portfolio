import React from "react";
import headshot from "../../assets/picme.jpg";

export default function About() {
  return (
    <div>
      <div>
        <h1>
          About Page
          <img
            src={headshot}
            alt="A very colorful and floral headshot of me"
            width="auto"
            height="200px"
          />
        </h1>
      </div>
      <p>
        Hi there! My name is Sam Mulcahy and this is my portfolio's landing
        page. I am currently a student and Columbia University's Full Stack
        Development bootcamp. I have a bachelors in Theatre and I still think of
        almost everything in terms of art. I enjoy cooking, noise-rock, foreign
        films, and photography. In fact, all photographs that you see on this
        page were taken by me! Please browse what I've created. If you click on
        the preview image for a project, it will take you to a deployed version.
        If you'd like to contact me you'll find my information at the bottom of
        the page. Thank you for visiting my portfolio, I hope you have a
        wonderful day.
      </p>
    </div>
  );
}
