import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

const DeleteRuleModal = (props) => {
  const { id, fact1, operator1, fact2, operator2, fact3, conclude } =
    props.editform;

  let targetRule = "";

  if (operator1 !== null && operator2 !== null) {
    targetRule = `IF ${fact1} ${operator1} ${fact2} ${operator2} ${fact3} THEN ${conclude}`;
  } else if (operator1 !== null) {
    targetRule = `IF ${fact1} ${operator1} ${fact2} THEN ${conclude}`;
  } else {
    targetRule = `IF ${fact1} THEN ${conclude}`;
  }

  const onCancelHandler = () => {
    props.onHide();
  };
  return (
    <Form>
      <Modal
        onHide={props.onHide}
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Rule
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Are you sure you wnat to delete a <br />
            <span className="text-danger">
              Rule {props.modaltitle}: {targetRule}{" "}
            </span>
            ?
            <br />
            if you delete your Rule, you will permanently lost your rule
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="link text-secondary text-decoration-none"
            onClick={() => onCancelHandler()}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={() => props.onconfirm()}
          >
            DELETE
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
export default DeleteRuleModal;
