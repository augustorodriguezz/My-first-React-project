export const guardarEnStorage = (clave, elemento) => {
    //Conseguir los elementos del local Storage
    let elementos = JSON.parse(localStorage.getItem(clave));
    //Comprobar si es un array
    if(Array.isArray(elementos)) {
        elementos.push(elemento);
    }
    else {
        elementos = [elemento];
    }
    //Guardar en el local Storage
    localStorage.setItem(clave ,JSON.stringify(elementos));
    //Devolver el objeto guardado 
    return elemento;
}