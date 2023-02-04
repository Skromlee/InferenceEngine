// import axios to use API
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CreateRuleModal from "../components/CreateRuleModal";
import DeleteRuleModal from "../components/DeleteRuleModal";
import EditRuleModal from "../components/EditRuleModal";

// import Rule from "../components/Rule";
import RuleTable from "../components/RuleTable";

// define a backend URI
const URI = "http://localhost:8000/api/rules/";

function MyRule() {
  const initialFormState = {
    id: "",
    fact1: "",
    operator: "",
    fact2: "",
    conclude1: "",
    conclude2: "",
  };

  const [Rules, setRules] = useState([]);
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

  const findTargetRule = (id) => {
    const rule = Rules.filter((rule) => {
      return rule.id === parseInt(id);
    });
    return rule[0];
  };

  const editHandler = (index) => {
    setEditForm(findTargetRule(index));
    setModalTitle("EDIT RULE NO." + index);
    setEditModalShow(true);
  };

  const onSave = () => {
    const { fact1, operator, fact2, conclude1, conclude2 } = EditForm;

    let validation = false;

    if (fact1 && operator && fact2 && conclude1) {
      // all feild required
      validation = true;
    } else if (fact1 && conclude1 && !operator) {
      // only fact1 and conclude
      validation = true;
    } else {
      console.log("Something went wrong!");
    }

    if (validation) {
      const upperEditForm = {
        fact1: fact1.toUpperCase(),
        operator: operator.toUpperCase(),
        fact2: fact2.toUpperCase(),
        conclude1: conclude1.toUpperCase(),
        conclude2: conclude2.toUpperCase(),
      };

      axios
        .put(URI + EditForm.id + "/", upperEditForm)
        .then(() => getRules())
        .catch((error) => console.log(error));
      setEditModalShow(false);
    }
  };

  const onCreateHandler = () => {
    setEditForm(initialFormState);
    setCreateModalShow(true);
  };

  const onCreate = () => {
    const { fact1, operator, fact2, conclude1, conclude2 } = EditForm;
    let validation = false;

    if (fact1 && operator && fact2 && conclude1) {
      // all feild required
      validation = true;
    } else if (fact1 && conclude1 && !operator) {
      // only fact1 and conclude
      validation = true;
    } else {
      console.log("Something went wrong!");
    }

    if (validation) {
      const { fact1, operator, fact2, conclude1, conclude2 } = EditForm;
      const upperEditForm = {
        fact1: fact1.toUpperCase(),
        operator: operator.toUpperCase(),
        fact2: fact2.toUpperCase(),
        conclude1: conclude1.toUpperCase(),
        conclude2: conclude2.toUpperCase(),
      };
      axios
        .post(URI, upperEditForm)
        .then((response) =>
          setRules((prevState) => [...prevState, response["data"]])
        )
        .catch((error) => console.log(error));
    }
    setCreateModalShow(false);
  };

  const deleteHandler = (index) => {
    setEditForm(findTargetRule(index));
    setModalTitle(index);
    setDeleteModalShow(true);
  };

  const onConfirmDeleteHandler = () => {
    console.log("DELETE!");
    axios
      .delete(URI + EditForm.id + "/")
      .then(() =>
        setRules((prevState) => Rules.filter((rule) => rule.id !== EditForm.id))
      )
      .catch((error) => console.log(error));
    setDeleteModalShow(false);
  };

  const getRules = () => {
    // feed data from backend
    axios
      .get(URI)
      .then((response) => {
        setRules(response["data"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRules();
  }, []);

  return (
    <>
      <EditRuleModal
        show={EditModalShow}
        onHide={() => setEditModalShow(false)}
        modaltitle={ModalTitle}
        editform={EditForm}
        onchangehandler={onChangeHandler}
        onSave={onSave}
      />
      <CreateRuleModal
        show={CreateModalShow}
        onHide={() => setCreateModalShow(false)}
        editform={EditForm}
        onchangehandler={onChangeHandler}
        onCreate={onCreate}
      />
      <DeleteRuleModal
        show={DeleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        modaltitle={ModalTitle}
        editform={EditForm}
        onconfirm={onConfirmDeleteHandler}
      />
      <div className="container">
        <div className="d-flex justify-content-between my-4 align-items-center">
          <div>
            <h2>All Rules </h2>
          </div>
          <div>
            <Button variant="primary" onClick={() => onCreateHandler()}>
              Create
            </Button>
          </div>
        </div>
        <div className="row">
          {Rules.length > 0 ? (
            <RuleTable
              Rules={Rules}
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

export default MyRule;
