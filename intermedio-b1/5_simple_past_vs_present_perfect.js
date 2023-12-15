import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let simple_past_vs_present_perfect = [
  ["Ayer vi una película genial. 🎬👍", "Yesterday, I watched a great movie. 🎬👍"],
  ["He terminado de leer ese libro. 📖✅", "I have finished reading that book. 📖✅"],
  ["Hace tres días, compré una bicicleta nueva. 🚲📅", "Three days ago, I bought a new bicycle. 🚲📅"],
  ["Nunca he probado la comida japonesa. 🍣🚫", "I've never tried Japanese food. 🍣🚫"],
  ["La semana pasada, fui a una conferencia interesante. 🗣️📅", "Last week, I attended an interesting conference. 🗣️📅"],
  ["Hemos estado esperando aquí por una hora. ⏳👫", "We have been waiting here for an hour. ⏳👫"],
  ["¿Has visto esa película antes? 🎥❓", "Have you seen that movie before? 🎥❓"],
  ["¿Cuándo fue la última vez que fuiste al gimnasio? 💪❓", "When was the last time you went to the gym? 💪❓"],
  ["Mi hermana me llamó ayer. 📞👩‍❤️‍👩", "My sister called me yesterday. 📞👩‍❤️‍👩"],
  ["¿Alguna vez has viajado a París? 🗼❓", "Have you ever traveled to Paris? 🗼❓"],
  ["Hace dos años, visité Nueva York. 🌆📅", "Two years ago, I visited New York. 🌆📅"],
  ["Nunca he comido sushi. 🍣🚫", "I've never eaten sushi. 🍣🚫"],
  ["¿Cuándo fue la última vez que comiste pizza? 🍕❓", "When was the last time you ate pizza? 🍕❓"],
  ["El mes pasado, tomé un curso de fotografía. 📷📆", "Last month, I took a photography course. 📷📆"],
  ["Hace cinco años, me mudé a esta ciudad. 🏙️📅", "Five years ago, I moved to this city. 🏙️📅"],
  ["¿Has conocido a alguien famoso? 🌟❓", "Have you met a famous person? 🌟❓"],
  ["Hace una semana, recibí una carta importante. ✉️📅", "A week ago, I received an important letter. ✉️📅"],
  ["Mi abuela me enseñó a cocinar. 👵🍳", "My grandmother taught me how to cook. 👵🍳"],
  ["¿Has visitado este museo alguna vez? 🏛️❓", "Have you ever visited this museum? 🏛️❓"],
  ["Ayer, encontré un billete de 10 dólares en la calle. 💵📅", "Yesterday, I found a $10 bill on the street. 💵📅"],
  ["Mi hermano me dio un regalo sorpresa. 🎁👦", "My brother gave me a surprise gift. 🎁👦"],
  ["¿Has estado en este restaurante antes? 🍽️❓", "Have you been to this restaurant before? 🍽️❓"],
  ["Hace tres meses, comenzamos un proyecto nuevo. 📅✨", "Three months ago, we started a new project. 📅✨"],
  ["Mis amigos me visitaron la semana pasada. 👫📅", "My friends visited me last week. 👫📅"],
  ["¿Alguna vez has volado en un avión privado? ✈️❓", "Have you ever flown on a private plane? ✈️❓"],
  ["La película comenzó hace una hora. 🎬⌛", "The movie started an hour ago. 🎬⌛"],
  ["¿Cuándo fue la última vez que viste a tu abuelo? 👴❓", "When was the last time you saw your grandfather? 👴❓"],
  ["Mis padres me llevaron a Disney World cuando era niño. 🏰👪", "My parents took me to Disney World when I was a child. 🏰👪"],
  ["¿Has probado alguna vez la comida tailandesa? 🍲❓", "Have you ever tried Thai food?"]
]



document.getElementById('simple_past_vs_present_perfect').addEventListener("click", (e) => {
  let btn_test = document.getElementById("simple_past_vs_present_perfect");
  if (!lista_all.includes(simple_past_vs_present_perfect)) {
    lista_all.push(simple_past_vs_present_perfect);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(simple_past_vs_present_perfect);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm