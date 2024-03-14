import React from "react";

export default function User({id,image,firstName,phone,age}) {
  return (
    <div key={id} className="d-flex align-items-center gap-2 py-2">
      <img
        className="rounded-circle user-img"
        src={image}
        alt={firstName}
      />
      <div className="d-flex flex-column">
        <h5 className="mb-0">{firstName}</h5>
        <p className="mb-0">{phone}</p>
      </div>
    </div>
  );
}
