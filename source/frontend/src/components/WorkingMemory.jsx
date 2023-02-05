import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";
import axios from "axios";

const WorkingMemory = ({ message, setResponseHandler }) => {
  const { BB, asked_premises, premise } = message;
  const [inputFact, setinputFact] = useState("");
  const [Disable, setDisable] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisable(true);
    if (inputFact.toUpperCase() === "TRUE" || inputFact.toUpperCase() === "T") {
      let newBB = BB;
      newBB.push(premise);
      const answer = {
        inputFact: newBB,
        prev_asked_premise: asked_premises,
      };
      axios
        .post("http://localhost:8000/inference/", answer)
        .then((response) => {
          setResponseHandler((prevState) => [...prevState, response["data"]]);
        })
        .catch((error) => console.log(error));
    } else {
      let newBB = BB;
      const answer = {
        inputFact: newBB,
        prev_asked_premise: asked_premises,
      };
      axios
        .post("http://localhost:8000/inference/", answer)
        .then((response) => {
          setResponseHandler((prevState) => [...prevState, response["data"]]);
        })
        .catch((error) => console.log(error));
    }
  };
  const onChangeHandler = (e) => {
    setinputFact(() => e.target.value);
  };
  return (
    <>
      {message["status"] === "queryFromUser" ? (
        <Form onSubmit={submitHandler}>
          <Form.Group
            as={Row}
            className="mb-3 queryString justify-content-center align-items-center"
            controlId="inputFact"
          >
            <Form.Label column sm="3">
              {">"} {message["queryString"]}
            </Form.Label>
            <Col className="ms-0 inputDialog">
              {Disable ? (
                <Form.Control
                  className="text-white inputDialog"
                  plaintext={true}
                  disabled={true}
                  size="sm"
                  value={inputFact}
                />
              ) : (
                <Form.Control
                  className="ps-2 inputDialog"
                  size="sm"
                  plaintext={false}
                  disabled={false}
                  value={inputFact}
                  onChange={onChangeHandler}
                  autoFocus={true}
                />
              )}
            </Col>
          </Form.Group>
        </Form>
      ) : message["status"] === "successInference" &&
        message["concluding"].length > 0 ? (
        <div className="mb-3 queryString justify-content-center align-items-center">
          <span>{">"} Your conclude must be : </span>
          {message["concluding"].map((each) => (
            <span className="text-info">{each} </span>
          ))}
        </div>
      ) : message["status"] === "successInference" &&
        message["concluding"].length === 0 ? (
        <div className="mb-3 queryString justify-content-center align-items-center">
          <span>{"> "}</span>
          <span className="text-danger">
            From our rules we cannot find a concluding node from fact that your
            have provided.
          </span>
        </div>
      ) : (
        <div className="mb-3 queryString justify-content-center align-items-center">
          {">"}
        </div>
      )}
    </>
  );
};
export default WorkingMemory;
