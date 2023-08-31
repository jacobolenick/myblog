import React from "react";
import "../Styles/Blogcard.css";
import Pill from "./Pills";
import Cardbutton from "./Cardbutton";

const Blogcard = ({ blog }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{blog.title}</h3>
        <Pill name="#React" />
        <Pill name="#Front-End Code" />
        <p className="card-text">{blog.body}</p>
        <Cardbutton />
      </div>
    </div>
  );
}

export default Blogcard;