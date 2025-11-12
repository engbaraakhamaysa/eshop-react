import axios from "axios";
import { baseURL, LOGOUt } from "../../Api/Api";
import Cookie from "cookie-universal";

export default function Logout() {
  async function handleLogout() {
    const cookie = Cookie();
    const refreshToken = cookie.get("refreshToken");
    if (!refreshToken) {
      console.log("No refresh token found");
      return;
    }

    try {
      const res = await axios.post(`${baseURL}/${LOGOUt}`, { refreshToken });

      console.log(res.data);

      cookie.remove("e-commercs");
      cookie.remove("refershToken");
    } catch (err) {
      console.log(err.response ? err.response.data : err);
    }
  }

  return <button onClick={handleLogout}>Logout</button>;
}
