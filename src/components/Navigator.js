import { Link, useLocation } from "react-router-dom";
import ToTop from "./ToTop";
import ThemeToggle from "./ThemeToggle";

const Navigator = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      <ToTop />
      <ThemeToggle />

      <header className="wrapper">

         <Link to="/contacts" className={splitLocation[1] === "contacts" ? "nav-button active-nav" : "nav-button"} >
          <div className="icon">
            <i className="fa fa-fw fa-envelope"></i>
          </div>
          <span>contacts()</span>
        </Link>

        <Link to="/projects" className={splitLocation[1] === "projects" ? "nav-button active-nav" : "nav-button"}>
          <div className="icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <span>projects()</span>
        </Link>

        <Link to="/about" className={splitLocation[1] === "about" ? "nav-button active-nav" : "nav-button"}>
          <div className="icon">
            <i className="fa fa-fw fa-user"></i>
          </div>
          <span>about()</span>
        </Link>

        <Link to="/" className={splitLocation[1] === "" ? "nav-button active-nav" : "nav-button"}>
          <div className="icon">
            <i className="fas fa-undo"></i>
          </div>
          <span>return()</span>
        </Link>
      </header>
    </>
  );
};

export default Navigator;
