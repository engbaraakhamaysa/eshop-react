import { useState } from "react";
import { baseURL, LOGIN } from "../../Api/Api";
import axios from "axios";

export default function Login() {
  //Obj Setates
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  //Handel Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  //Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("run");

    try {
      console.log(`${baseURL}/${LOGIN}`);
      await axios.post(`${baseURL}/${LOGIN}`, form);
      console.log("Succesflly");
    } catch (err) {
      console.error(err);
    }
  }
  return (
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
          </div>
        </form>
      </div>
    </div>
  );
}
