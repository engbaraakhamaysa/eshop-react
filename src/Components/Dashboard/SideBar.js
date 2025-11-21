import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
import { WindowSize } from "../../Context/WindowContext";

export default function SideBar() {
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  console.log(isOpen);

  const WindowContext = useContext(WindowSize);
  const windowWidth = WindowContext.windowSize;
  console.log(windowWidth);
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
        <NavLink
          to={"users"}
          className={"d-flex align-items-center gap-2 side-bar-link-css"}
        >
          <FontAwesomeIcon
            style={{ padding: isOpen ? "10px 8px 10px 15px" : "10px 8px" }}
            icon={faUsers}
          />
          <p
            className="m-0"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            Users
          </p>
        </NavLink>
        <NavLink
          to={"/dashboard/user/add"}
          className={"d-flex align-items-center gap-2 side-bar-link-css"}
        >
          <FontAwesomeIcon
            style={{ padding: isOpen ? "10px 8px 10px 15px" : "10px 8px" }}
            icon={faPlus}
          />
          <p
            className="m-0"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            Add User
          </p>
        </NavLink>
      </div>
    </>
  );
}
