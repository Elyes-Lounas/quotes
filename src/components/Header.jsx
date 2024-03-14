import React from "react";
import {
    FaWifi,
    FaSignal,
    FaBatteryFull,
    FaArrowLeft,
    FaPlus,
  } from "react-icons/fa";
export default function Header() {
  return (
    <div className="header py-2 px-4">
      <div className="stutus-bar d-flex justify-content-between align-items-center">
        <div className="left-side">
          <span className="fw-bold">9:45 PM</span>
        </div>
        <div className="right-side d-flex gap-1 align-items-center">
          <FaSignal className="fw-bold" size={15} />
          <FaWifi size={15} />
          <FaBatteryFull size={15} />
        </div>
      </div>
      <div className="boundary d-flex justify-content-between align-items-center mt-4">
        <FaArrowLeft />
        <h2 className="fs-5">My Contacts</h2>
        <FaPlus />
      </div>
    </div>
  );
}
