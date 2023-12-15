import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let be_going_to= [
  ["Voy a ver una película esta noche.", "I'm going to watch a movie tonight."],
  ["Creo que iré al gimnasio más tarde.", "I think I'll go to the gym later."],
  ["¿Qué piensas hacer en tu cumpleaños?", "What are you going to do on your birthday?"],
  ["No voy a comprar ese coche tan caro.", "I'm not going to buy that expensive car."],
  ["Tal vez estudie medicina en el futuro.", "Maybe I'll study medicine in the future."],
  ["¿Piensas visitar a tus abuelos este fin de semana?", "Are you going to visit your grandparents this weekend?"],
  ["No creo que vaya a la fiesta esta noche.", "I don't think I'll go to the party tonight."],
  ["Ella va a cocinar la cena esta noche.", "She's going to cook dinner tonight."],
  ["Probablemente no compre ese vestido.", "I probably won't buy that dress."],
  ["¿Qué harás si llueve mañana?", "What will you do if it rains tomorrow?"],
  ["Vamos a pintar la casa el próximo mes.", "We're going to paint the house next month."],
  ["Él piensa comprar un nuevo teléfono.", "He plans to buy a new phone."],
  ["No voy a olvidar tu cumpleaños.", "I won't forget your birthday."],
  ["¿Vas a estudiar para el examen?", "Are you going to study for the exam?"],
  ["Ella probablemente no venga a la reunión.", "She probably won't come to the meeting."],
  ["¿Qué película verás esta noche?", "What movie will you watch tonight?"],
  ["No vamos a llegar tarde a la boda.", "We're not going to be late for the wedding."],
  ["¿Tienes planes para el fin de semana?", "Do you have any plans for the weekend?"],
  ["Él piensa que ganará el concurso.", "He thinks he'll win the contest."],
  ["¿Piensas hacer ejercicio esta tarde?", "Are you going to exercise this afternoon?"],
  ["Ellos van a viajar a Europa en el verano.", "They're going to travel to Europe in the summer."],
  ["No creo que compre ese libro.", "I don't think I'll buy that book."],
  ["¿Qué vas a pedir en el restaurante?", "What are you going to order at the restaurant?"],
  ["Ella probablemente no asista a la conferencia.", "She probably won't attend the conference."],
  ["¿Dónde vas a pasar tus vacaciones de verano?", "Where are you going to spend your summer vacation?"],
  ["No voy a comer comida rápida esta semana.", "I'm not going to eat fast food this week."],
  ["¿Qué música escucharás en el viaje?", "What music will you listen to on the trip?"],
  ["Él va a estudiar inglés en la universidad.", "He's going to study English at the university."],
  ["¿Qué harás si no consigues el trabajo?", "What will you do if you don't get the job?"],
];

document.getElementById('be_going_to').addEventListener("click", (e) => {
  let btn_test = document.getElementById("be_going_to");
  if (!lista_all.includes(be_going_to)) {
    lista_all.push(be_going_to);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(be_going_to);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm