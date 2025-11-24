import { Table } from "react-bootstrap";

export default function TableShow({ header, data }) {
  const headerShow = header.map((item) => <th>{item.name}</th>);
  const dataShow = data.map((item) => (
    <tr>
      {header.map((itme2) => (
        <td>{item[itme2.key]}</td>
      ))}
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
