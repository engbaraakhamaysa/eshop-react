import axios from "axios";
import { useEffect } from "react";
import { baseURL, GOOGLE_CALL_BACK } from "../../Api/Api";
import { useLocation } from "react-router-dom";
import Cookie from "cookie-universal";

export default function GoofleCallBack() {
  const cookie = Cookie();

  const location = useLocation();
  useEffect(() => {
    async function GoogleCall() {
      try {
        const res = await axios.get(
          `${baseURL}/${GOOGLE_CALL_BACK}/${location.search}`
        );
        console.log(res);

        const token = res.data.token.accessToken;
        const refershToken = res.data.token.refreshTokenString;
        cookie.set("e-commercs", token);
        cookie.set("refershToken", refershToken);
      } catch (err) {
        console.log(err);
      }
    }
    GoogleCall();
  }, []);

  return <h1>test</h1>;
}
