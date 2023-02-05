import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

const EditRuleModal = (props) => {
  console.log(props.editform);
  const key = ["fact1", "fact2", "conclude1", "conclude2"];
  const { Facts } = props;

  let {
    id,
    fact1_prefix,
    fact1,
    operator,
    fact2_prefix,
    fact2,
    conclude1,
    conclude2,
  } = props.editform;

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
          <Form.Group className="mb-3" controlId="fact1">
            <Form.Label>Fact 1</Form.Label>
            <Form.Select
              aria-label="Fact 1"
              onChange={props.onchangehandler}
              defaultValue={fact1}
            >
              <option value="">----- no fact -----</option>
              {Facts.map((fact) => {
                return (
                  <option key={fact.id + fact.factName} value={fact.id}>
                    {fact.factName + " (" + fact.description + ")"}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="fact1_prefix"
            onChange={props.onchangehandler}
          >
            <Form.Check
              type="checkbox"
              label="Invert fact1"
              defaultChecked={fact1_prefix === "NOT" ? true : false}
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
            <Form.Select
              aria-label="Fact 2"
              onChange={props.onchangehandler}
              defaultValue={fact2}
            >
              <option value="">----- no fact -----</option>
              {Facts.map((fact) => {
                return (
                  <option key={fact.id + fact.factName} value={fact.id}>
                    {fact.factName + " (" + fact.description + ")"}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="fact2_prefix"
            onChange={props.onchangehandler}
          >
            <Form.Check
              type="checkbox"
              label="Invert fact2"
              defaultChecked={fact2_prefix === "NOT" ? true : false}
            />
          </Form.Group>

          <hr className="my-2" />
          <Form.Group className="mb-3" controlId="conclude1">
            <Form.Label>Conclude 1</Form.Label>
            <Form.Select
              aria-label="Conclude 1"
              onChange={props.onchangehandler}
              defaultValue={conclude1}
            >
              <option value="">----- no conclude1 -----</option>
              {Facts.map((fact) => {
                return (
                  <option key={fact.id + fact.factName} value={fact.id}>
                    {fact.factName + " (" + fact.description + ")"}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="conclude2">
            <Form.Label>Conclude 2</Form.Label>
            <Form.Select
              aria-label="Conclude 2"
              onChange={props.onchangehandler}
              defaultValue={conclude2}
            >
              <option value="">----- no conclude2 -----</option>
              {Facts.map((fact) => {
                return (
                  <option key={fact.id + fact.factName} value={fact.id}>
                    {fact.factName + " (" + fact.description + ")"}
                  </option>
                );
              })}
            </Form.Select>
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
