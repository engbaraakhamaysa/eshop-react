import { useEffect } from "react";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";

export default function GoofleCallBack() {
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = Cookie();
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refershToken");
    if (accessToken && refreshToken) {
      cookie.set("e-commercs", accessToken);
      cookie.set("refershToken", refreshToken);
      navigate("/users");
    } else {
      console.error("No tokens found in URL");
    }
  }, [navigate]);

  return <h1>test</h1>;
}
