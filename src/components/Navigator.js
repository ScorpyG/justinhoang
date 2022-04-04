import { Link, useLocation } from "react-router-dom";
import ToTop from "./ToTop";
import ThemeToggle from "./ThemeToggle";
import navBarURLs from "../data/nav-data";

const Navigator = () => {
  // Destructuring pathname from location
  const { pathname } = useLocation();

  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      <ToTop />
      <ThemeToggle />

      <header className="wrapper">
        {navBarURLs.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/${item.path}`}
              className={
                splitLocation[1] === `${item.path}`
                  ? "nav-button active-nav"
                  : "nav-button"
              }
            >
              <div className="icon">
                <i className={`${item.icon}`} />
              </div>
              <span>{`${item.title}`}</span>
            </Link>
          );
        })}
      </header>
    </>
  );
};

export default Navigator;
