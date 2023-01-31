const WorkingMemory = ({ message }) => {
  return (
    <>
      <div className="container">
        <p>----- Working memory -----</p>
        {message.map((each) => {
          return <li key={Math.random() * 10000}>{each}</li>;
        })}
        <p>----- Working memory -----</p>
      </div>
    </>
  );
};
export default WorkingMemory;
