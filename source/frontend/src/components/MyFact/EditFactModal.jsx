import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

const EditFactModal = (props) => {
  const { id, factName, description } = props.editform;

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
            {props.modaltitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="factName">
            <Form.Label>Fact Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter fact name"
              value={String(factName)}
              onChange={props.onchangehandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter fact description"
              value={String(description)}
              onChange={props.onchangehandler}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="link"
            onClick={() => onCancelHandler()}
            className="text-secondary text-decoration-none linkbutton"
          >
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={props.onSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
export default EditFactModal;
