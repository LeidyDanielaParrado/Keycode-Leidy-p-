//1.Definir variables 

let nombre="Daniela"
let edad=19
let precio=99.90
let series_favoritas=["Castlevania", " Amor muerte y robots", " Rick and morty ", " Cognito inc"]
let peliculas_favoritas=[
                        {nombre:"predestinacion", año_estreno:2014, protagonistas:["Sarah Snook", "Ethan Hawke"]},
                        {nombre:"presagio", año_estreno:2009, protagonistas:["Nicolas Cage", "Chandler Canterbury"]},
                        {nombre:"estigma", año_estreno:1999, protagonistas:["Patricia Arquette", "Gabriel Byrne"]}
                        ];

//2. Mostrar los valores en consola 

console.log ("Nombre: "+nombre)
console.log ("Edad: "+edad)
console.log ("Precio: "+precio)
console.log ("Mis series favoritas: "+series_favoritas)
console.log (peliculas_favoritas)

//3. Incrementar la edad en 1 y volver a mostrara

edad++
console.log ("Edad con incremento: "+edad)

//4. agregar una serie a la lista de series y mostrala de nuevo 
series_favoritas.push(" American horror story")
console.log ("Lista de series actualizada: "+ series_favoritas)

