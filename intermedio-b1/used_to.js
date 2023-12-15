import { lista_all } from "../sentences.js";

export  let used_to_spa = [
  "Yo uso una pluma para escribir. ✒️",
  "Tú usas tu teléfono todos los días. 📱",
  "Ella usa un vestido rojo para la fiesta. 👗",
  "Nosotros usamos herramientas para arreglar la casa. 🛠️",
  "Ellos usan gafas de sol en verano. 🕶️☀️",
  "Compré un coche usado. 🚗👀",
  "Encontré un libro usado en la librería. 📚🔍",
  "Vimos una película usada en la tienda. 🎥🛒",
  "Solía estudiar mucho en la universidad. 📚🎓",
  "Antes, él solía trabajar en esa empresa. 💼👔",
  "Ella solía amar los días soleados. ☀️❤️",
  "Nosotros solíamos viajar juntos cada verano. 🌴🌞",
  "Ellos solían vivir en una casa antigua. 🏡🕰️",
  "Yo solía abrir la puerta con una llave. 🚪🔑",
  "Tú solías ver programas de televisión los sábados. 📺📅",
  "Él solía venir a mi casa a jugar. 🏡🎮",
  "Antes, ella solía ir a la escuela en bicicleta. 🚲🎒",
  "Nosotros solíamos saber la respuesta. 🧠❓",
  "Este cuchillo se usa para cortar verduras. 🔪🥦",
  "La taza se usa para beber café. ☕🥄",
  "Esa habitación se usa para almacenar libros. 📚🏠",
  "El paraguas se usa para protegerse de la lluvia. ☔🌂",
  "Estoy acostumbrado a estudiar por las noches. 🌃📖",
  "Tú estás acostumbrado a trabajar largas horas. 💼⏰",
  "Ella está acostumbrada a amanecer temprano. 🌄⏰",
  "Nosotros estamos acostumbrados a viajar en tren. 🚆🧳",
  "Ellos están acostumbrados a vivir en la ciudad. 🏙️🏡",
  "Yo estoy acostumbrado a abrir la puerta con una llave. 🔑🚪",
  "Tú estás acostumbrado a ver películas de terror. 🎥😱",
  "Él está acostumbrado a venir a visitarnos. 🏡👋",
  "Nosotros estamos acostumbrados a ir de excursión. 🏞️🥾",
  "Ellos están acostumbrados a saber la verdad. 🧐🤐",
  "Me costó tiempo acostumbrarme a estudiar en línea. 💻📚",
  "Tú te estás acostumbrando a trabajar desde casa. 🏡💼",
  "Ella se está acostumbrando a amar la tranquilidad. ❤️🤫",
  "Nosotros nos estamos acostumbrando a viajar en avión. ✈️🌍",
  "Ellos se están acostumbrando a vivir en un nuevo país. 🌏🏠",
  "Yo me estoy acostumbrando a abrir la puerta con una tarjeta. 🔑🚪",
  "Tú te estás acostumbrando a ver menos televisión. 📺🚫",
  "Él se está acostumbrando a venir puntualmente. 🕒👔",
  "Nosotros nos estamos acostumbrando a ir al gimnasio. 🏋️‍♂️🏋️‍♀️",
  "Ellos se están acostumbrando a saber más sobre el tema. 🧠📚"  
];

document.getElementById('used_to').addEventListener("click", (e) => {
  let btn_test = document.getElementById("used_to");
  if (!lista_all.includes(used_to_spa)) {
    lista_all.push(used_to_spa);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(used_to_spa);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});

