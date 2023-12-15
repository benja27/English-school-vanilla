import { random } from "../random.js"
import { lista_all } from "../sentences.js"

export let past_perfect_sentences = [
  "She had already finished her homework before dinner. ✅🍽️",
  "They had never visited that museum until last weekend. 🏛️📅",
  "He had read the book before watching the movie adaptation. 📖🎬",
  "We had traveled to Europe several times by the age of 30. 🌍✈️",
  "The company had launched its first product in 2005. 🏭🚀",
  "She had lived in New York for five years when she decided to move. 🏙️🗽",
  "They had seen that famous singer perform live on multiple occasions. 🎤👀",
  "I had completed all the required courses by the time I graduated. 🎓📚",
  "By the time we arrived, they had already left the party. 🎉🚗",
  "He had never experienced such a thrilling adventure until that day. 🌄🚣‍♂️",
  "She had learned to play the piano at a young age. 🎹🎶",
  "We had visited that charming little town in the mountains before. ⛰️🏞️",
  "By the time they arrived at the airport, their flight had already departed. 🛫👜",
  "He had just finished a delicious meal when the dessert arrived. 🍽️🍰",
  "She had already purchased the concert tickets online. 🎫💻",
  "They had never tried sushi until their friends introduced them to it. 🍣🥢",
  "I had completed my degree and started my first job at that company. 🎓💼",
  "By the time we reached the summit, the sun had already set. 🌄🌇",
  "He had never been to an art gallery until his visit to Paris. 🖼️🗼",
  "She had watched all the episodes of that TV series in one weekend. 📺🍿",
  "They had worked on that project for months before presenting it. 💼📅",
  "I had never seen such a beautiful sunset in my life. 🌅😍",
  "By the time the party started, she had already prepared the decorations. 🎉🎈",
  "He had practiced the piano for hours before the recital. 🎹🎵",
  "She had received several awards for her outstanding performance. 🏆🌟",
  "We had never explored that part of the city until today. 🏙️🗺️",
  "They had taken many photographs during their summer vacation. 📸🏖️",
  "I had visited my grandparents every summer when I was a child. 👴👵🌞",
  "Ella ya había terminado su tarea antes de la cena. ✅🍽️",
  "Ellos nunca habían visitado ese museo hasta el fin de semana pasado. 🏛️📅",
  "Él había leído el libro antes de ver la adaptación cinematográfica. 📖🎬",
  "Habíamos viajado a Europa varias veces antes de cumplir 30 años. 🌍✈️",
  "La compañía había lanzado su primer producto en 2005. 🏭🚀",
  "Ella había vivido en Nueva York durante cinco años cuando decidió mudarse. 🏙️🗽",
  "Ellos habían visto actuar a ese famoso cantante en vivo en varias ocasiones. 🎤👀",
  "Yo había completado todos los cursos requeridos para cuando me gradué. 🎓📚",
  "Para cuando llegamos, ellos ya se habían ido de la fiesta. 🎉🚗",
  "Él nunca había experimentado una aventura tan emocionante hasta ese día. 🌄🚣‍♂️",
  "Ella había aprendido a tocar el piano a una edad temprana. 🎹🎶",
  "Habíamos visitado ese encantador pueblito en las montañas antes. ⛰️🏞️",
  "Para cuando ellos llegaron al aeropuerto, su vuelo ya había partido. 🛫👜",
  "Él acababa de terminar una deliciosa comida cuando llegó el postre. 🍽️🍰",
  "Ella ya había comprado las entradas para el concierto en línea. 🎫💻",
  "Ellos nunca habían probado el sushi hasta que sus amigos los introdujeron a él. 🍣🥢",
  "Yo había completado mi título y comenzado mi primer trabajo en esa empresa. 🎓💼",
  "Para cuando alcanzamos la cima, el sol ya se había puesto. 🌄🌇",
  "Él nunca había estado en una galería de arte hasta su visita a París. 🖼️🗼",
  "Ella había visto todos los episodios de esa serie de televisión en un fin de semana. 📺🍿",
  "Ellos habían trabajado en ese proyecto durante meses antes de presentarlo. 💼📅",
  "Yo nunca había visto un atardecer tan hermoso en mi vida. 🌅😍",
  "Para cuando comenzó la fiesta, ella ya había preparado las decoraciones. 🎉🎈",
  "Él había practicado el piano durante horas antes del recital. 🎹🎵",
  "Ella había recibido varios premios por su destacado desempeño. 🏆🌟",
  "Nunca habíamos explorado esa parte de la ciudad hasta hoy. 🏙️🗺️",
  "Ellos habían tomado muchas fotografías durante sus vacaciones de verano. 📸🏖️",
  "Yo visitaba a mis abuelos todos los veranos cuando era niño. 👴👵🌞"
]

document.getElementById('past_perfect').addEventListener("click", (e) => {
  let btn_test = document.getElementById("past_perfect");
  if (!lista_all.includes(past_perfect_sentences)) {
    lista_all.push(past_perfect_sentences);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(past_perfect_sentences);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});
