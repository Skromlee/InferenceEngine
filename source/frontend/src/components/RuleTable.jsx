import Table from "react-bootstrap/Table";
import RuleRow from "./RuleRow";

const RuleTable = ({ Rules, editHandler, deleteHandler }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Fact 1</th>
          <th>Operation 1</th>
          <th>Fact 2</th>
          <th>Operation 2</th>
          <th>Fact 3</th>
          <th>Conclude</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        {Rules.map((rule) => {
          return (
            <tr key={rule.id}>
              <RuleRow
                rule={rule}
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
export default RuleTable;