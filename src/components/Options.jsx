import React from "react";
import { IoFastFoodOutline, IoFootstepsOutline } from "react-icons/io5";
import { RiHeartPulseLine } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Options() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div
            className="p-3 my-2 bg-info text-nowrap"
            style={{ borderRadius: "15px" }}
          >
            <RiHeartPulseLine className="fs-2" />
            <p className="m-0 mt-4 fs-5">HEART RATE</p>
            <p className="fw-lighter">Heart Rate</p>
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 my-2 bg-danger" style={{ borderRadius: "15px" }}>
            <IoFootstepsOutline className="fs-2" />
            <p className="m-0 mt-4 fs-5">STEPS</p>
            <p className="fw-lighter">Steps</p>
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 my-2 bg-warning" style={{ borderRadius: "15px" }}>
            <TiWeatherPartlySunny className="fs-2" />
            <p className="m-0 mt-4 fs-5">WEATHER</p>
            <p className="fw-lighter">Todays Weather</p>
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 my-2 bg-primary" style={{ borderRadius: "15px" }}>
            <IoFastFoodOutline className="fs-2" />
            <p className="m-0 mt-4 fs-5">CALORIES</p>
            <p className="fw-lighter">Calories</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
