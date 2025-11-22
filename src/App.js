import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Users from "./Pages/Dashboard/Users";
import User from "./Pages/Dashboard/User";
import GoofleCallBack from "./Pages/Auth/GoogleCallBack";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Auth/RequireAuth";
import AddUser from "./Pages/Dashboard/AddUser";

import Writer from "./Pages/Dashboard/Writer";
import Err404 from "./Pages/Auth/404";
import RequireBack from "./Pages/Auth/RequireBack";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route element={<RequireBack />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>

        <Route path="/" element={<HomePage />}></Route>

        <Route path="/google/callback" element={<GoofleCallBack />} />

        <Route path="/*" element={<Err404 />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRole={["admin", "writer"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth allowedRole={["admin"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<User />} />
              <Route path="user/add" element={<AddUser />} />
            </Route>
            <Route element={<RequireAuth allowedRole={["writer", "admin"]} />}>
              <Route path="writer" element={<Writer />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
