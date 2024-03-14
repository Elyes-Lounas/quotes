import React from "react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

export default function Header({ search, recepeName, setRecepeName }) {
  let inputRef = useRef();
  return (
    <header className="container d-flex justify-content-between py-2">
      <h2>
        <span className="text-main">Ramen</span>.Kuy
      </h2>
      <div className="input-group w-50">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Search..."
          name="search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={search}
          value={recepeName}
        />
        <div className="input-group-append">
          <span
            className="input-group-text icon text-white h-100"
            id="basic-addon2"
          >
            <FaSearch
              onClick={() => {
                setRecepeName(inputRef.current.value);
              }}
            />
          </span>
        </div>
      </div>
    </header>
  );
}
