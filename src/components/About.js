import React, { Fragment, useState } from "react";
import Tilt from "react-tilt";

// Profile Image JSX
const ToggleImage = ({ active, handleChangeActive }) => {
  const ghostImg =
    "https://media0.giphy.com/media/LjA6BWuO1vvnE830dT/giphy.gif?cid=790b7611e3742461ede2d7ce38651cf98c05667af7efc2cb&rid=giphy.gif&ct=s";
  const profilePic = "./img/about-logo/profile.jpg";

  return (
    <>
      {active ? (
        <img
          width={340}
          src={profilePic}
          alt="profile"
          id="profileImg"
          onClick={handleChangeActive}
        />
      ) : (
        <img
          width={340}
          src={ghostImg}
          alt="ghost"
          id="ghostImg"
          onClick={handleChangeActive}
        />
      )}
    </>
  );
};

// About Page JSX
const About = () => {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((prevImg) => {
      return !prevImg;
    });
  };

  return (
    <>
      <div className="grid-content">
        <div className="img-grid">
          <Tilt options={{scale: 1, speed: 1000}}>
          <ToggleImage
            active={active}
            handleChangeActive={handleChangeActive}
          />
          </Tilt>
        </div>
        <div className="about-grid">
          <h1>ABOUT ME</h1>
          <p>
            I'm a software developer seeking for opportunity to advance my
            knowledge and skills within software development. Besides grinding
            academic credits, I've enjoyed learning different technologies and
            building applications to challenge my own intellect, creativity,
            problem-solving, planning, and organization.
          </p>
          <p>
            Skills/Interests:{" "}
            <b>
              JavaScript, HTML, CSS, SASS, React.js, UX/UI, Node, Git, Github,
              SQL, NoSQL, Python, C++, Next.js, Vite, Rust, DeFi, crypto,
              Web3.0, SaaS
            </b>
          </p>
          <a
            href="https://docs.google.com/document/d/1keGfeTA8uYQEpV_unXnjeFpRyvSMBYK9HhW1UxVVdN4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            id="resume"
          >
            <button className={`button`}>
              <i className="fas fa-file"></i> Resume
            </button>
          </a>
        </div>
      </div>

      <section className="technical-skill">
        <h2>Technical</h2>
        <div className="skill-set">
          <div>
            <i className="fab fa-html5" />
            <h3>HTML</h3>
          </div>
          <div>
            <i className="fab fa-css3-alt" />
            <h3>CSS</h3>
          </div>
          <div>
            <i className="fab fa-js-square" />
            <h3>JavaScript</h3>
          </div>
          <div>
            <i className="fab fa-react" />
            <h3>React.js</h3>
          </div>
          <div>
            <i className="fab fa-node" />
            <h3>Node.js</h3>
          </div>
          <div>
            <i className="fas fa-code" />
            <h3>C++</h3>
          </div>
          <div>
            <i className="fab fa-python" />
            <h3>Python</h3>
          </div>
          <div>
            <i className="fab fa-envira" />
            <h3>MongoDB</h3>
          </div>
        </div>
      </section>

      <section className="tools">
        <h2>Tools</h2>
        <div className="skill-set2">
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/about-logo/vscode.png" alt="project" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src="./img/about-logo/github.png" alt="project" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img src="./img/about-logo/git.png" alt="project" />
          </a>
          <a
            href="https://www.virtualbox.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/about-logo/virtualbox.png" alt="project" />
          </a>
          <a href="https://ubuntu.com/" target="_blank" rel="noreferrer">
            <img src="./img/about-logo/ubuntu.png" alt="project" />
          </a>
          <a
            href="https://www.microsoft.com/en-ca/windows"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/about-logo/win10.png" alt="project" />
          </a>
        </div>
      </section>

      <Fragment>
        <section className="fun-facts">
          <h2>Hobbies</h2>
          <p style={{ textAlign: "center" }}>A bit of...insights!</p>
          <div className="skill-set3">
            <div className="hobbies-cards">
              <i className="fas fa-brain" style={{ color: "pink" }}></i>
              <p>
                I like spending time learning different things outside of
                programming, like psychology, cooking and sports. Which allow me
                to keep on diversifying my pre-existing skill-sets and improve
                myself as individual.
              </p>
            </div>
            <div className="hobbies-cards">
              <i className="fas fa-fan" style={{ color: "lightblue" }} />
              <p>
                By combining both of my background in art and science help me
                design interactive art to many techno interfaces allows me to
                illuminating and underline the beauty and the complexity of the
                world around us.
              </p>
            </div>
            <div className="hobbies-cards">
              <i className="fas fa-crown" style={{ color: "orange" }}></i>
              <p>
                Growing up playing video games has turned me into a competitive
                player. With some of that competitiveness being translated into
                my present working life. So, I always thrive towards becoming
                the better version of myself.
              </p>
            </div>
            <div className="hobbies-cards">
              <i
                className="fas fa-comment-alt"
                style={{ color: "rgb(231, 137, 255)" }}
              ></i>
              <p>
                Started off with working in retail and customer services. I
                developed a deep sense of interpersonal perception that helped
                me communicate with people and taught me to become a better
                listener and more efficient at problem solving.
              </p>
            </div>
          </div>
        </section>
      </Fragment>
    </>
  );
};

export default About;
