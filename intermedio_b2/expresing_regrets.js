import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let expresing_regrets = [
  ["Debería haber estudiado más para el examen. 😔", "I should have studied more for the exam. 😔"],
  ["Ojalá no hubiera perdido la oportunidad. 😞", "I wish I hadn't missed the opportunity. 😞"],
  ["Si hubiera ahorrado dinero, podría haber viajado más. 💸", "If I had saved money, I could have traveled more. 💸"],
  ["Me arrepiento de no haber aprendido a tocar un instrumento. 🎶", "I regret not having learned to play a musical instrument. 🎶"],
  ["No debería haber comido tanto postre. 🍰", "I shouldn't have eaten so much dessert. 🍰"],
  ["Ojalá hubiera dicho la verdad desde el principio. 🙊", "I wish I had told the truth from the beginning. 🙊"],
  ["Si no hubiera perdido las llaves, no estaría aquí. 🔑", "If I hadn't lost the keys, I wouldn't be here. 🔑"],
  ["Debería haber estudiado más idiomas en la escuela. 📚", "I should have studied more languages in school. 📚"],
  ["Me arrepiento de no haber pasado más tiempo con mi familia. 👨‍👩‍👧‍👦", "I regret not having spent more time with my family. 👨‍👩‍👧‍👦"],
  ["Ojalá no hubiera comprado ese coche tan caro. 🚗", "I wish I hadn't bought that expensive car. 🚗"],
  ["Si hubiera llegado a tiempo, habría conocido al presidente. 🤝", "If I had arrived on time, I would have met the president. 🤝"],
  ["Debería haber estudiado más en la universidad. 🎓", "I should have studied more in college. 🎓"],
  ["Me arrepiento de no haber viajado cuando era más joven. ✈️", "I regret not having traveled when I was younger. ✈️"],
  ["Ojalá no hubiera perdido esa gran oportunidad laboral. 💼", "I wish I hadn't missed that great job opportunity. 💼"],
  ["Si hubiera sabido antes, no habría cometido ese error. 🙁", "If I had known earlier, I wouldn't have made that mistake. 🙁"],
  ["Debería haber cuidado mejor de mi salud. 🏥", "I should have taken better care of my health. 🏥"],
  ["Me arrepiento de no haber aprendido a nadar. 🏊‍♂️", "I regret not having learned to swim. 🏊‍♂️"],
  ["Ojalá no hubiera gastado tanto dinero en cosas innecesarias. 💰", "I wish I hadn't spent so much money on unnecessary things. 💰"],
  ["Si hubiera sido más organizado, habría completado más proyectos. 📊", "If I had been more organized, I would have completed more projects. 📊"],
  ["Debería haber escuchado a mis padres cuando me aconsejaron. 👪", "I should have listened to my parents when they advised me. 👪"],
  ["Me arrepiento de no haber tomado más fotos durante mi viaje. 📸", "I regret not having taken more photos during my trip. 📸"],
  ["Ojalá no hubiera dicho esas palabras hirientes. 😞", "I wish I hadn't said those hurtful words. 😞"],
  ["Si hubiera estudiado más gramática, habría hablado mejor inglés. 📖", "If I had studied more grammar, I would have spoken better English. 📖"],
  ["Debería haber sido más paciente con mis compañeros de trabajo. ⌛", "I should have been more patient with my colleagues. ⌛"],
  ["Me arrepiento de no haber ayudado a esa persona en apuros. 🤝", "I regret not having helped that person in need. 🤝"],
  ["Ojalá no hubiera discutido con mi mejor amigo. 🤬", "I wish I hadn't argued with my best friend. 🤬"],
  ["Si hubiera practicado más deportes, habría estado en mejor forma. 🏋️‍♀️", "If I had played more sports, I would have been in better shape. 🏋️‍♀️"],
  ["Debería haber estudiado más para el examen de conducir. 🚗", "I should have studied more for the driving test. 🚗"],
  ["Me arrepiento de no haber aceptado esa oferta de trabajo. 📄", "I regret not having accepted that job offer. 📄"],
  ["Ojalá no hubiera perdido la oportunidad de estudiar en el extranjero. 🌍", "I wish I hadn't missed the opportunity to study abroad. 🌍"]
];

document.getElementById('expresing_regrets').addEventListener("click", (e) => {
  let btn_test = document.getElementById("expresing_regrets");
  if (!lista_all.includes(expresing_regrets)) {
    lista_all.push(expresing_regrets);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(expresing_regrets);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// http://original.ompersonal.com.ar/ADVANCED/unit2/page7.htm




