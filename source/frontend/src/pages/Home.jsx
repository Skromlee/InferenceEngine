import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState } from "react";
import WorkingMemory from "../components/WorkingMemory";

const Home = () => {
  const [InputFact, setInputFact] = useState({
    inputFact: "",
  });
  const [Response, setResponse] = useState({
    message: [],
  });

  const onInferenceHandler = (e) => {
    e.preventDefault();
    let CheckInputFact = {
      inputFact: "nil",
    };
    if (InputFact["inputFact"] !== "") {
      CheckInputFact["inputFact"] = InputFact["inputFact"];
    }
    axios
      .post("http://localhost:8000/inference/", CheckInputFact)
      .then((response) => {
        setResponse(response["data"]);
      })
      .catch((error) => console.log(error));
  };

  const onChangeHandler = (e) => {
    setInputFact((prevState) => (prevState = { inputFact: e.target.value }));
  };

  console.log(Response);

  return (
    <>
      <div className="container">
        <Form onSubmit={onInferenceHandler}>
          <h2 className="my-4">Inference by fact</h2>
          <h6 className="mb-4">
            To insert a multiple fact use this systex to in put fact a, c, e in
            working memory insert this: "a, c, e"
          </h6>
          <Row className="d-flex mb-3 ">
            <Form.Group as={Col} md="11" className="mb-3" controlId="inputFact">
              <Form.Control
                type="text"
                placeholder="Enter some fact"
                onChange={onChangeHandler}
                value={InputFact["inputFact"]}
              />
            </Form.Group>
            <Form.Group as={Col} md="1" className="mb-3">
              <Button variant="primary" type="submit">
                Inference
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>

      {Object.keys(Response["message"]).length > 1 ? (
        <div className="container">
          {/* <h6>Prompt: </h6> */}
          <WorkingMemory message={Response["message"]} />
        </div>
      ) : (
        <div className="container">
          <div className="container bg-dark text-white py-5 px-5 rounded outputBox">
            {"> " + Response["message"]}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
