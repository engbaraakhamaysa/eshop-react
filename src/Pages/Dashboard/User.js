import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Axios } from "../../Api/axios";
import { GETUSER, USER } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";

export default function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //State to Button
  const [disable, setDisable] = useState(true);
  //Loading State
  const [loading, setLoading] = useState(false);

  const id = window.location.pathname.replace("/dashboard/users/", "");
  console.log(id);

  useEffect(() => {
    Axios.get(`${GETUSER}/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .then(() => setDisable(false));
  }, []);

  async function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await Axios.post(`${USER}/Edit/${id}`, {
        name: name,
        email: email,
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
        <button disabled={disable} className="btn btn-primary">
          Save
        </button>
      </Form>
    </>
  );
}
