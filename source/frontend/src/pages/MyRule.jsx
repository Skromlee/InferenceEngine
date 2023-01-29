// import axios to use API
import axios from "axios";
import { useEffect, useState } from "react";
import DeleteRuleModal from "../components/DeleteRuleModal";
import EditRuleModal from "../components/EditRuleModal";

// import Rule from "../components/Rule";
import RuleTable from "../components/RuleTable";

// define a backend URI
const URI = "http://localhost:8000/api/rules/";

function MyRule() {
  const [Rules, setRules] = useState([]);
  const [EditModalShow, setEditModalShow] = useState(false);
  const [DeleteModalShow, setDeleteModalShow] = useState(false);
  const [ModalTitle, setModalTitle] = useState("");
  const [EditForm, setEditForm] = useState({
    id: "",
    fact1: "",
    operator1: "",
    fact2: "",
    operator2: "",
    fact3: "",
    conclude: "",
  });

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
    axios
      .put(URI + EditForm.id + "/", EditForm)
      .then((response) => getRules())
      .catch((error) => console.log(error));
    setEditModalShow(false);
  };

  const deleteHandler = (index) => {
    setModalTitle("DELETE RULE NO." + index);
    setDeleteModalShow(true);
    console.log("Delete!!", index);
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
      <DeleteRuleModal
        show={DeleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        modaltitle={ModalTitle}
      />
      <div className="container">
        <div className="d-flex justify-content-center my-4">
          <h2>All Rules </h2>
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
