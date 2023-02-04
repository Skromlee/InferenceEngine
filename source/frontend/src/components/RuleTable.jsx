import Table from "react-bootstrap/Table";
import RuleRow from "./RuleRow";

const RuleTable = ({ Rules, editHandler, deleteHandler }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Fact 1</th>
          <th>Operator</th>
          <th>Fact 2</th>
          <th>Conclude 1</th>
          <th>Conclude 2</th>
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
