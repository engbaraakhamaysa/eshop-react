import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Axios } from "../../Api/axios";
import { USER } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPss] = useState("");
  const [role, setRole] = useState("");

  //State to Button

  //Loading State
  const [loading, setLoading] = useState(false);

  async function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await Axios.post(`/${USER}`, {
        name: name,
        email: email,
        password: pass,
        role: role,
      });
      window.location.pathname = "/dashboard";
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }
  return (
    <>
      {loading && <Loading />}
      <Form className="bg-white w-100 mx-2 p-3" onSubmit={HandleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name.."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>User Email</Form.Label>
          <Form.Control
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email.."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>User Password</Form.Label>
          <Form.Control
            value={pass}
            required
            onChange={(e) => setPss(e.target.value)}
            type="password"
            placeholder="password.."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>User Email</Form.Label>
          <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option disabled value={""}>
              Select Roles
            </option>
            <option value={"admin"}>Admin</option>
            <option value={"user"}>User</option>
            <option value={"writer"}>Writer</option>
          </Form.Select>
        </Form.Group>
        <button
          disabled={
            name.length > 1 &&
            email.length > 1 &&
            pass.length > 7 &&
            role !== ""
              ? false
              : true
          }
          className="btn btn-primary"
        >
          Add User{" "}
        </button>
      </Form>
    </>
  );
}
