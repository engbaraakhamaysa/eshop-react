import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Users from "./Pages/Dashboard/Users";
import GoofleCallBack from "./Pages/Auth/GoogleCallBack";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/auth/google/callback" element={<GoofleCallBack />} />
      </Routes>
    </div>
  );
}

export default App;
