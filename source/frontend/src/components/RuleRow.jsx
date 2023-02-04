import RuleControlPanel from "./RuleControlPanel";

const RuleRow = ({ rule, editHandler, deleteHandler }) => {
  const { id, fact1, operator, fact2, conclude1, conclude2 } = rule;

  return (
    <>
      <td>{id}</td>
      <td>{fact1}</td>
      <td>{operator ? operator : "-"}</td>
      <td>{fact2 ? fact2 : "-"}</td>
      <td>{conclude1 ? conclude1 : "-"}</td>
      <td>{conclude2 ? conclude2 : "-"}</td>
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
