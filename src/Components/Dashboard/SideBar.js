import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Menu } from "../../Context/MenuContext";
import { WindowSize } from "../../Context/WindowContext";
import { AUTH_USER } from "../../Api/Api";
import { Axios } from "../../Api/axios";
import { links } from "./NavLink";

export default function SideBar() {
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  console.log(isOpen);

  const WindowContext = useContext(WindowSize);
  const windowWidth = WindowContext.windowSize;
  // console.log(windowWidth);

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
    Axios.get(`/${AUTH_USER}`)
      .then((data) => setUser(data.data))
      .catch(() => navigate("/login", { replace: true }));
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "70px",
          left: "0",
          width: "100%",
          height: "100vh",
          background: "rgba(0,0,0,0.2)",
          display: windowWidth < "768" && isOpen ? "block" : "none",
        }}
      ></div>
      <div
        className="side-bar pt-3"
        style={{
          left: windowWidth < 768 ? (isOpen ? 0 : "-100%") : 0,
          width: isOpen ? "240px" : "fit-content",
          position: windowWidth < "768" ? "fixed" : "sticky",
        }}
      >
        {links.map(
          (link, key) =>
            link.role.includes(user.role) && (
              <NavLink
                key={key}
                to={link.path}
                className={"d-flex align-items-center gap-2 side-bar-link-css"}
              >
                <FontAwesomeIcon
                  style={{
                    padding: isOpen ? "10px 8px 10px 15px" : "10px 8px",
                  }}
                  icon={link.icon}
                />
                <p
                  className="m-0"
                  style={{
                    display: isOpen ? "block" : "none",
                  }}
                >
                  {link.name}
                </p>
              </NavLink>
            )
        )}
      </div>
    </>
  );
}
