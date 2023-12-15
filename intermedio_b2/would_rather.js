import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let would_rather = [
  ["Preferiría quedarme en casa esta noche. 😴", "I would rather stay home tonight. 😴"],
  ["¿Preferirías café o té? ☕", "Would you rather have coffee or tea? ☕"],
  ["Ella preferiría ir al cine en lugar de al teatro. 🎬", "She would rather go to the cinema instead of the theater. 🎬"],
  ["¿Preferirías que te llame más tarde? 📞", "Would you rather I call you later? 📞"],
  ["Preferiría haber estudiado más para el examen. 📚", "I would rather have studied more for the exam. 📚"],
  ["¿Preferirías vivir en la ciudad o en el campo? 🏙️", "Would you rather live in the city or in the countryside? 🏙️"],
  ["Ella preferiría haber viajado en avión en lugar de en tren. ✈️", "She would rather have traveled by plane instead of by train. ✈️"],
  ["¿Preferirías nadar en el mar o en la piscina? 🏊", "Would you rather swim in the sea or in the pool? 🏊"],
  ["Preferiría haber comido pizza en lugar de hamburguesa. 🍕", "I would rather have eaten pizza instead of a hamburger. 🍕"],
  ["¿Preferirías leer un libro o ver una película? 📖", "Would you rather read a book or watch a movie? 📖"],
  ["Él preferiría haber llegado temprano a la reunión. ⏰", "He would rather have arrived early to the meeting. ⏰"],
  ["¿Preferirías aprender un nuevo idioma o tocar un instrumento musical? 🎶", "Would you rather learn a new language or play a musical instrument? 🎶"],
  ["Ella preferiría haber comprado el vestido azul en lugar del rojo. 👗", "She would rather have bought the blue dress instead of the red one. 👗"],
  ["¿Preferirías viajar en coche o en tren? 🚗", "Would you rather travel by car or by train? 🚗"],
  ["Preferiría haber ido al concierto anoche. 🎵", "I would rather have gone to the concert last night. 🎵"],
  ["¿Preferirías trabajar en equipo o de forma independiente? 🤝", "Would you rather work as a team or independently? 🤝"],
  ["Él preferiría haber estudiado informática en la universidad. 💻", "He would rather have studied computer science at university. 💻"],
  ["¿Preferirías ver la puesta de sol en la playa o en la montaña? 🌅", "Would you rather watch the sunset at the beach or in the mountains? 🌅"],
  ["Preferiría haber tomado el vuelo de la mañana. ✈️", "I would rather have taken the morning flight. ✈️"],
  ["¿Preferirías hacer ejercicio en el gimnasio o al aire libre? 🏋️‍♀️", "Would you rather exercise at the gym or outdoors? 🏋️‍♀️"],
  ["Ella preferiría haber conocido a su cantante favorito. 🎤", "She would rather have met her favorite singer. 🎤"],
  ["¿Preferirías cenar en casa o en un restaurante? 🍽️", "Would you rather have dinner at home or at a restaurant? 🍽️"],
  ["Preferiría haber visto esa película en el cine. 🎦", "I would rather have seen that movie in the cinema. 🎦"],
  ["¿Preferirías estudiar matemáticas o historia? 📊", "Would you rather study mathematics or history? 📊"],
  ["Él preferiría haber llegado primero a la fiesta. 🎉", "He would rather have arrived first at the party. 🎉"],
];

document.getElementById('would_rather').addEventListener("click", (e) => {
  let btn_test = document.getElementById("would_rather");
  if (!lista_all.includes(would_rather)) {
    lista_all.push(would_rather);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(would_rather);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm