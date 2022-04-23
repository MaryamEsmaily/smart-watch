import React from "react";

function Options() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-6">
          <div className="py-5 my-2 bg-info rounded-3 text-nowrap">
            HEART BEAT
          </div>
        </div>
        <div className="col-6">
          <div className="py-5 my-2 bg-danger rounded-3"> STEPS</div>
        </div>
        <div className="col-6">
          <div className="py-5 my-2 bg-warning rounded-3"> WEATHER</div>
        </div>
        <div className="col-6">
          <div className="py-5 my-2 bg-primary rounded-3"> CALORIES</div>
        </div>
      </div>
    </div>
  );
}

export default Options;
