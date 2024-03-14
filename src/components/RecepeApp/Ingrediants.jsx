import React from "react";

export default function Ingrediants({
  setShowIngradients,
  targetRecepe,
  recepes,
}) {
  function Tbody({ text, index, weight }) {
    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{text}</td>
        <td>{weight}</td>
      </tr>
    );
  }
  let ingredients = recepes?.map((item, index) => {
    return item.recipe.ingredients;
  });

  return (
    <div className="containerr">
      <table class="table table-striped w-75 position-absolute top-50 start-50 translate-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ingrediants</th>
            <th scope="col">Weight</th>
          </tr>
        </thead>
        <tbody>
          {ingredients[targetRecepe].map((ingredient, index) => {
            return (
              <Tbody
                key={index}
                text={ingredient.text}
                weight={ingredient.weight.toFixed(2)}
                index={index + 1}
              />
            );
          })}
        </tbody>
        <button
          onClick={() => {
            setShowIngradients(false);
          }}
          className="btn bg-main text-white m-2"
        >
          Close
        </button>
      </table>
    </div>
  );
}
