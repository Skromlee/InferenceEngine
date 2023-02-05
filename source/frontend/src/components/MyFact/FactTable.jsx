import Table from "react-bootstrap/Table";
import FactRow from "./FactRow";

const FactTable = ({ Facts, editHandler, deleteHandler }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Fact Name</th>
          <th>Description</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        {Facts.map((fact) => {
          return (
            <tr key={fact.id}>
              <FactRow
                fact={fact}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
              />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default FactTable;
