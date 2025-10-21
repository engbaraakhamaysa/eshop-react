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
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            value={form.email}
            type="email"
            placeholder="Enter Your Email..."
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            id="password"
            value={form.password}
            type="password"
            placeholder="Enter Your Password..."
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
