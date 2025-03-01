import Cycling from "./Cycling";
import Runnig from "./Runnig";
import Yoga from "./Yoga";

function PersonalRecord() {
  return (
    <div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <Runnig />
            <Cycling />
            <Yoga />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalRecord;
