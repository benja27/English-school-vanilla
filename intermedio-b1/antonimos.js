import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let antonimos = [
  ["Este libro es muy ABURRIDO. 📖😞", "This book is very BORING. 📖😞"],
  ["El clima hoy está FRÍO y húmedo. 🌧️❄️", "The weather today is WARM and dry. 🌧️❄️"],
  ["Ella es muy ORGANIZADA en su trabajo. 👩‍💼🗂️", "She is very DISORGANIZED in her work. 👩‍💼🗂️"],
  ["Este restaurante es CARO pero delicioso. 🍽️💰", "This restaurant is CHEAP but delicious. 🍽️💰"],
  ["Mi gato es MUY ACTIVO y juguetón. 🐱🏃", "My cat is VERY LAZY and sleepy. 🐱😴"],
  ["El parque está LLENO de gente hoy. 🏞️👫", "The park is EMPTY today. 🏞️👫"],
  ["Este coche es MUY RÁPIDO. 🚗💨", "This car is VERY SLOW. 🚗🐢"],
  ["Mi hermano es MUY ORDENADO con su habitación. 👦🧹", "My brother is VERY MESSY with his room. 👦🧹"],
  ["Esta película es MUY TRISTE. 🎥😢", "This movie is VERY HAPPY. 🎥😄"],
  ["El agua está CALIENTE y relajante. 🌊☀️", "The water is COLD and refreshing. 🌊❄️"],
  ["Este restaurante es MUY RUIDOSO. 🍽️🔊", "This restaurant is VERY QUIET. 🍽️🤫"],
  ["Mi hermano es MUY DELGADO. 👦🏋️‍♂️", "My brother is VERY OVERWEIGHT. 👦🍔"],
  ["El café es MUY FUERTE. ☕💪", "The coffee is VERY WEAK. ☕🐌"],
  ["Este teléfono es MUY MODERNO. 📱🌟", "This phone is VERY OLD. 📱🦕"],
  ["Mi perro es MUY AMIGABLE. 🐶😊", "My dog is VERY AGGRESSIVE. 🐶😡"],
  ["Ella es MUY GENEROSA. 👩🤝", "She is VERY SELFISH. 👩💔"],
  ["Este lugar es MUY LIMPIO. 🏡🧽", "This place is VERY DIRTY. 🏡🚮"],
  ["El niño es MUY EDUCADO. 👦📚", "The boy is VERY RUDE. 👦😡"],
  ["El concierto fue MUY EMOCIONANTE. 🎶🤩", "The concert was VERY BORING. 🎶😒"],
  ["Este coche es MUY SEGURO. 🚗🛡️", "This car is VERY DANGEROUS. 🚗☠️"],
  ["La comida es MUY DELICIOSA. 🍕😋", "The food is VERY TASTELESS. 🍕😖"],
  ["Este perfume es MUY DULCE. 🌸🍬", "This perfume is VERY SPICY. 🌸🌶️"],
  ["El niño es MUY PACIENTE. 👦⌛", "The boy is VERY IMPATIENT. 👦⏳"],
  ["Este lugar es MUY TRANQUILO. 🏞️🕊️", "This place is VERY NOISY. 🏞️📢"],
  ["La película es MUY INTERESANTE. 🎥🤓", "The movie is VERY BORING. 🎥😴"],
  ["Este juego es MUY DIVERTIDO. 🎮😄", "This game is VERY BORING. 🎮😒"],
  ["Ella es MUY AMABLE. 👩🤗", "She is VERY MEAN. 👩😡"],
  ["Este proyecto es MUY FÁCIL. 📊👍", "This project is VERY DIFFICULT. 📊👎"],
  ["El cuaderno es MUY LIGERO. 📒🎈", "The notebook is VERY HEAVY. 📒💪"],
  ["Esta música es MUY ALEGRE. 🎵😃", "This music is VERY SAD. 🎵😢"]
];

document.getElementById('antonimos').addEventListener("click", (e) => {
  let btn_test = document.getElementById("antonimos");
  if (!lista_all.includes(antonimos)) {
    lista_all.push(antonimos);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(antonimos);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// http://original.ompersonal.com.ar/INTERMEDIATE/unit4/page3.htm