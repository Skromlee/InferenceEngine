import RuleControlPanel from "./RuleControlPanel";

const RuleRow = ({ Facts, rule, editHandler, deleteHandler }) => {
  const {
    id,
    fact1_prefix,
    fact1,
    operator,
    fact2_prefix,
    fact2,
    conclude1,
    conclude2,
  } = rule;

  const key = ["fact1", "fact2", "conclude1", "conclude2"];
  const key_prefix = ["fact1_prefix", "fact2_prefix"];

  let rule_represented = {
    id: id,
    fact1_prefix: fact1_prefix,
    fact1: fact1,
    operator: operator,
    fact2_prefix: fact2_prefix,
    fact2: fact2,
    conclude1: conclude1,
    conclude2: conclude2,
  };

  const represent = (facts, fact, key, prefix) => {
    facts.map((eachfact) => {
      if (prefix === null) {
        if (eachfact.id === fact) {
          rule_represented[key] =
            eachfact.factName + " (" + eachfact.description + ")";
        }
      } else {
        if (eachfact.id === fact) {
          rule_represented[key] =
            prefix +
            " " +
            eachfact.factName +
            " (" +
            eachfact.description +
            ")";
        }
      }
    });
  };

  for (let i = 0; i < key.length; i++) {
    if (key[i] === "fact1") {
      represent(
        Facts,
        rule_represented[key[i]],
        key[i],
        rule_represented[key_prefix[0]]
      );
    } else if (key[i] === "fact2") {
      represent(
        Facts,
        rule_represented[key[i]],
        key[i],
        rule_represented[key_prefix[1]]
      );
    } else {
      represent(Facts, rule_represented[key[i]], key[i], null);
    }
  }

  return (
    <>
      <td>{rule_represented["id"]}</td>
      <td>{rule_represented["fact1"]}</td>
      <td>
        {rule_represented["operator"] ? rule_represented["operator"] : "-"}
      </td>
      <td>{rule_represented["fact2"] ? rule_represented["fact2"] : "-"}</td>
      <td>
        {rule_represented["conclude1"] ? rule_represented["conclude1"] : "-"}
      </td>
      <td>
        {rule_represented["conclude2"] ? rule_represented["conclude2"] : "-"}
      </td>
      <td>
        <RuleControlPanel
          rule={rule}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      </td>
    </>
  );
};

export default RuleRow;
