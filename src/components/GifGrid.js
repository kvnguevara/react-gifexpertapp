import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  //uso de useState

  //   useEffect(() => {
  //     getGifs(category) //retorna una promesa
  //       .then((imgs) => setImages(imgs));
  //   }, [category]); //la funcion del useEffect() es para que solo se cargue una vez nuestra peticion, y evitar los bucles infinitos en peticiones a api o BBDD
  //Si la categoria cambia, tendríamos que cargar de nuevo el useEffects, [category]

  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>

      {/* para poder mostar un lista, sabiendo como esta estructura
        hacemos la descontruccion */}
    </>
  );
};
