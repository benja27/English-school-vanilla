import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let modals_for_necessity_and_suggestion = [
  ["Sería mejor que estudiaras para el examen.", "You'd better study for the exam."],
  ["Debes llamar a tu madre.", "You should call your mother."],
  ["No debes hablar con desconocidos.", "You mustn't talk to strangers."],
  ["Sería mejor que te relajes un poco.", "You'd better relax a bit."],
  ["Deberías tomar un paraguas, parece que va a llover.", "You should take an umbrella, it looks like it's going to rain."],
  ["No debes olvidar comprar leche en el supermercado.", "You mustn't forget to buy milk at the supermarket."],
  ["Sería mejor que te apures si quieres llegar a tiempo.", "You'd better hurry if you want to be on time."],
  ["Deberías comer más frutas y verduras.", "You should eat more fruits and vegetables."],
  ["No debes jugar con fuego, es peligroso.", "You mustn't play with fire; it's dangerous."],
  ["Sería mejor que no pierdas las llaves de nuevo.", "You'd better not lose your keys again."],
  ["Deberías estudiar un poco más para mejorar tu nota.", "You should study a bit more to improve your grade."],
  ["No debes comer tanto dulce, es malo para la salud.", "You mustn't eat so much candy; it's bad for your health."],
  ["Sería mejor que vayas al médico si te sientes mal.", "You'd better go to the doctor if you're feeling unwell."],
  ["Deberías tomar un descanso después de tanto trabajo.", "You should take a break after so much work."],
  ["No debes olvidar apagar las luces al salir de la habitación.", "You mustn't forget to turn off the lights when leaving the room."],
  ["Sería mejor que llegaras temprano a la entrevista.", "You'd better arrive early for the interview."],
  ["Deberías escuchar a tus padres, tienen experiencia.", "You should listen to your parents; they have experience."],
  ["No debes hablar con la boca llena en la cena.", "You mustn't speak with your mouth full during dinner."],
  ["Sería mejor que no te olvides de tomar tus medicinas.", "You'd better not forget to take your medicine."],
  ["Deberías usar protector solar en la playa.", "You should use sunscreen at the beach."],
  ["No debes conducir tan rápido en esta zona.", "You mustn't drive so fast in this area."],
  ["Sería mejor que compres un regalo para su cumpleaños.", "You'd better buy a gift for her birthday."],
  ["Deberías ahorrar dinero para el futuro.", "You should save money for the future."],
  ["No debes dejar las puertas abiertas por la noche.", "You mustn't leave the doors open at night."],
  ["Sería mejor que te relajes y disfrutes del día.", "You'd better relax and enjoy the day."],
  ["Deberías estudiar más para obtener mejores calificaciones.", "You should study more to get better grades."],
  ["No debes beber alcohol si vas a conducir.", "You mustn't drink alcohol if you're going to drive."],
  ["Sería mejor que no hables durante la película.", "You'd better not talk during the movie."],
  ["Deberías ahorrar dinero para emergencias.", "You should save money for emergencies."],
  ["No debes comer en la habitación.", "You mustn't eat in the bedroom."],
];


document.getElementById('modals_for_nessecity_and_suggestion').addEventListener("click", (e) => {
  let btn_test = document.getElementById("modals_for_nessecity_and_suggestion");
  if (!lista_all.includes(modals_for_necessity_and_suggestion)) {
    lista_all.push(modals_for_necessity_and_suggestion);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(modals_for_necessity_and_suggestion);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm