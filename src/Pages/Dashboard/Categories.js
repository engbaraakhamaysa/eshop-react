import { useEffect, useState } from "react";
import { Axios } from "../../Api/axios";
import { CAT } from "../../Api/Api";
import { Link } from "react-router-dom";
import TableShow from "../../Components/Dashboard/Table";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get(CAT)
      .then((data) => setCategories(data.data))
      .catch((err) => console.log(err));
  }, []);

  const header = [
    {
      name: "Title",
    },
    {
      name: "Image",
    },
  ];

  async function handleDelete(id) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-white w-100 p-2">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Categories Page</h1>
        <Link className="btn btn-primary" to="/dashboard/categories/add">
          Add Category
        </Link>
      </div>

      <TableShow header={header} data={categories} delete={handleDelete} />
    </div>
  );
}
