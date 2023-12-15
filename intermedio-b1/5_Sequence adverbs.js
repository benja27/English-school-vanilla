import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let sequence_adverbs = [
  ["Primero, despierto y me estiro. 🌅🙆", "First, I wake up and stretch. 🌅🙆"],
  ["Luego, me cepillo los dientes. 🦷🚿", "Then, I brush my teeth. 🦷🚿"],
  ["Después, tomo una ducha. 🚿🛁", "Afterwards, I take a shower. 🚿🛁"],
  ["A continuación, me visto para el trabajo. 👔👖", "Next, I get dressed for work. 👔👖"],
  ["Más tarde, desayuno. 🍳☕", "Later, I have breakfast. 🍳☕"],
  ["Finalmente, salgo de casa. 🚪🚗", "Finally, I leave the house. 🚪🚗"],
  ["¿Primero, te lavas las manos antes de comer? 🤲❓", "First, do you wash your hands before eating? 🤲❓"],
  ["¿Luego, revisas tu correo electrónico? 📧❓", "Then, do you check your email? 📧❓"],
  ["¿Después, llamas a tu amigo? 📞❓", "Do you call your friend afterwards? 📞❓"],
  ["¿A continuación, estudias para el examen? 📚❓", "Do you study for the exam next? 📚❓"],
  ["¿Más tarde, sales a caminar? 🚶‍♀️❓", "Do you go for a walk later? 🚶‍♀️❓"],
  ["¿Finalmente, ves una película? 🎥❓", "Do you watch a movie finally? 🎥❓"],
  ["Primero, mezclo los ingredientes. 🍳🥣", "First, I mix the ingredients. 🍳🥣"],
  ["Luego, caliento la sartén. 🍳🔥", "Then, I heat the pan. 🍳🔥"],
  ["Después, vierto la mezcla en la sartén. 🍳🥞", "Afterwards, I pour the mixture into the pan. 🍳🥞"],
  ["A continuación, cocino hasta que esté dorado. 🍳👩‍🍳", "Next, I cook until it's golden brown. 🍳👩‍🍳"],
  ["Más tarde, lo sirvo en un plato. 🍳🍽️", "Later, I serve it on a plate. 🍳🍽️"],
  ["Finalmente, lo disfruto. 🍳😋", "Finally, I enjoy it. 🍳😋"],
  ["¿Primero, preparas café por la mañana? ☕❓", "First, do you make coffee in the morning? ☕❓"],
  ["¿Luego, lees las noticias en línea? 📰❓", "Then, do you read the news online? 📰❓"],
  ["¿Después, vas al gimnasio? 💪❓", "Do you go to the gym afterwards? 💪❓"],
  ["¿A continuación, almuerzas en el trabajo? 🥪❓", "Do you have lunch at work next? 🥪❓"],
  ["¿Más tarde, regresas a casa? 🏠❓", "Do you go back home later? 🏠❓"],
  ["¿Finalmente, ves tu programa de televisión favorito? 📺❓", "Do you watch your favorite TV show finally? 📺❓"],
];

document.getElementById('sequence_adverbs').addEventListener("click", (e) => {
  let btn_test = document.getElementById("sequence_adverbs");
  if (!lista_all.includes(sequence_adverbs)) {
    lista_all.push(sequence_adverbs);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(sequence_adverbs);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});