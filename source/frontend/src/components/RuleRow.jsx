import RuleControlPanel from "./RuleControlPanel";

const RuleRow = ({ rule, editHandler, deleteHandler }) => {
  const { id, fact1, operator1, fact2, operator2, fact3, conclude } = rule;

  return (
    <>
      <td>{id}</td>
      <td>{fact1}</td>
      <td>{operator1 ? operator1 : "-"}</td>
      <td>{fact2 ? fact2 : "-"}</td>
      <td>{operator2 ? operator2 : "-"}</td>
      <td>{fact3 ? fact3 : "-"}</td>
      <td>{conclude ? conclude : "-"}</td>
      <td>
        <RuleControlPanel
          rule={rule}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      </td>
    </>
  );
};

export default RuleRow;
