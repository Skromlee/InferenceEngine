import Button from "react-bootstrap/Button";

const FactControlPanel = ({ fact, editHandler, deleteHandler }) => {
  return (
    <div className="d-flex justify-content-center">
      {/* <ButtonGroup aria-label="Rule Controller Panel" className="mx-auto"> */}
      <div>
        <Button
          variant="primary"
          onClick={() => editHandler(fact.id)}
          className="me-2"
        >
          <i className="fa-solid fa-pen-to-square"></i> Edit
        </Button>
        <Button variant="danger" onClick={() => deleteHandler(fact.id)}>
          <i className="fa-solid fa-trash"></i> Delete
        </Button>
      </div>
      {/* </ButtonGroup> */}
    </div>
  );
};
export default FactControlPanel;
