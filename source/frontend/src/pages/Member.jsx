import "../css/member.css";

const Member = () => {
  return (
    <div className="container">
      <div className="my-4">
        <h1>Member:</h1>
      </div>
      <div className="row row-cols-3 align-items-center fixHeight photocontainer mt-5">
        <div className="col text-center">
          <img
            className="memberPhoto rounded"
            src={require("../images/63109010163.jpg")}
            alt="Suppawat_Kromlee_Picture"
          />
          <div className="col mt-4">
            <p className="my-0">นายศุภวัฒน์ กรมลี</p>
            <p className="my-09">63109010163</p>
          </div>
        </div>
        <div className="col text-center">
          <img
            className="memberPhoto rounded"
            src={require("../images/63109010167.jpg")}
            alt="Suppawat_Kromlee_Picture"
          />
          <div className="col mt-4">
            <p className="my-0">นายอภิสิทธิ์ หล้าดี</p>
            <p className="my-09">63109010167</p>
          </div>
        </div>
        <div className="col text-center">
          <img
            className="memberPhoto rounded"
            src={require("../images/63109010241.jpg")}
            alt="Suppawat_Kromlee_Picture"
          />
          <div className="col mt-4">
            <p className="my-0">นายศิรหิรัณย์ ดำรงธวัชเกษม</p>
            <p className="my-09">63109010241</p>
          </div>
        </div>
        <div className="col text-center">
          <img
            className="memberPhoto rounded"
            src={require("../images/63109010297.jpg")}
            alt="Suppawat_Kromlee_Picture"
          />
          <div className="col mt-4">
            <p className="my-0">นายธนภัทร รัตนมนตรี</p>
            <p className="my-09">63109010297</p>
          </div>
        </div>
        <div className="col text-center">
          <img
            className="memberPhoto rounded"
            src={require("../images/63109010435.jpg")}
            alt="Suppawat_Kromlee_Picture"
          />
          <div className="col mt-4">
            <p className="my-0">นายปฏิพล นามโยธา</p>
            <p className="my-09">63109010435</p>
          </div>
        </div>
        <div className="col text-center">
          <img
            className="memberPhoto rounded"
            src={require("../images/63109010438.jpg")}
            alt="Suppawat_Kromlee_Picture"
          />
          <div className="col mt-4">
            <p className="my-0">นายภัคพล นิรันดร</p>
            <p className="my-09">63109010438</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Member;
