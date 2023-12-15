import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let expressing_desires = [
  ["Ojalá tuviera más tiempo libre para viajar. ⏰✈️", "I wish I had more free time to travel. ⏰✈️"],
  ["Desearía que mi coche fuera más eficiente en el consumo de combustible. 🚗💨", "I wish my car were more fuel-efficient. 🚗💨"],
  ["Ojalá mi jefe fuera más comprensivo con mi horario. 👨‍💼🕒", "I wish my boss were more understanding about my schedule. 👨‍💼🕒"],
  ["Desearía que este examen no fuera tan difícil. 📚😫", "I wish this exam weren't so difficult. 📚😫"],
  ["Ojalá no hiciera tanto calor aquí. ☀️🔥", "I wish it weren't so hot here. ☀️🔥"],
  ["Desearía que ella supiera cómo cocinar. 👩‍🍳😞", "I wish she knew how to cook. 👩‍🍳😞"],
  ["Ojalá mi casa fuera más grande. 🏠📏", "I wish my house were bigger. 🏠📏"],
  ["Desearía que este restaurante sirviera comida vegetariana. 🥗🍔", "I wish this restaurant served vegetarian food. 🥗🍔"],
  ["Ojalá mis amigos vivieran más cerca. 👫🏡", "I wish my friends lived closer. 👫🏡"],
  ["Desearía que esta película no fuera tan aburrida. 🎬😕", "I wish this movie weren't so boring. 🎬😕"],
  ["Ojalá no lloviera tanto en esta ciudad. 🌧️☔", "I wish it didn't rain so much in this city. 🌧️☔"],
  ["Desearía que él no fuera tan impuntual. ⌛🙄", "I wish he weren't so unpunctual. ⌛🙄"],
  ["Ojalá mi trabajo no fuera tan estresante. 👩‍💼😓", "I wish my job weren't so stressful. 👩‍💼😓"],
  ["Desearía que esta canción fuera más corta. 🎵⏳", "I wish this song were shorter. 🎵⏳"],
  ["Ojalá no hubiera tanto tráfico en esta ciudad. 🚗🚦", "I wish there wasn't so much traffic in this city. 🚗🚦"],
  ["Desearía que este hotel tuviera una piscina. 🏨🏊", "I wish this hotel had a pool. 🏨🏊"],
  ["Ojalá no fuera tan difícil aprender un nuevo idioma. 🗣️📚", "I wish it weren't so difficult to learn a new language. 🗣️📚"],
  ["Desearía que mis padres fueran más comprensivos. 👨‍👩‍👧‍👦😔", "I wish my parents were more understanding. 👨‍👩‍👧‍👦😔"],
  ["Ojalá no hubiera tantos problemas en el mundo. 🌍🌐", "I wish there weren't so many problems in the world. 🌍🌐"],
  ["Desearía que esta conferencia no fuera tan larga. 🎤⏳", "I wish this conference weren't so long. 🎤⏳"],
  ["Ojalá no hiciera tanto frío en invierno. ❄️🧣", "I wish it weren't so cold in winter. ❄️🧣"],
  ["Desearía que mi equipo de fútbol ganara más partidos. ⚽🥅", "I wish my soccer team won more matches. ⚽🥅"],
  ["Ojalá no hubiera tantos exámenes esta semana. 📝📚", "I wish there weren't so many exams this week. 📝📚"],
  ["Desearía que esta playa no estuviera tan llena de gente. 🏖️👥", "I wish this beach weren't so crowded. 🏖️👥"],
  ["Ojalá no fuera tan caro viajar en avión. ✈️💸", "I wish it weren't so expensive to travel by plane. ✈️💸"],
  ["Desearía que mi hermana no fuera tan ruidosa. 👧🔊", "I wish my sister weren't so noisy. 👧🔊"],
  ["Ojalá no viviera tan lejos de la ciudad. 🏞️🌆", "I wish I didn't live so far from the city. 🏞️🌆"],
  ["Desearía que esta tienda tuviera más variedad de productos. 🛒🛍️", "I wish this store had a greater variety of products. 🛒🛍️"],
  ["Ojalá no fuera tan tarde para cambiar mis planes. 🕰️🔄", "I wish it weren't too late to change my plans. 🕰️🔄"],
  ["Desearía que este parque estuviera más limpio. 🌳🗑️", "I wish this park were cleaner. 🌳🗑️"],
  ["Ojalá no fuera tan difícil conseguir boletos para el concierto. 🎫🎶", "I wish it weren't so hard to get tickets for the concert. 🎫🎶"]
];

document.getElementById('expressing_desires').addEventListener("click", (e) => {
  let btn_test = document.getElementById("expressing_desires");
  if (!lista_all.includes(expressing_desires)) {
    lista_all.push(expressing_desires);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(expressing_desires);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm