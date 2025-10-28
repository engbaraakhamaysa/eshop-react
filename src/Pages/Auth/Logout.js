import axios from "axios";
import { baseURL, LOGOUt } from "../../Api/Api";

export default function Logout() {
  async function handleLogout() {
    try {
      const res = await axios.post(`${baseURL}/${LOGOUt}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return <button onClick={handleLogout}>Logout</button>;
}
