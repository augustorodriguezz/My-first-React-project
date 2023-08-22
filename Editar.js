import React from 'react'

export const Editar = ({peli , conseguirPeliculas, setEditar , setListadoState}) => {

    const titulo_edicion = "Editar película";
    const guardarEdicion= (e, id) => {
        e.preventDefault();
        //Conseguir el target del evento 
        let target = e.target ;
        const peliculas_almacenadas = conseguirPeliculas();
        const indice = peliculas_almacenadas.findIndex(peli => peli.id === id); 

        //Crear objeto con ese indice 
        let peli_actualizada = {
            id, 
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        }
        //Actualizar el elemento con ese indice
        peliculas_almacenadas[indice] = peli_actualizada;

        //Guardar el cambio en el localStorage
        localStorage.setItem('pelis' , JSON.stringify(peliculas_almacenadas));

        //Actualizar los estados
        setListadoState(peliculas_almacenadas);
        setEditar(0);

    }
  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_edicion}</h3>
        <form className='editable' onSubmit={e => guardarEdicion(e, peli.id)}>
            <input 
            type='text' 
            name='titulo' 
            className='titulo_editado' 
            defaultValue={peli.titulo}/>

            <textarea 
            name='descripcion' 
            defaultValue={peli.descripcion} 
            className='descripcion_editada'/>

            <input 
            type="submit" 
            value='Actualizar' 
            className='editar'/>
        </form>
    </div>
  )
}
