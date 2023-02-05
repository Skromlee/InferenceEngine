import { useEffect } from "react";
import "../css/advisor.css";

const Advisor = () => {
  useEffect(() => {
    document.title = "Our Advisor";
  }, []);

  return (
    <div className="container mt-5">
      <div>
        <div className="row">
          <div className="col">
            <img
              className="AjPhoto rounded"
              src={require("../images/AjWatcharachai.jpg")}
              alt="AjWatcharachai"
            />
          </div>
          <div className="col">
            <div className="text-center border py-5 mb-5">
              <h1 className="mb-4">อาจารย์ที่ปรึกษา</h1>
              <hr />
              <h4 className="mb-3">ชื่อ-สกุล: ผศ.วัชรชัย วิริยะสุทธิวงศ์</h4>
              <h4 className="mb-3">
                ตำแหน่ง: อาจารย์ ที่ มหาวิทยาลัยศรีนครินทรวิโรฒ
              </h4>
              <h4>อีเมล์: watch@g.swu.ac.th</h4>
            </div>
            <div className="text-center border py-5">
              <h1 className="mb-4">วุฒิการศึกษา</h1>
              <hr />
              <h4 className="mb-3">
                วิศวกรรมศาสตรมหาบัณฑิต สาขาวิชาวิศวกรรมไฟฟ้า
              </h4>
              <h4>มหาวิทยาลัยเชียงใหม่</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advisor;
