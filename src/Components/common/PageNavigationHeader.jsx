import {} from "react";
import { useLocation } from "react-router-dom";
import Styles from "../Styles/PageNavigationHeader.module.css";
import classNames from "classnames";

export const PageNavigationHeader = () => {
  const { pathname } = useLocation();

  let pageName = "";

  if (pathname === "/") pageName = "";
  else if (pathname === "/About") pageName = "Know More about Me....";
  else if (pathname === "/Services") pageName = "My Expertise & Services";
  else if (pathname === "/Contact") pageName = "Get In Touch";
  else if (pathname === "/Experience") pageName = "Experience";

  return (
    <>
      {pathname != "/" ? (
        <h2
          className={classNames(
            Styles.header,
            "animate__animated",
            "animate__bounceIn",
          )}
        >
          {pageName}
        </h2>
      ) : (
        ""
      )}
    </>
  );
};
