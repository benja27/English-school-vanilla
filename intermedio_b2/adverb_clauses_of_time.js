import { random } from "../random.js";
import { lista_all } from "../sentences.js";

// http://original.ompersonal.com.ar/ADVANCED/unit2/page3.htm
// http://original.ompersonal.com.ar/ADVANCED/unit2/page3.htm


export let adverbial_clauses_of_time = [
  ["Para el momento en que llegamos al cine, la película ya había comenzado. 🕒🎬", "By the time we arrived at the cinema, the movie had already started. 🕒🎬"],
  ["En el instante en que la puerta se abrió, todos aplaudieron. 👏🚪", "The moment the door opened, everyone applauded. 👏🚪"],
  ["Antes de que termine el día, quiero decirte cuánto te aprecio. 🌅❤️", "Before the day is over, I want to tell you how much I appreciate you. 🌅❤️"],
  ["Una vez que termines de estudiar, puedes unirte a nosotros en el parque. 📚🌳", "Once you finish studying, you can join us at the park. 📚🌳"],
  ["Después de la conferencia, iremos a cenar juntos. 🎤🍽️", "After the lecture, we'll go out for dinner together. 🎤🍽️"],
  ["Tan pronto como llegues a casa, te llamaré. 🏡📞", "As soon as you get home, I'll give you a call. 🏡📞"],
  ["Hasta que termine esta novela, no quiero que me molesten. 📖🤫", "Until I finish this novel, I don't want to be disturbed. 📖🤫"],
  ["En el instante en que cruzamos la línea de meta, celebramos nuestra victoria. 🏁🎉", "The moment we crossed the finish line, we celebrated our victory. 🏁🎉"],
  ["Antes de que comience el espectáculo, asegúrate de tener tus entradas. 🎭🎟️", "Before the show begins, make sure you have your tickets. 🎭🎟️"],
  ["Una vez que llegue el verano, planeo hacer un viaje. 🌞✈️", "Once summer arrives, I plan to take a trip. 🌞✈️"],
  ["Después de que terminemos esta tarea, podemos relajarnos. 📝😌", "After we finish this task, we can relax. 📝😌"],
  ["Tan pronto como me levante por la mañana, tomaré una taza de café. ☕🌞", "As soon as I get up in the morning, I'll have a cup of coffee. ☕🌞"],
  ["Hasta que conozcas a alguien en persona, es difícil evaluar su personalidad. 👥🤔", "Until you meet someone in person, it's hard to assess their personality. 👥🤔"],
  ["Antes de que llegue el invierno, debemos preparar nuestro jardín. 🍂🏡", "Before winter arrives, we need to prepare our garden. 🍂🏡"],
  ["Una vez que empieces a trabajar, verás cómo mejora tu experiencia. 💼📈", "Once you start working, you'll see how your experience improves. 💼📈"],
  ["Después de que terminemos esta reunión, habrá tiempo para preguntas. 📊❓", "After we finish this meeting, there will be time for questions. 📊❓"],
  ["Tan pronto como escuches la señal, puedes comenzar a correr. 🏁🏃", "As soon as you hear the signal, you can start running. 🏁🏃"],
  ["Hasta que te sientas seguro, seguiré apoyándote. 🤝💪", "Until you feel confident, I'll continue supporting you. 🤝💪"],
  ["Antes de que termine el año, espero haber cumplido mis metas. 📅🎯", "Before the year ends, I hope to have achieved my goals. 📅🎯"],
  ["Una vez que llegue la primavera, los árboles florecerán. 🌸🌳", "Once spring arrives, the trees will bloom. 🌸🌳"],
  ["Después de que lleguemos al destino, exploraremos la ciudad. 🗺️🏙️", "After we arrive at the destination, we'll explore the city. 🗺️🏙️"],
  ["Tan pronto como termine de cocinar, te llamaré para cenar. 🍳📞", "As soon as I finish cooking, I'll call you for dinner. 🍳📞"],
  ["Hasta que llegue el próximo tren, esperaremos en la estación. 🚂🕰️", "Until the next train arrives, we'll wait at the station. 🚂🕰️"],
  ["Antes de que termine la película, sabremos quién es el asesino. 🎥🔍", "Before the movie ends, we'll know who the killer is. 🎥🔍"],
  ["Una vez que aprendas a nadar, te sentirás más seguro en el agua. 🏊👍", "Once you learn to swim, you'll feel more confident in the water. 🏊👍"],
  ["Después de que termines de leer este libro, discutiremos la trama. 📚🗣️", "After you finish reading this book, we'll discuss the plot. 📚🗣️"],
];


document.getElementById('adverbial_clauses_of_time').addEventListener("click", (e) => {
  let btn_test = document.getElementById("adverbial_clauses_of_time");
  if (!lista_all.includes(adverbial_clauses_of_time)) {
    lista_all.push(adverbial_clauses_of_time);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(adverbial_clauses_of_time);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm