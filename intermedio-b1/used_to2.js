import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let used_to = [
  ["Solíamos ir al parque todos los domingos. 🌳", "We used to go to the park every Sunday. 🌳"],
  ["¿Solías tocar el piano cuando eras más joven? 🎹", "Did you used to play the piano when you were younger? 🎹"],
  ["Antes, solía comer hamburguesas todos los días. 🍔", "I used to eat hamburgers every day before. 🍔"],
  ["Solían vivir en una casa antigua. 🏡", "They used to live in an old house. 🏡"],
  ["¿Solías ver esa serie de televisión cuando era niño? 📺", "Did you used to watch that TV series when you were a child? 📺"],
  ["Él solía ser mi mejor amigo en la escuela. 👫", "He used to be my best friend in school. 👫"],
  ["Solíamos nadar en el lago cada verano. 🏊‍♀️", "We used to swim in the lake every summer. 🏊‍♀️"],
  ["¿Solías visitar a tus abuelos los fines de semana? 👵👴", "Did you used to visit your grandparents on weekends? 👵👴"],
  ["Ella solía cantar en un coro. 🎤", "She used to sing in a choir. 🎤"],
  ["Solíamos jugar al escondite en el jardín. 🌿", "We used to play hide and seek in the garden. 🌿"],
  ["¿Solías estudiar hasta tarde por la noche? 📚", "Did you used to study late at night? 📚"],
  ["Él solía trabajar como camarero en ese restaurante. 🍽️", "He used to work as a waiter at that restaurant. 🍽️"],
  ["Solíamos ir de excursión a la montaña todos los veranos. 🏞️", "We used to go hiking in the mountains every summer. 🏞️"],
  ["¿Solías montar en bicicleta en tu infancia? 🚴", "Did you used to ride a bike in your childhood? 🚴"],
  ["Ella solía hablar francés con fluidez. 🇫🇷", "She used to speak French fluently. 🇫🇷"],
  ["Solíamos comprar helado después de la escuela. 🍦", "We used to buy ice cream after school. 🍦"],
  ["¿Solías viajar mucho antes de tener hijos? 🌍", "Did you used to travel a lot before having kids? 🌍"],
  ["Él solía coleccionar sellos cuando era joven. 📬", "He used to collect stamps when he was young. 📬"],
  ["Solíamos ver las estrellas desde el techo de la casa. 🌟", "We used to watch the stars from the rooftop of the house. 🌟"],
  ["¿Solías hacer ejercicio regularmente? 💪", "Did you used to exercise regularly? 💪"],
  ["Ella solía ser una excelente cocinera. 🍳", "She used to be an excellent cook. 🍳"],
  ["Solíamos acampar en el bosque en las vacaciones. ⛺", "We used to camp in the forest during vacations. ⛺"],
  ["¿Solías jugar videojuegos con tus amigos? 🎮", "Did you used to play video games with your friends? 🎮"],
  ["Él solía escribir poemas cuando era joven. 📝", "He used to write poems when he was young. 📝"],
  ["Solíamos celebrar fiestas de cumpleaños en casa. 🎉", "We used to have birthday parties at home. 🎉"],
  ["¿Solías estudiar mucho para los exámenes finales? 📖", "Did you used to study a lot for the final exams? 📖"],
  ["Ella solía ser la capitana del equipo de fútbol. ⚽", "She used to be the captain of the soccer team. ⚽"],
  ["Solíamos visitar a nuestros primos en verano. 👦👧", "We used to visit our cousins in the summer. 👦👧"],
  ["¿Solían tocar música en vivo en ese bar? 🎵", "Did they used to play live music at that bar? 🎵"],
  ["Él solía ser un actor famoso en los años 90. 🎬", "He used to be a famous actor in the '90s. 🎬"],
  ["Solíamos tener una casa en la playa. 🏖️", "We used to have a beach house. 🏖️"]
];

document.getElementById('used_to').addEventListener("click", (e) => {
  let btn_test = document.getElementById("used_to");
  if (!lista_all.includes(used_to)) {
    lista_all.push(used_to);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(used_to);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm