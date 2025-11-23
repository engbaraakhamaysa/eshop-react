import {
  faCartShopping,
  faPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

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
    name: "Products",
    path: "/dashboard/products",
    icon: faCartShopping,
    role: ["admin", "manager"],
  },
  {
    name: "Writer",
    path: "/dashboard/writer",
    icon: faPlus,
    role: ["admin", "writer"],
  },
];
