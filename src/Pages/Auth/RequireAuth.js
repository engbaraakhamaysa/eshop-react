import { Navigate, Outlet, replace, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, USER } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";

export default function RequireAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(`${baseURL}/${USER}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => setUser(data.data))
      .catch(() => navigate("/login", { replace: true }));
  }, []);
  const cookie = Cookie();
  const token = cookie.get("e-commercs");
  return token ? (
    user === "" ? (
      <Loading />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
}
