// import axios to use API
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CreateFactModal from "../components/MyFact/CreateFactModal";
import DeleteFactModal from "../components/MyFact/DeleteFactModal";
import EditFactModal from "../components/MyFact/EditFactModal";

// import Rule from "../components/Rule";
import FactTable from "../components/MyFact/FactTable";

// define a backend URI
const URI = "http://localhost:8000/api/facts/";

function MyFact() {
  useEffect(() => {
    document.title = "Facts | Inference Engine";
  }, []);
  const initialFormState = {
    id: "",
    factName: "",
    description: "",
  };

  const [Facts, setFacts] = useState([]);
  const [EditModalShow, setEditModalShow] = useState(false);
  const [DeleteModalShow, setDeleteModalShow] = useState(false);
  const [CreateModalShow, setCreateModalShow] = useState(false);
  const [ModalTitle, setModalTitle] = useState("");
  const [EditForm, setEditForm] = useState(initialFormState);

  const onChangeHandler = (e) => {
    setEditForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const findTargetFact = (id) => {
    const fact = Facts.filter((fact) => {
      return fact.id === parseInt(id);
    });
    return fact[0];
  };

  const editHandler = (index) => {
    setEditForm(findTargetFact(index));
    setModalTitle("EDIT FACT NO." + index);
    setEditModalShow(true);
  };

  const onSave = () => {
    const { factName, description } = EditForm;

    let validation = false;

    if (factName && description) {
      validation = true;
    } else {
      console.log("Something went wrong!");
    }

    if (validation) {
      const upperEditForm = {
        factName: factName.toUpperCase(),
        description: description,
      };

      axios
        .put(URI + EditForm.id + "/", upperEditForm)
        .then(() => getFacts())
        .catch((error) => console.log(error));
      setEditModalShow(false);
    }
  };

  const onCreateHandler = () => {
    setEditForm(initialFormState);
    setCreateModalShow(true);
  };

  const onCreate = () => {
    const { factName, description } = EditForm;
    let validation = false;

    if (factName && description) {
      validation = true;
    } else {
      console.log("Something went wrong!");
    }

    if (validation) {
      const { factName, description } = EditForm;
      const upperEditForm = {
        factName: factName.toUpperCase(),
        description: description,
      };

      axios
        .post(URI, upperEditForm)
        .then((response) =>
          setFacts((prevState) => [...prevState, response["data"]])
        )
        .catch((error) => console.log(error));
    }
    setCreateModalShow(false);
  };

  const deleteHandler = (index) => {
    setEditForm(findTargetFact(index));
    setModalTitle(index);
    setDeleteModalShow(true);
  };

  const onConfirmDeleteHandler = () => {
    console.log("DELETE!");
    axios
      .delete(URI + EditForm.id + "/")
      .then(() =>
        setFacts((prevState) => Facts.filter((fact) => fact.id !== EditForm.id))
      )
      .catch((error) => console.log(error));
    setDeleteModalShow(false);
  };

  const getFacts = () => {
    // feed data from backend
    axios
      .get(URI)
      .then((response) => {
        setFacts(response["data"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFacts();
  }, []);

  return (
    <>
      <EditFactModal
        show={EditModalShow}
        onHide={() => setEditModalShow(false)}
        modaltitle={ModalTitle}
        editform={EditForm}
        onchangehandler={onChangeHandler}
        onSave={onSave}
      />
      <CreateFactModal
        show={CreateModalShow}
        onHide={() => setCreateModalShow(false)}
        editform={EditForm}
        onchangehandler={onChangeHandler}
        onCreate={onCreate}
      />
      <DeleteFactModal
        show={DeleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        modaltitle={ModalTitle}
        editform={EditForm}
        onconfirm={onConfirmDeleteHandler}
      />
      <div className="container">
        <div className="d-flex justify-content-between my-4 align-items-center">
          <div>
            <h2>All Facts </h2>
          </div>
          <div>
            <Button variant="primary" onClick={() => onCreateHandler()}>
              Create
            </Button>
          </div>
        </div>
        <div className="row">
          {Facts.length > 0 ? (
            <FactTable
              Facts={Facts}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ) : (
            "There is no rule!"
          )}
        </div>
      </div>
    </>
  );
}

export default MyFact;
