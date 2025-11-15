import { Outlet } from "react-router-dom";

import TopBar from "../../Components/Dashboard/TopBar";
import SideBar from "../../Components/Dashboard/SideBar";

export default function Dashboard() {
  return (
    <div className="position-relative dashboard d-flex gap-1">
      <TopBar />
      <div className="dashboard d-flex gap-1" style={{ marginTop: "70px" }}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
