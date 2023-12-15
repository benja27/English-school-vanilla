// http://original.ompersonal.com.ar/INTERMEDIATE/unit3/page5.htm

import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let countable_uncountable_nouns = [
  ["Hay demasiados libros en la estantería. 📚", "There are too many books on the shelf. 📚"],
  ["No hay suficientes sillas para todos. 🪑", "There aren't enough chairs for everyone. 🪑"],
  ["Necesitamos más platos para la cena. 🍽️", "We need more plates for dinner. 🍽️"],
  ["Debería haber menos estudiantes en la clase. 👩‍🎓👨‍🎓", "There should be fewer students in the class. 👩‍🎓👨‍🎓"],
  ["Hay demasiada comida en la nevera. 🍔", "There is too much food in the fridge. 🍔"],
  ["No hay suficiente agua en la botella. 💧", "There isn't enough water in the bottle. 💧"],
  ["Necesitamos más tiempo para terminar el proyecto. ⏰", "We need more time to finish the project. ⏰"],
  ["Debería haber menos azúcar en el café. ☕", "There should be less sugar in the coffee. ☕"],
  ["Hay demasiados niños en el parque. 👦👧", "There are too many children in the park. 👦👧"],
  ["No hay suficientes lápices en la caja. 📝", "There aren't enough pencils in the box. 📝"],
  ["Necesitamos más galletas para la fiesta. 🍪", "We need more cookies for the party. 🍪"],
  ["Debería haber menos perros en la calle. 🐕", "There should be fewer dogs on the street. 🐕"],
  ["Hay demasiadas flores en el jardín. 🌼", "There are too many flowers in the garden. 🌼"],
  ["No hay suficiente leche en la nevera. 🥛", "There isn't enough milk in the fridge. 🥛"],
  ["Necesitamos más amigos para el juego. 👫", "We need more friends for the game. 👫"],
  ["Debería haber menos coches en el estacionamiento. 🚗", "There should be fewer cars in the parking lot. 🚗"],
  ["Hay demasiado ruido en la calle. 📢", "There is too much noise on the street. 📢"],
  ["No hay suficiente espacio en la mochila. 🎒", "There isn't enough space in the backpack. 🎒"],
  ["Necesitamos más café para la reunión. ☕", "We need more coffee for the meeting. ☕"],
  ["Debería haber menos estudiantes en el autobús. 🚌👩‍🎓👨‍🎓", "There should be fewer students on the bus. 🚌👩‍🎓👨‍🎓"],
  ["Hay demasiada basura en la calle. 🗑️", "There is too much trash on the street. 🗑️"],
  ["No hay suficiente tiempo para ver todas las atracciones. ⏳", "There isn't enough time to see all the attractions. ⏳"],
  ["Necesitamos más información sobre el tema. ℹ️", "We need more information about the topic. ℹ️"],
  ["Debería haber menos ruido en la biblioteca. 📚🤫", "There should be less noise in the library. 📚🤫"],
  ["Hay demasiados estudiantes en el gimnasio. 🏋️‍♀️", "There are too many students in the gym. 🏋️‍♀️"],
  ["No hay suficientes platos limpios en la cocina. 🍽️🧼", "There aren't enough clean plates in the kitchen. 🍽️🧼"],
  ["Necesitamos más tiempo para explorar la ciudad. ⌛", "We need more time to explore the city. ⌛"],
  ["Debería haber menos tráfico en la carretera. 🚗🚕", "There should be less traffic on the road. 🚗🚕"],
  ["Hay demasiada ropa en el armario. 👚👖", "There is too much clothing in the closet. 👚👖"],
  ["No hay suficiente pintura para terminar el cuadro. 🎨", "There isn't enough paint to finish the painting. 🎨"],
  ["Necesitamos más música para la fiesta. 🎶🎉", "We need more music for the party. 🎶🎉"],
  ["Debería haber menos humo en el aire. 🌫️", "There should be less smoke in the air. 🌫️"]
];

document.getElementById('countable_uncountable_nouns').addEventListener("click", (e) => {
  let btn_test = document.getElementById("countable_uncountable_nouns");
  if (!lista_all.includes(countable_uncountable_nouns)) {
    lista_all.push(countable_uncountable_nouns);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(countable_uncountable_nouns);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm