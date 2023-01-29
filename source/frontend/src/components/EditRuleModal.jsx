import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

const EditRuleModal = (props) => {
  const { id, fact1, operator1, fact2, operator2, fact3, conclude } =
    props.editform;

  const onCancelHandler = () => {
    props.onHide();
  };
  return (
    <Form>
      <Modal
        onHide={props.onHide}
        show={props.show}
        // {...props}
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
          <Form.Group className="mb-3" controlId="fact1">
            <Form.Label>Fact 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter fact1"
              value={String(fact1)}
              onChange={props.onchangehandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="operator1">
            <Form.Label>Operator 1</Form.Label>
            <Form.Select
              aria-label="Operator 1"
              onChange={props.onchangehandler}
              defaultValue={String(operator1)}
            >
              <option>----- none -----</option>
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

          <Form.Group className="mb-3" controlId="operator2">
            <Form.Label>Operator 2</Form.Label>
            <Form.Select
              aria-label="Operator 2"
              onChange={props.onchangehandler}
              defaultValue={String(operator2)}
            >
              <option>----- none -----</option>
              <option value="AND">AND</option>
              <option value="OR">OR</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="fact3">
            <Form.Label>Fact 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter fact3"
              value={String(fact3)}
              onChange={props.onchangehandler}
            />
          </Form.Group>
          <hr className="my-2" />
          <Form.Group className="mb-3" controlId="conclude">
            <Form.Label>Conclude</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter conclude"
              value={String(conclude)}
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
export default EditRuleModal;
