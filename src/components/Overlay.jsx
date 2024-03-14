import React from "react";
import { useState } from "react";

export default function Overlay() {
  const [show, setShow] = useState(false);
  function showOverlay() {
    setShow(true);
  }
  function hideOverlay() {
    setShow(false);
  }
  return (
    <div className="my-5 w-100">
      <div className="text-center">
        <button onClick={showOverlay} className="btn btn-primary ">click</button>
      </div>
      {show && <div className="overlay position-absolute"></div>}
      {show && (
        <div className="bg-warning w-50 position-absolute top-50 start-50 translate-middle rounded   p-3">
        <h1 onClick={hideOverlay} className="text-end text-white">X</h1>
          <h1>name:elyes</h1>
          <h1>age:20</h1>
          <h1>job:teacher</h1>
        </div>
      )}
    </div>
  );
}
