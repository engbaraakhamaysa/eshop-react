import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import { AUTH_USER } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import { Axios } from "../../Api/axios";
import Err403 from "./403";

export default function RequireAuth({ allowedRole }) {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
    Axios.get(`/${AUTH_USER}`)
      .then((data) => setUser(data.data))
      .catch(() => navigate("/login", { replace: true }));
  }, []);

  console.log(user);
  const cookie = Cookie();
  const token = cookie.get("e-commercs");
  return token ? (
    user === "" ? (
      <Loading />
    ) : allowedRole.includes(user.role) ? (
      <Outlet />
    ) : (
      <Err403 />
    )
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
}
