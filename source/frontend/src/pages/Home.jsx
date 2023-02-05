import "../css/home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useEffect, useState } from "react";
import WorkingMemory from "../components/WorkingMemory";

const Home = () => {
  const [InputFact, setInputFact] = useState({
    inputFact: "",
  });
  const [Response, setResponse] = useState([
    {
      message: [],
    },
  ]);
  useEffect(() => {
    document.title = "Inference Engine";
  }, []);

  const onInferenceHandler = (e) => {
    e.preventDefault();
    setResponse([
      {
        message: [],
      },
    ]);
    let InputFactArr = InputFact["inputFact"]
      .split(",")
      .map((each) => each.trim().toUpperCase());
    let CheckInputFact = {
      inputFact: ["nil"],
      prev_asked_premise: [],
    };
    if (InputFact["inputFact"] !== "") {
      CheckInputFact["inputFact"] = InputFactArr;
    }
    console.log(CheckInputFact);
    axios
      .post("http://localhost:8000/inference/", CheckInputFact)
      .then((response) => {
        response["data"]["message"]["id"] = Math.random() * 10000;
        response["data"]["message"]["disable"] = false;
        setResponse((prevState) => [...prevState, response["data"]]);
      })
      .catch((error) => console.log(error));
  };

  const onChangeHandler = (e) => {
    setInputFact((prevState) => (prevState = { inputFact: e.target.value }));
  };
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

      {Object.keys(Response).length > 0 ? (
        <div className="container bg-dark text-white py-5 px-5 rounded outputBox">
          {/* <div>Hello</div> */}
          {Response.map((each) => {
            return (
              <WorkingMemory
                message={each["message"]}
                setResponseHandler={setResponse}
              />
            );
          })}
        </div>
      ) : (
        <div className="container">
          <div className="container bg-dark text-white py-5 px-5 rounded outputBox">
            <div className="mt-2">{"> " + Response["message"]}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
