import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../Context/MenuContext";
import { useContext, useEffect, useState } from "react";
import { AUTH_USER, baseURL, LOGOUt } from "../../Api/Api";
import { Axios } from "../../Api/axios";
import { Navigate } from "react-router-dom";
import { DropdownButton, DropdownItem } from "react-bootstrap";
import axios from "axios";
import Cookie from "cookie-universal";

export default function TopBar() {
  const menu = useContext(Menu);
  const setIsOpen = menu.setIsOpen;
  const [name, setName] = useState("");

  useEffect(() => {
    Axios.get(`/${AUTH_USER}`)
      .then((data) => setName(data.data.name))
      .catch(() => Navigate("/login", { replace: true }));
  }, []);
  console.log(menu);

  async function handleLogout() {
    const cookie = Cookie();
    const refreshToken = cookie.get("refershToken");
    if (!refreshToken) {
      console.log("No refresh token found");
      return;
    }

    try {
      const res = await axios.post(`${baseURL}/${LOGOUt}`, { refreshToken });
      console.log(res.data);
      window.location.pathname = "/login";

      console.log(res.data);

      cookie.remove("e-commercs");
      cookie.remove("refershToken");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="top-bar">
      <div className=" d-flex align-items-center justify-content-between h-100">
        <div className="d-flex align-items-center gap-5">
          <h3>E-Commerce</h3>
          <FontAwesomeIcon
            onClick={() => setIsOpen((prev) => !prev)}
            cursor={"pointer"}
            icon={faBars}
          />
        </div>
        <div>
          <DropdownButton id="dropdown-basic-buton" title={name}>
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
}
