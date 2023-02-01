const WorkingMemory = ({ message }) => {
  console.log(message, "<=-=====");
  return (
    <>
      <div className="container bg-dark text-white py-5 px-5">
        <div className="row">
          {Object.keys(message["log"]).length > 0
            ? message["log"].map((eachLog) => {
                return (
                  <div key={Math.random() * 100000} className="col-sm">
                    <h6>----- Woking Memory -----</h6>
                    <h6>Facts: </h6>
                    <ol>
                      {eachLog["workingMemory"].map((eachFact) => {
                        return <li key={Math.random() * 10000}>{eachFact}</li>;
                      })}
                      <br />
                    </ol>
                    <h6>status: </h6>
                    <div>
                      {Object.keys(eachLog).includes("prompt") ? (
                        <li key={Math.random() * 10000}>
                          Prompt: {eachLog["prompt"]}
                        </li>
                      ) : (
                        <li key={Math.random() * 10000}>
                          Conclude: {eachLog["conclude"]}
                        </li>
                      )}
                    </div>
                    <h6>----------------------------</h6>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};
export default WorkingMemory;
