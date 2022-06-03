let container = document.getElementById("containerPrueba")

let titulo = document.createElement("h1")

for (let i =1 ; i<= 12 ; i++ ){
    
    const imagePais = prompt('Ingresa la Url de la imagen ');
const nameCiudad = prompt('Nombre de la ciudad');
const namePais = prompt('Y su pais es ?:');

        let imagen = document.createElement("img")
        imagen.setAttribute("src", imagePais)
        container.appendChild(imagen)
        //nombreciudad
     let ciudad = document.createElement("h2")
     ciudad.innerHTML =`${nameCiudad}`
     container.appendChild(ciudad)
     //nombrepais
     let pais = document.createElement("h2")
     pais.innerHTML =`${namePais}`
     container.appendChild(pais)
    
   
}

