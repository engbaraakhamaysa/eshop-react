import { faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    name: "Users",
    path: "users",
    icon: faUsers,
    role: "admin",
  },
  {
    name: "Add User",
    path: "/dashboard/user/add",
    icon: faPlus,
    role: "admin",
  },
  {
    name: "Writer",
    path: "/dashboard/writer",
    icon: faPlus,
    role: ["admin", "writer"],
  },
];
