import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

const DeleteFactModal = (props) => {
  const { factName, description } = props.editform;

  let targetFact = `Fact ${factName} (${description})`;

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
            Delete Fact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Are you sure you wnat to delete a <br />
            <span className="text-danger">
              Fact {props.modaltitle}: {targetFact}{" "}
            </span>
            ?
            <br />
            if you delete your Fact, you will permanently lost your factg
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
export default DeleteFactModal;
