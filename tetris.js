//Para traer el canvas que queremos modificar
const canvas = document.querySelector('#tetris');
//Recupero el contexto del canvas (contexto renderizado 2D)
const lienzo = canvas.getContext("2d");

const filas = 20;
const columnas = 10;
const tamanoCelda = 30; //Tamaño de celdas en píxeles

//Definir tablero (dimensiones)
canvas.width =  tamanoCelda * columnas;
canvas.height = tamanoCelda * filas;

//Para que cada punto del canva utilice ese tamaño
lienzo.scale(tamanoCelda, tamanoCelda);

//Inicializamos el board
const tablero = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

//Función dibujar tablero
function dibujarTablero(){
    //Recorre las filas del tablero (el row es la y, porque las matrices son alrevés)
    tablero.forEach((row ,y) =>
        //Dentro de cada fila del tablero, recorro los valores que son x
        row.forEach((value, x) => {
            if (value == 1) {
                //Si el valor es 1, pinta amarillo
                lienzo.fillStyle = 'gray';
                lienzo.fillRect (x, y, 1, 1);
            }
        }
    )
  )
}