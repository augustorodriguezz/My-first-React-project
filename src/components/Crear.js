import React, { useState } from 'react'
import { guardarEnStorage } from '../helpers/guardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir Película";
    const [peliState, setPeliState] = useState ({
        titulo: "",
        descripcion: "",
    })
    // const {titulo, descripcion} = peliState

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        //Conseguir los datos del form
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        
        //Crear objeto que contenga los datos
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion,
        }
        //Guardar estado
        setPeliState(peli);

        //actualizo el listado en pantalla
        setListadoState( elementos => {
            return [...elementos, peli];
        })

        //Guardar en el almacenamiento local
        guardarEnStorage("pelis" , peli);
    }

       

   

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
            <form onSubmit={conseguirDatosForm}>
                <input 
                        type="text" 
                        name='titulo'
                        placeholder="Título"/>
                <textarea 
                        name='descripcion'
                        placeholder="descripción">
                </textarea>
                <input 
                        type="submit" 
                        value="guardar"/>
            </form>
    </div>
  )
}
