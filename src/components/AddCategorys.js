import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategorys = ({ setCategories }) => {
  //La caja tiene un estado, para saber que esta escribiendo el usuario
  const [inputValue, setInputValue] = useState("");

  //tenemos que extraer el valor del input, que introduce el usuario
  const handleInputChange = (e) => {
    //inputValue, es la última información que el usuario escribio
    setInputValue(e.target.value);
  };

  //Como captura el evento intro en React
  const handleSubmit = (e) => {
    //para prevenir el comportamiento por defecto del formulario se usa
    e.preventDefault();
    //Validar
    if (inputValue.trim().length > 2) {
      //como pasamos el setCategories, solo hay que utlizarlo, añadiendo o haciendo referencia a las categorias anteriores, y añadir la nueva con inputValue
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
//Para definir los propTypes, es fuera del return
AddCategorys.prototype = {
  setCategories: PropTypes.func.isRequired,
};
