import { useState } from "react";
import { baseURL, REGISTER } from "../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";
import Form from "react-bootstrap/Form";

import LoadingSubmit from "../../Components/Loading/Loading";

export default function Register() {
  //Obj Setates
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const cooike = Cookie();
  const [err, setErr] = useState("");
  //Handel Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  //Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log("run");

    try {
      console.log(`${baseURL}/${REGISTER}`);
      const res = await axios.post(`${baseURL}/${REGISTER}`, form);
      setLoading(false);
      console.log("Succesflly");
      const token = res.data.token.accessToken;
      const refershToken = res.data.token.refreshTokenString;
      cooike.set("e-commercs", token);
      cooike.set("refershToken", refershToken);
      window.location.pathname = "/users";
      console.log(res);
    } catch (err) {
      setLoading(false);
      if (err.response.status === 400) {
        setErr("Email is already been taken");
      } else {
        setErr("Internal Server Error");
      }
    }
  }
  return (
    <>
      {loading && <LoadingSubmit />}
      <div className="container">
        <div className="row" style={{ height: "100vh" }}>
          <Form className="form" onSubmit={handleSubmit}>
            <div className="custom-form">
              <h1>Register Now</h1>

              <Form.Group
                className="form-custom"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter Your email"
                  onChange={handleChange}
                  value={form.name}
                  required
                />
                <Form.Label>Name:</Form.Label>
              </Form.Group>

              <Form.Group
                className="form-custom"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter Your email"
                  onChange={handleChange}
                  value={form.email}
                  required
                />
                <Form.Label>Email:</Form.Label>
              </Form.Group>

              <Form.Group
                className="form-custom"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter Your password.."
                  onChange={handleChange}
                  value={form.password}
                  minLength="6"
                  required
                />
                <Form.Label>Password:</Form.Label>
              </Form.Group>

              {/* <div className="form-control">
                <input
                  name="password"
                  id="password"
                  value={form.password}
                  type="password"
                  placeholder="Enter Your Password..."
                  minLength={8}
                  required
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
              </div> */}

              <button className="btn btn-primary">Register</button>

              <div className="google-btn">
                <a href={`http://localhost:8000/api/auth/google`}>
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedis.org/wikipadis/commons/5/53/Google_%226%22_Logo.svg"
                      alt="sign in with google"
                    />
                  </div>

                  <p className="btn-text">
                    <b>Sign in with google</b>
                  </p>
                </a>
              </div>
              {err !== "" && <span className="error">{err}</span>}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
