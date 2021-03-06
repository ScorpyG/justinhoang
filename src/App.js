import "./App.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

// Landing Page component
function App() {
  return (
    <div className="hero-text" id="body-text">
      <div className="headings">
        <span className="big-text">
          <h2>Hi, I'm</h2>
        </span>
        <span className="mid-text">
          <h2>Hi, I'm</h2>
        </span>

        <span className="big-text">
          <h1 id="name">Justin Hoang</h1>
        </span>
        <span className="mid-text">
          <h1 id="name">Justin</h1>
        </span>

        <span className="big-text">
          <p>
            I'm a web developer looking to join a team of
            creative people and help solve problems. Be able to have the freedom
            to create and learn is something I always love. If you want to start
            a project,{" "}
            <a
              className="high"
              href="mailto:justinhoang90@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <b>Message me!</b>
            </a>
          </p>
          <p className="type-writer">
            Currently developing with
            <b>
              {/* Type writer animation */}
              <Typewriter
                options={{
                  cursor: " <",
                  strings: ["JavaScript", "React.js", "Node.js", "HTML & CSS", "Python", "SASS"],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                  wrapperClassName: 'type-writer'
                }}
              />
            </b>
          </p>
        </span>
        <span className="mid-text">
          <p>
            I'm looking for an opportunity to join a team of people to learn and
            help solve problems.
          </p>
        </span>
      </div>
      <Link to="/about">
        <button className="button">Learn More!</button>
      </Link>
    </div>
  );
}

export default App;