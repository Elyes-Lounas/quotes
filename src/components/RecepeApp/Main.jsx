import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Menu from "./Menu";
import Header from "./Header";
import Pagination from "./Pagination";
import Ingrediants from "./Ingrediants";
import { useRef } from "react";

export default function Main() {
  const [recepes, setRecepes] = useState([]);
  const [recepeName, setRecepeName] = useState("");
  const [targetRecepe, setTargetRecepe] = useState(null);
  const [showIngradients, setShowIngradients] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const homePageRef = useRef();
  useEffect(() => {
    let _API_KEY = "4c4971fb8f087a700b2c80d142d0d7b7"; //!remove ? at the end
    let _API_ID = "bf92234e";
    let lastIndex = currentPage * 6;
    let firstIndex = lastIndex - 6;
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recepeName}&app_id=${_API_ID}&app_key=${_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecepes(data.hits.slice(firstIndex, lastIndex));
        setTotalPages(Math.ceil(data.hits.length / 6));
      });
  }, [recepeName, currentPage]);

  function search(e) {
    setRecepeName(e.target.value);
    homePageRef.current.scrollIntoView();
  }
  function showIngradientsHandler() {
    setShowIngradients(!showIngradients);
  }

  return (
    <>
      <Header
        search={search}
        recepeName={recepeName}
        setRecepeName={setRecepeName}
      />
      <div className="container">
        <h1 className="recepe-text text-center mb-5 position-relative">
          Recepes
        </h1>
        <div ref={homePageRef} className="row justify-content-center gap-3 ">
          {recepes?.map((item, index) => {
            return (
              <Menu
                key={index}
                id={index}
                label={item.recipe.label}
                setTargetRecepe={setTargetRecepe}
                image={item.recipe.image}
                showIngradientsHandler={showIngradientsHandler}
              />
            );
          })}
        </div>
      </div>
      {showIngradients && <div className="overlay"></div>}
      {showIngradients
        ? document.body.classList.add("fixed-products")
        : document.body.classList.remove("fixed-products")}

      {showIngradients && (
        <div>
          <Ingrediants
            recepes={recepes}
            targetRecepe={targetRecepe}
            setShowIngradients={setShowIngradients}
          />
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
