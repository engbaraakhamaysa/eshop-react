import { useState } from "react";
import { baseURL, LOGIN } from "../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";
import LoadingSubmit from "../../Components/Loading/Loading";
import Form from "react-bootstrap/Form";

export default function Login() {
  //Obj Setates
  const [form, setForm] = useState({
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
      console.log(`${baseURL}/${LOGIN}`);
      const res = await axios.post(`${baseURL}/${LOGIN}`, form);
      setLoading(false);
      console.log("Succesflly");
      const token = res.data.token.accessToken;
      const refershToken = res.data.token.refreshTokenString;
      cooike.set("e-commercs", token);
      cooike.set("refershToken", refershToken);
      window.location.pathname = "/dashboard";

      console.log(res);
    } catch (err) {
      setLoading(false);
      if (err.response.status === 400) {
        setErr("Wrong Email or Password");
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
              <h1>Login NOOow</h1>

              <Form.Group
                className="form-custom"
                controlId="exampleForm.ControlInput1"
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

              {/* 
                 <div className="form-control">
                
                <input
                  name="email"
                  id="email"
                  value={form.email}
                  type="email"
                  placeholder="Enter Your Email..."
                  required
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                 </div>
                */}

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

              <button className="btn btn-primary">Login</button>
              <div className="google-btn">
                <a href={"http://localhost:8000/api/auth/google"}>
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
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
