import askUser from "./askUser.js";

const songsTitlesAsked = askUser(
  "Titulos de las canciones que quieres almacenar:"
);
let songsTitles = songsTitlesAsked.split(",");

const positionWanted = Number(
  askUser("¿Que posicion de la lista quieres ver?")
);

if (positionWanted - 1 <= songsTitles.length) {
  console.log(songsTitles[positionWanted - 1]);
} else {
  console.log("El numero de posicion no es correcto!");
}
