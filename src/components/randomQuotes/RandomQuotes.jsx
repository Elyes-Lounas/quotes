import React, { useEffect } from "react";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import axios from "axios";

export default function Randomadvices() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setAdvice(res.data.slip.advice));
  }, []);

  async function showadvice() {
    let res = await axios.get("https://api.adviceslip.com/advice");
    let data = await res.data.slip.advice;
    setAdvice(data);
  }
  return (
    <div className="app vh-100">
      <div className="wrapper position-relative rounded p-3 bg-dark">
        <h3 className="mt-5 advice text-white">{advice}</h3>
        <div className="text-center">
          <button
            onClick={showadvice}
            className="btn  btn-outline-warning mt-4"
          >
            Get advice
          </button>
        </div>
        <FaQuoteRight
          className="quote-icon position-absolute text-warning"
          size={20}
        />
      </div>
    </div>
  );
}
