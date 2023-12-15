import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let be_used_to = [
  ["Mis padres están acostumbrados a levantarse temprano. 😴", "My parents are used to getting up early. 😴"],
  ["Él está acostumbrado a conducir largas distancias. 🚗", "He is used to driving long distances. 🚗"],
  ["Ella está acostumbrada a trabajar largas horas. 💼", "She is used to working long hours. 💼"],
  ["Los niños están acostumbrados a comer verduras. 🥦", "The kids are used to eating vegetables. 🥦"],
  ["Estoy acostumbrado a los días soleados. ☀️", "I am used to sunny days. ☀️"],
  ["Ella está acostumbrada a estudiar en la biblioteca. 📚", "She is used to studying in the library. 📚"],
  ["Estamos acostumbrados a caminar mucho en la ciudad. 🚶‍♂️", "We are used to walking a lot in the city. 🚶‍♂️"],
  ["Mi amigo está acostumbrado a trabajar en equipo. 👫", "My friend is used to working in a team. 👫"],
  ["Ella está acostumbrada a hacer ejercicio todas las mañanas. 🏋️‍♀️", "She is used to exercising every morning. 🏋️‍♀️"],
  ["Los turistas están acostumbrados a probar comida local. 🍽️", "Tourists are used to trying local food. 🍽️"],
  ["Él está acostumbrado a viajar por trabajo. 🌍", "He is used to traveling for work. 🌍"],
  ["Mi hermana está acostumbrada a usar tacones altos. 👠", "My sister is used to wearing high heels. 👠"],
  ["Estoy acostumbrado a hablar en público. 🗣️", "I am used to speaking in public. 🗣️"],
  ["Ella está acostumbrada a tomar té antes de dormir. 🍵", "She is used to drinking tea before bedtime. 🍵"],
  ["Mi abuela está acostumbrada a tejer en su tiempo libre. 🧶", "My grandmother is used to knitting in her free time. 🧶"],
  ["Están acostumbrados a ver películas los fines de semana. 🍿", "They are used to watching movies on weekends. 🍿"],
  ["Ella está acostumbrada a nadar en el mar. 🏊‍♀️", "She is used to swimming in the sea. 🏊‍♀️"],
  ["Mi perro está acostumbrado a dormir en mi cama. 🐶", "My dog is used to sleeping on my bed. 🐶"],
  ["Estamos acostumbrados a usar el transporte público. 🚇", "We are used to using public transportation. 🚇"],
  ["Él está acostumbrado a cocinar cenas deliciosas. 🍽️", "He is used to cooking delicious dinners. 🍽️"],
  ["Mi primo está acostumbrado a jugar videojuegos toda la noche. 🎮", "My cousin is used to playing video games all night. 🎮"],
  ["Estoy acostumbrado a escuchar música mientras trabajo. 🎶", "I am used to listening to music while I work. 🎶"],
  ["Ella está acostumbrada a visitar a sus abuelos los domingos. 👵👴", "She is used to visiting her grandparents on Sundays. 👵👴"],
  ["Mis amigos están acostumbrados a acampar en el bosque. ⛺", "My friends are used to camping in the forest. ⛺"],
  ["Están acostumbrados a celebrar su aniversario cada año. 🎉", "They are used to celebrating their anniversary every year. 🎉"],
  ["Ella está acostumbrada a hablar varios idiomas. 🌍", "She is used to speaking multiple languages. 🌍"],
  ["Mi hermano está acostumbrado a estudiar hasta tarde. 📖", "My brother is used to studying late. 📖"],
  ["Estoy acostumbrado a ver películas de terror. 🎬", "I am used to watching horror movies. 🎬"],
  ["Ella está acostumbrada a bailar salsa. 💃", "She is used to dancing salsa. 💃"]
];



document.getElementById('be_used_to').addEventListener("click", (e) => {
  let btn_test = document.getElementById("be_used_to");
  if (!lista_all.includes(be_used_to)) {
    lista_all.push(be_used_to);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(be_used_to);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm