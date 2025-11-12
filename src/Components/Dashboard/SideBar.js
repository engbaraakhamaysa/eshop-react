import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";

export default function SideBar() {
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  console.log(isOpen);
  return (
    <div
      className="side-bar pt-3"
      style={{ width: isOpen ? "240px" : "fit-content" }}
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
        to={"products"}
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
          Products
        </p>
      </NavLink>
    </div>
  );
}
