/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/lizard.jpg";

const imageAltText = "A lizard";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Flutter gallery",
    description:
      "collection of Flutter apps, demos, and vignettes that demonstrate best practices for building responsive, adaptive, and flexible Flutter applications.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development and mobile apps",
    description:
      "collaborative project that teaches web development and mobile apps to beginners. It is a great resource for those who are new to coding.",
    url: "https://github.com/EmmanuelKusiluka/Flutter-Responsive-Admin-Panel-or-Dashboard",
  },
  {
    title: "Web scraping",
    description:
      "great for those who are interested in web scraping. It is a great resource for those who are new to coding.",
    url: "https://github.com/EmmanuelKusiluka/Flutter-Responsive-dashboard",
  },
  {
    title: "Git training",
    description:
      "great for those who are interested in learning Git. It is a great resource for those who are new to coding.",
    url: "https://www.youtube.com/devslopes",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
