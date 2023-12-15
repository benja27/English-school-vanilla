import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let presentPerfectSentences = [
  "I have just finished my homework. 📚✅",
  "She has visited Paris several times. 🗼🌍",
  "They have never eaten sushi before. 🍣🚫",
  "He has already seen that movie. 🎬👀",
  "We have traveled to many countries. ✈️🌎",
  "The company has recently launched a new product. 🏭🆕",
  "I have lived in this city for ten years. 🏙️🔟",
  "She has read all the Harry Potter books. 📚⚡",
  "They have just arrived at the airport. 🛬👜",
  "He has never met his favorite author in person. 📖🤝",
  "We have cleaned the house this morning. 🏠🧹",
  "She has cooked dinner for the family. 🍽️👨‍👩‍👧‍👦",
  "They have experienced many adventures together. 🌄🌟",
  "He has completed his studies. 🎓📝",
  "I have already sent the email. 📧📤",
  "She has bought a new car. 🚗🚀",
  "They have won the championship. 🏆🥇",
  "He has learned to play the guitar. 🎸🎶",
  "We have seen the Northern Lights. 🌌❄️",
  "She has painted a beautiful picture. 🎨🖼️",
  "She has traveled to Asia multiple times. ✈️🌏",
  "I have never tasted Indian cuisine before. 🍛🌶️",
  "He has seen all the episodes of his favorite TV series. 📺🎞️",
  "They have recently redecorated their living room. 🏠🎨",
  "We have just celebrated our tenth wedding anniversary. 🎉💍",
  "She has successfully completed her online courses. 📚🎓",
  "He has acquired a new skill during the lockdown. 💻🔧",
  "They have adopted a rescue dog from the shelter. 🐶❤️",
  "We have explored many national parks this summer. 🏞️🌞",
  "I have finally finished reading that long novel. 📖👏",
  "Acabo de terminar mi tarea. 📚✅",
  "Ella ha visitado París varias veces. 🗼🌍",
  "Nunca han comido sushi antes. 🍣🚫",
  "Él ya ha visto esa película. 🎬👀",
  "Hemos viajado a muchos países. ✈️🌎",
  "La empresa recién ha lanzado un nuevo producto. 🏭🆕",
  "He vivido en esta ciudad durante diez años. 🏙️🔟",
  "Ella ha leído todos los libros de Harry Potter. 📚⚡",
  "Acaban de llegar al aeropuerto. 🛬👜",
  "Nunca ha conocido en persona a su autor favorito. 📖🤝",
  "Hemos limpiado la casa esta mañana. 🏠🧹",
  "Ella ha cocinado la cena para la familia. 🍽️👨‍👩‍👧‍👦",
  "Han vivido muchas aventuras juntos. 🌄🌟",
  "Él ha completado sus estudios. 🎓📝",
  "Ya he enviado el correo electrónico. 📧📤",
  "Ella ha comprado un coche nuevo. 🚗🚀",
  "Han ganado el campeonato. 🏆🥇",
  "Él ha aprendido a tocar la guitarra. 🎸🎶",
  "Hemos visto las Luces del Norte. 🌌❄️",
  "Ella ha pintado un cuadro hermoso. 🎨🖼️",
  "Ella ha viajado a Asia varias veces. ✈️🌏",
  "Nunca he probado la cocina india antes. 🍛🌶️",
  "Él ha visto todos los episodios de su serie de TV favorita. 📺🎞️",
  "Ellos han redecorado recientemente su sala de estar. 🏠🎨",
  "Acabamos de celebrar nuestro décimo aniversario de bodas. 🎉💍",
  "Ella ha completado con éxito sus cursos en línea. 📚🎓",
  "Él ha adquirido una nueva habilidad durante el confinamiento. 💻🔧",
  "Ellos han adoptado un perro de rescate del refugio. 🐶❤️",
  "Hemos explorado muchos parques nacionales este verano. 🏞️🌞",
  "Finalmente, he terminado de leer esa larga novela. 📖👏"
];


document.getElementById('pre_perfect').addEventListener("click", (e) => {
  let btn_test = document.getElementById("pre_perfect");
  if (!lista_all.includes(presentPerfectSentences)) {
    lista_all.push(presentPerfectSentences);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(presentPerfectSentences);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});
