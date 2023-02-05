import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const RuleControlPanel = ({ rule, editHandler, deleteHandler }) => {
  return (
    <div className="d-flex justify-content-center">
      {/* <ButtonGroup aria-label="Rule Controller Panel" className="mx-auto"> */}
      <div>
        <Button
          variant="primary"
          onClick={() => editHandler(rule.id)}
          className="me-2"
        >
          <i className="fa-solid fa-pen-to-square"></i> Edit
        </Button>
        <Button variant="danger" onClick={() => deleteHandler(rule.id)}>
          <i className="fa-solid fa-trash"></i> Delete
        </Button>
      </div>
      {/* </ButtonGroup> */}
    </div>
  );
};
export default RuleControlPanel;
