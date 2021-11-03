import React, { useState } from "react";
import { AddCategorys } from "./components/AddCategorys";
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () => {
  //const categories = ["One Punch", "Samuria X", "Dagron Ball"];

  const [categories, setCategories] = useState(["Pokemon"]);
  // const handleAdd = () => {
  //   //Agregar un elemento nuevo al array
  //   setCategories(["Digimon", ...categories]);
  //   //Otra forma de agregar nuevas categorias seria
  //   /**
  //    * setCategories(cats=>[...cats,'Digimon']), el callback, 1 Arg, sería el estado del anterior y luego regresa el nuevo esado
  //    */
  // };

  //e paso las categorias al componente hijo(AddCategorys.), con una funcion = {referencia setCategories}
  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategorys setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
