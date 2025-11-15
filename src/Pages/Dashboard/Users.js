import { useEffect, useState } from "react";
import { baseURL, USERS } from "../../Api/Api";
import Cookie from "cookie-universal";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default function Users() {
  const cooike = Cookie();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/${USERS}`, {
        headers: {
          Authorization: "Bearer " + cooike.get("e-commercs"),
        },
      })
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err));
  });

  const usersShow = users.map((user, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>user.name</td>
      <td>user.email</td>
    </tr>
  ));

  return (
    <div className="bg-white w-100 p-2">
      <h1>Users Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{usersShow}</tbody>
      </Table>
    </div>
  );
}
