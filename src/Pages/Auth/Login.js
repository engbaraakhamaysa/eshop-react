import { useState } from "react";
import { baseURL, LOGIN } from "../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";
import LoadingSubmit from "../../Components/Loading/Loading";

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
      cooike.set("e-commercs", token);
      window.location.pathname = "/users";

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
        <div className="row h-100">
          <form className="form" onSubmit={handleSubmit}>
            <div className="custom-form">
              <h1>Login NOOow</h1>
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
              <div className="form-control">
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
              </div>
              <button className="btn btn-primary">Login</button>
              {err !== "" && <span className="error">{err}</span>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
