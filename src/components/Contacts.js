import React from "react";

const Contacts = () => {
  return (
    <div className="grid-box">
      <div className="random">
        <img
          src="https://media2.giphy.com/media/fIEtIJj8NXLadggfN6/giphy.gif?cid=790b7611eebdb2bb17e6609cd58cf7e72a478e6d334f883e&rid=giphy.gif&ct=s"
          alt="floating gif"
        ></img>
        <h1 style={{marginBottom: "20px"}}>CONTACTS</h1>
      </div>

      <div className="contact-box" style={{ textAlign: "center" }}>
        <a href="mailto:justinhoang90@gmail.com" target="_blank" rel="noreferrer">
          <button className="button">
            <i className="fas fa-envelope" id="icon"></i> Email
          </button>
        </a>
        <br></br>

        <a href="https://www.linkedin.com/in/justin-hoang-56a46b175/" target="_blank" rel="noreferrer">
          <button className="button">
            <i className="fab fa-linkedin" id="icon"></i> LinkedIn
          </button>
        </a>
        <br></br>

        <a href="https://github.com/ScorpyG" target="_blank" rel="noreferrer">
          <button className="button">
            Github <i className="fab fa-github-square" id="icon"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
