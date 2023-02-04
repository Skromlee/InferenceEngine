import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

const CreateRuleModal = (props) => {
  const { id, fact1, operator, fact2, conclude1, conclude2 } = props.editform;

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
            Create Rule
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="fact1">
            <Form.Label>Fact 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter fact1"
              value={String(fact1)}
              onChange={props.onchangehandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="operator">
            <Form.Label>Operator</Form.Label>
            <Form.Select
              aria-label="Operator 1"
              onChange={props.onchangehandler}
              defaultValue={String(operator)}
            >
              <option value="">----- none -----</option>
              <option value="AND">AND</option>
              <option value="OR">OR</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="fact2">
            <Form.Label>Fact 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter fact2"
              value={String(fact2)}
              onChange={props.onchangehandler}
            />
          </Form.Group>

          <hr className="my-2" />
          <Form.Group className="mb-3" controlId="conclude1">
            <Form.Label>Conclude 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter conclude 1"
              value={String(conclude1)}
              onChange={props.onchangehandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="conclude2">
            <Form.Label>Conclude 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter conclude 2"
              value={String(conclude2)}
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
          <Button variant="primary" type="submit" onClick={props.onCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
export default CreateRuleModal;
