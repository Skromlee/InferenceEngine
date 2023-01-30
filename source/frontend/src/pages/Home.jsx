import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const onInferenceHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={onInferenceHandler}>
          <h2 className="my-4">Inference by fact</h2>
          <Row className="d-flex mb-3 ">
            <Form.Group as={Col} md="11" className="mb-3" controlId="inputFact">
              <Form.Control type="text" placeholder="Enter some fact" />
            </Form.Group>
            <Form.Group as={Col} md="1" className="mb-3">
              <Button variant="primary" type="submit">
                Inference
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Home;
