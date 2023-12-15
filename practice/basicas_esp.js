import { lista_all } from "../sentences.js";

export let basicas_esp = [
  "Yo estudio matemáticas. 😊",
  "Tú trabajas duro. 😅",
  "Ella ama el chocolate. 🍫❤️",
  "Él cierra la puerta. 🚪",
  "Ellos viajan a menudo. 🌍✈️",
  "Nosotros vivimos en una ciudad grande. 🏙️",
  "Tú abres el libro. 📖",
  "Yo veo un arcoíris. 🌈",
  "Ella viene a casa temprano. 🏡",
  "Él va al gimnasio. 💪",
  "Ellos saben la respuesta. 🧠❓",
  "Nosotros comenzamos el proyecto. 🚀",
  "Tú terminas tu comida. 🍽️",
  "Él dice hola. 👋",
  "Yo compro comestibles. 🛒",
  "Ellos beben café. ☕",
  "Ella come sushi. 🍣",
  "Nosotros nos sentimos felices. 😃",
  "Tú vuelas a París. ✈️🗼",
  "Yo olvido su nombre. 🤔",
  "Ella regala un regalo. 🎁",
  "Él escucha música. 🎵",
  "Ellos pierden el juego. 😔",
  "Nosotros preguntamos una pregunta. ❓",
  "Tú respondes el teléfono. 📞",
  "Ella ayuda a un amigo. 🤝",
  "Él toma una foto. 📸",
  "Ellos pagan la cuenta. 💵",
  "Yo duermo en paz. 😴",
  "Ella habla español. 🇪🇸",
  "Nosotros hacemos una torta. 🍰",
  "Tú encuentras una llave. 🔑",
  "Él piensa profundamente. 💭",
  "Ellos cuentan una historia. 📖🗣️",
  "Nosotros mostramos un truco de magia. 🎩✨",
  "Tú sales de la fiesta. 🎉👋",
  "Ella se pone el abrigo. 🧥",
  "Él trae flores. 💐",
  "Ellos comienzan la carrera. 🏁🏃‍♂️",
  "Yo escribo una carta. 📝",
  "Tú corres rápidamente. 🏃‍♀️🏃‍♂️",
  "Ella se sienta en el banco. 🪑",
  "Él lee una novela. 📚",
  "Ellos cultivan verduras. 🌱🥕",
  "Nosotros entendemos el problema. 🤔💡",
  "Tú luces hermosa. 💁‍♀️💅",
  "Él enciende la luz. 💡"
];




document.getElementById('lista2').addEventListener("click", (e) => {
  let btn_test = document.getElementById("lista2");
  if (!lista_all.includes(basicas_esp)) {
    lista_all.push(basicas_esp);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(basicas_esp);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});
