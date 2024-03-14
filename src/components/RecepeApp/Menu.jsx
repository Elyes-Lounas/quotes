import React from "react";

export default function Menu({
  label,
  id,
  setTargetRecepe,
  image,
  showIngradientsHandler,
}) {
  function clickHandler() {
    setTargetRecepe(id);
    showIngradientsHandler();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="card col-md-3 pt-3 position-relative ">
      <img className="card-img-top img" src={image} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title fs-6">{label}</h5>
        <button onClick={clickHandler} className="btn mt-3 bg-main text-white w-100">
          Ingrediants
        </button>
      </div>
    </div>
  );
}
