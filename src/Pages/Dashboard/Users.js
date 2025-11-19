import { useEffect, useState } from "react";
import { baseURL, USERS, USER, AUTH_USER } from "../../Api/Api";
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

  //User is sgin in
  const [currentUser, setCurrentUser] = useState(false);

  //In Not Users In The DB
  const [userNo, setUserNo] = useState(false);

  useEffect(() => {
    Axios.get(`/${AUTH_USER}`).then((res) => setCurrentUser(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`${baseURL}/${USERS}`, {
        headers: {
          Authorization: "Bearer " + cooike.get("e-commercs"),
        },
      })
      .then((res) => {
        setUsers(res.data.user);
        setUserNo(true);
      })
      .catch((err) => console.log(err));
  }, [deleteUser]);

  const userFiler = users.filter((user) => user._id !== currentUser._id);
  const usersShow = userFiler.map((user, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user.role === "1995"
          ? "Admin"
          : user.role === "2001"
          ? "User"
          : "Writer"}{" "}
      </td>
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
      <div className="d-flex align-items-center justify-content-between">
        <h1>Users Page</h1>
        <Link className="btn btn-primary" to="/dashboard/user/add">
          Add User
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={12} className="text-center">
                Loading ...
              </td>
            </tr>
          ) : users.length <= 1 && userNo ? (
            <tr colSpan={12} className="text-center">
              No User Found
            </tr>
          ) : (
            usersShow
          )}
        </tbody>
      </Table>
    </div>
  );
}
