import { useState } from "react";
import { baseURL, REGISTER } from "../../Api/Api";
import axios from "axios";

export default function Register() {
  //Obj Setates
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  //Handel Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  //Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("run");

    try {
      console.log(`${baseURL}/${REGISTER}`);
      await axios.post(`${baseURL}/${REGISTER}`, form);
      console.log("Succesflly");
      window.location.pathname("/");
    } catch (err) {
      if (err.response.status === 422) {
        setErr("Email is already been taken");
      } else {
        setErr("Internal Server Error");
      }
    }
  }
  return (
    <div className="container">
      <div className="row h-100">
        <form className="form" onSubmit={handleSubmit}>
          <div className="custom-form">
            <h1>Register Now</h1>
            <div className="form-control">
              <input
                id="name"
                name="name"
                value={form.name}
                type="text"
                placeholder="Enter Your Name..."
                required
                onChange={handleChange}
              />
              <label htmlFor="name">Name</label>
            </div>
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
            <button className="btn btn-primary">Register</button>
            {err !== "" && <span className="error">{err}</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
