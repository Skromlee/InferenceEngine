import FactControlPanel from "./FactControlPanel";

const FactRow = ({ fact, editHandler, deleteHandler }) => {
  const { id, factName, description } = fact;

  return (
    <>
      <td>{id}</td>
      <td>{factName}</td>
      <td>{description ? description : "-"}</td>
      <td>
        <FactControlPanel
          fact={fact}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      </td>
    </>
  );
};

export default FactRow;
