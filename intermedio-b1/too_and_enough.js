import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let too_and_enough = [
  ["El café está demasiado caliente para beberlo ahora. ☕🔥", "The coffee is too hot to drink right now. ☕🔥"],
  ["Esta camisa es lo suficientemente grande para mí. 👕", "This shirt is big enough for me. 👕"],
  ["La película fue demasiado larga y aburrida. 🎬😞", "The movie was too long and boring. 🎬😞"],
  ["No tengo suficiente dinero para comprar ese coche. 💰🚗", "I don't have enough money to buy that car. 💰🚗"],
  ["El libro es demasiado pesado para llevarlo todo el día. 📚💼", "The book is too heavy to carry all day. 📚💼"],
  ["¿Es este plato lo suficientemente picante para ti? 🌶️🔥", "Is this dish spicy enough for you? 🌶️🔥"],
  ["El perro es demasiado pequeño para saltar la cerca. 🐶🚧", "The dog is too small to jump over the fence. 🐶🚧"],
  ["Ella es lo suficientemente inteligente para resolver el problema. 👩‍🏫💡", "She is smart enough to solve the problem. 👩‍🏫💡"],
  ["El concierto fue demasiado ruidoso para mis oídos. 🎶🔊👂", "The concert was too loud for my ears. 🎶🔊👂"],
  ["Necesitas estudiar más, no eres lo suficientemente preparado. 📖📚", "You need to study more; you're not prepared enough. 📖📚"],
  ["La sopa está demasiado caliente para comerla ahora. 🍲🔥", "The soup is too hot to eat right now. 🍲🔥"],
  ["¿Tienes suficiente tiempo para terminar la tarea? ⌛", "Do you have enough time to finish the homework? ⌛"],
  ["El coche es demasiado caro para comprarlo. 🚗💰", "The car is too expensive to buy. 🚗💰"],
  ["¿Puedes hablar lo suficientemente alto para que te oigan? 🗣️👂", "Can you speak loud enough for them to hear you? 🗣️👂"],
  ["Ella es demasiado joven para conducir un automóvil. 👧🚗", "She is too young to drive a car. 👧🚗"],
  ["¿El café está lo suficientemente frío para beberlo? ☕❄️", "Is the coffee cold enough to drink? ☕❄️"],
  ["El equipo no es lo suficientemente fuerte para ganar el campeonato. 🏆💪", "The team isn't strong enough to win the championship. 🏆💪"],
  ["Ella es demasiado amable para decir algo malo. 👩‍🦰🙌", "She is too kind to say anything mean. 👩‍🦰🙌"],
  ["¿Este vestido es lo suficientemente elegante para la fiesta? 👗🎉", "Is this dress elegant enough for the party? 👗🎉"],
  ["Mi amigo no es lo suficientemente alto para montar en esta atracción. 🎢👫", "My friend isn't tall enough to ride this ride. 🎢👫"],
  ["¿La pizza es lo suficientemente grande para todos? 🍕👨‍👩‍👧‍👦", "Is the pizza big enough for everyone? 🍕👨‍👩‍👧‍👦"],
  ["La comida es demasiado picante para mi gusto. 🌶️😅", "The food is too spicy for my taste. 🌶️😅"],
  ["¿Tienes suficiente energía para correr un maratón? 🏃‍♂️🏅", "Do you have enough energy to run a marathon? 🏃‍♂️🏅"],
  ["El vestido es demasiado caro para mi presupuesto. 👗💸", "The dress is too expensive for my budget. 👗💸"],
  ["¿La maleta es lo suficientemente grande para todas tus cosas? 🧳👚👖", "Is the suitcase big enough for all your things? 🧳👚👖"],
  ["Mi hermano no es lo suficientemente alto para jugar al baloncesto. 🏀👦", "My brother isn't tall enough to play basketball. 🏀👦"],
  ["¿La película es lo suficientemente interesante como para verla? 🎥🤔", "Is the movie interesting enough to watch? 🎥🤔"],
  ["La música está demasiado alta para concentrarme. 🎶🔊🧠", "The music is too loud for me to concentrate. 🎶🔊🧠"],
  ["¿Tienes suficiente experiencia para este trabajo? 👨‍💼💼", "Do you have enough experience for this job? 👨‍💼💼"],
  ["El restaurante es demasiado lejos para caminar. 🍽️🏞️", "The restaurant is too far to walk to. 🍽️🏞️"]
];

document.getElementById('too_and_enough').addEventListener("click", (e) => {
  let btn_test = document.getElementById("too_and_enough");
  if (!lista_all.includes(too_and_enough)) {
    lista_all.push(too_and_enough);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(too_and_enough);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// parte 4

// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm