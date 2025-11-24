import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Axios } from "../../Api/axios";

export default function TableShow(props) {
  const currentUser = props.currentUser || false;
  //Handle Delete
  async function handleDelete(id) {
    try {
      const res = await Axios.delete(`/${props.delete}/${id}`);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  const headerShow = props.header.map((item) => <th>{item.name}</th>);

  const dataShow = props.data.map((item, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      {props.header.map((itme2, key2) => (
        <td key={key2}>
          {item[itme2.key]}
          {currentUser && item[itme2.key] === currentUser.name && " (You)"}
        </td>
      ))}
      <td>
        <div className="d-flex align-item-center gap-2">
          <Link to={`${item._id}`}>
            <FontAwesomeIcon fontSize={"19px"} icon={faPenToSquare} />
          </Link>
          {currentUser.name !== item.name && (
            <FontAwesomeIcon
              onClick={() => handleDelete(item._id)}
              fontSize={"19px"}
              color="red"
              cursor={"pointer"}
              icon={faTrash}
            />
          )}
        </div>
      </td>
    </tr>
  ));
  return (
    <Table striped bordered haver>
      <thead>
        <tr>
          {headerShow}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{dataShow}</tbody>
    </Table>
  );
}
