import React from "react";
import User from "./User";
import { useState } from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function Body() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  function changeHandler(e) {
    fetch(`https://dummyjson.com/users/search?q=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setList(data));
  }

  return (
    <div className="body">
      <div className="search-bar mt-2 mx-2 rounded-pill px-3 align-items-center">
        <label htmlFor="search" className="pe-2">
          <FaSearch size={15} />
        </label>
        <input
          className="input"
          type="text"
          placeholder="Search"
          id="search"
          onChange={changeHandler}
        />
      </div>
      <div className="container contact-list d-flex flex-column gap-1">
        {list.users?.map((user) => {
          return <User {...user} />;
        })}
      </div>
    </div>
  );
}
