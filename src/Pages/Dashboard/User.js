import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Axios } from "../../Api/axios";
import { USER } from "../../Api/Api";

export default function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const id = Number(window.location.pathname.replace("/dashboard/users/", ""));
  console.log(id);

  useEffect(() => {
    Axios.get(`${USER}/${id}.`).then((data) => console.log(data));
  });

  function HandleSubmit() {}
  return (
    <Form className="bg-white w-100 mx-2 p-3" onSubmit={HandleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name.."
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>User Email</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email.."
        />
      </Form.Group>
    </Form>
  );
}
