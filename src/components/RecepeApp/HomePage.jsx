import React from "react";

export default function HomePage() {
  return (
    <main className="container home-page d-flex align-items-center">
      <div>
        <h3 className="text-capitalize text-black">
          Delecious food &<br />
          recepes for your family
        </h3>
        <p className="text-black-50 my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          obcaecati velit, officia repudiandae expedita tenetur!
        </p>
        <button className="btn bg-main text-white fw-bold rounded-pill">
          Order now
        </button>
      </div>
    </main>
  );
}
