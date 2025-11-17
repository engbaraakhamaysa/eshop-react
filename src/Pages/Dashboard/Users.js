import { useEffect, useState } from "react";
import { baseURL, USERS, USER } from "../../Api/Api";
import Cookie from "cookie-universal";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Axios } from "../../Api/axios";

export default function Users() {
  const cooike = Cookie();
  const [users, setUsers] = useState([]);

  //refersh useEffect
  const [deleteUser, setDeleteUser] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/${USERS}`, {
        headers: {
          Authorization: "Bearer " + cooike.get("e-commercs"),
        },
      })
      .then((res) => {
        setUsers(res.data.user);
      })
      .catch((err) => console.log(err));
  }, [deleteUser]);

  const usersShow = users.map((user, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <div className="d-flex align-item-center gap-2">
          <Link to={`${user._id}`}>
            <FontAwesomeIcon fontSize={"19px"} icon={faPenToSquare} />
          </Link>
          <FontAwesomeIcon
            onClick={() => handleDelete(user._id)}
            fontSize={"19px"}
            color="red"
            cursor={"pointer"}
            icon={faTrash}
          />
        </div>
      </td>
    </tr>
  ));

  //Handle Delete
  async function handleDelete(id) {
    try {
      const res = await Axios.delete(`/${USER}/${id}`);
      setDeleteUser((prv) => !prv);
      console.log(res);
    } catch (err) {}
  }

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
