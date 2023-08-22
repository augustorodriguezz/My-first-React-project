import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState , setListadoState}) => {

  const [editar , setEditar]= useState(0);  

  useEffect(()=> {
    console.log("componente del listado de películas cargado!!");
    conseguirPeliculas();
  },[]);

  //Voy a conseguir los datos que guarde en el localStorage, convirtiendolo en JSON a traves de la 
  //key que utilizamos (parámetro: clave) 
  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  }
  const borrarPeli = (id) => {
    //Conseguir peliculas almacenadas en el localStorage
    let pelis_almacenadas = conseguirPeliculas();
    //Filtrar las peliculas para que elimine del array la que yo quiero 
    let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
    //Actualizar el estado del listado
    setListadoState(nuevo_array_peliculas);
    //Actualizar los datos en el localStorage
    localStorage.setItem('pelis' , JSON.stringify(nuevo_array_peliculas));
  }

  return (
    <>
    {
      listadoState != null && listadoState.map( (peli) => {
        return (
          <article className="peli-item" key={peli.id}>
          <h3 className="title">{peli.titulo}</h3>
          <p className="description">{peli.descripcion}</p>
          <button className="edit" onClick={()=> setEditar(peli.id)}>Editar</button>
          <button className="delete" onClick={()=> borrarPeli(peli.id)}>Borrar</button>
          {editar === peli.id && (
            <Editar peli = {peli} 
                    conseguirPeliculas={conseguirPeliculas}
                    setListadoState={setListadoState}
                    setEditar={setEditar}
                    
                    />
          )}
      </article>
          

        )
      })
    }
               
    </>
  )
}
