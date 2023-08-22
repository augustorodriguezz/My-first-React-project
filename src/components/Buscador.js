import React, { useState } from 'react'

export const Buscador = ({listadoState , setListadoState}) => {
 
  const [busqueda , setBusqueda] = useState('');
  const [noEncontrado , setNoEncontrado] = useState(false); 

  const buscarPeli = (e)=> {
 // Crear estado y actualizarlo 
    setBusqueda(e.target.value);

 // El listado completo de peliculas : esto ya lo logré importando las props

 // Filtrar para buscar coincidencias 

    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
   }); 
    
    // Lo que hicimos con la línea de arriba es buscar coincidencias en los titulos de listadoState

 if (busqueda.length <= 1 || pelis_encontradas <= 0) {
  pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
  setNoEncontrado(true);
} else {
   setNoEncontrado(false);
}

 // Actualizar el estado del listado principal de películas con lo que he logrado filtrar
    setListadoState(pelis_encontradas);

  }

  return (
        <div className="search">
                <h3 className="title">Buscador</h3>
                {(noEncontrado == true && busqueda.length > 1) && (
                  <span className='no_encontrado'>No se ha encontrado coincidencia</span>
                )}
                <form>
                    <input type="text"
                            id='search_field'
                            name='busqueda'
                            autoComplete='off'
                            onChange={buscarPeli}
                    />
                    <button id='search'>Buscar</button>
                </form>
        </div>
  )
}
