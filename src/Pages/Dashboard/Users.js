import { useEffect } from "react";
import { baseURL, USERS } from "../../Api/Api";
import Cookie from "cookie-universal";
import axios from "axios";
import { data } from "react-router-dom";

export default function Users() {
  const cooike = Cookie();

  useEffect(() => {
    axios
      .get(`${baseURL}/${USERS}`, {
        headers: {
          Authorization: "Bearer " + cooike.get("e-commercs"),
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });
  return <div></div>;
}
