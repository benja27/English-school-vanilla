import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let yet_still = [
  ["He estado aprendiendo inglés durante tres años.", "I've been learning English for three years." ],
  [
    "Desde que me mudé a esta ciudad, he hecho muchos amigos.",
    "Since I moved to this city, I've made many friends.",
  ],
  ["¿Alguna vez has viajado a Europa?", "Have you ever traveled to Europe?"],
  ["Ella nunca ha probado sushi antes.", "She has never tasted sushi before."],
  [
    "Acabo de terminar de leer ese libro anoche.",
    "I just finished reading that book last night.",
  ],
  [
    "Él todavía está trabajando en su proyecto.",
    "He's still working on his project.",
  ],
  ["Todavía no he terminado mi tarea.", "I haven't finished my homework yet."],
  [
    "Hemos estado esperando el autobús durante siglos.",
    "We've been waiting for the bus for ages.",
  ],
  [
    "Desde que nos mudamos a una casa más grande, tenemos más espacio.",
    "Since we moved to a bigger house, we have more space.",
  ],
  [
    "¿Alguna vez has conocido a una persona famosa?",
    "Have you ever met a famous person?",
  ],
  [
    "Acabo de escuchar las noticias en la radio.",
    "I just heard the news on the radio.",
  ],
  [
    "Él todavía está estudiando para el examen.",
    "He's still studying for the exam.",
  ],
  ["La reunión aún no ha comenzado.", "The meeting hasn't started yet."],
  [
    "He vivido en esta ciudad for cinco años.",
    "I have lived in this city for five years."
  ],
  [
    "Desde que era niño, siempre he amado la música.",
    "Since I was a child, I have always loved music."
  ],
  [
    "¿Alguna vez has probado la comida tailandesa?",
    "Have you ever tried Thai food?"
  ],
  [
    "Ella nunca ha estado en París antes.",
    "She has never been to Paris before."
  ],
  [
    "Acabo de terminar mi tarea justo a tiempo.",
    "I just finished my homework just in time."
  ],
  [
    "Él todavía está estudiando para el examen.",
    "He is still studying for the exam."
  ],
  [
    "Todavía no he recibido tu mensaje.",
    "I haven't received your message yet."
  ],
  [
    "Han estado lloviendo since ayer por la tarde.",
    "It has been raining since yesterday afternoon."
  ],
  [
    "¿Has ever nadado en el océano?",
    "Have you ever swum in the ocean?"
  ],
  [
    "Mis padres for casados desde hace treinta años.",
    "My parents have been married for thirty years."
  ],
  [
    "Hemos sido amigos for muchos años.",
    "We have been friends for many years."
  ],
  [
    "Desde que me mudé aquí, nunca he visto nieve.",
    "Since I moved here, I have never seen snow."
  ],
  [
    "¿Has ever comido comida india?",
    "Have you ever eaten Indian food?"
  ],
  [
    "Ella just terminó su maestría.",
    "She just finished her master's degree."
  ],
  [
    "Él todavía está esperando el autobús.",
    "He is still waiting for the bus."
  ],
  [
    "Todavía no hemos decidido el destino de nuestras vacaciones.",
    "We haven't decided our vacation destination yet."
  ],
  [
    "No he visto a mi hermano since la semana pasada.",
    "I haven't seen my brother since last week."
  ],
  [
    "Nunca he estado en un parque de diversiones.",
    "I have never been to an amusement park."
  ],
  [
    "¿Has ever visitado París?",
    "Have you ever visited Paris?"
  ],
  [
    "Estudiamos inglés for dos horas todos los días.",
    "We study English for two hours every day."
  ]
];

document.getElementById("just_yet_still").addEventListener("click", (e) => {
  let btn_test = document.getElementById("just_yet_still");
  if (!lista_all.includes(yet_still)) {
    lista_all.push(yet_still);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(yet_still);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});
