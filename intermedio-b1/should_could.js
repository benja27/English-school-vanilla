import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let should_could = [
  ["Deberíamos estudiar para el examen de matemáticas. 📚", "We should study for the math exam. 📚"],
  ["¿Debería llamar al médico si la fiebre no mejora? 🤒", "Should I call the doctor if the fever doesn't improve? 🤒"],
  ["Creo que deberíamos viajar más y conocer otras culturas. ✈️", "I think we should travel more and experience other cultures. ✈️"],
  ["¿Deberíamos comprar entradas para el concierto ahora o más tarde? 🎤", "Should we buy tickets for the concert now or later? 🎤"],
  ["Él debería practicar más el piano si quiere mejorar. 🎹", "He should practice the piano more if he wants to improve. 🎹"],
  ["¿Deberíamos llevar paraguas por si llueve? ☔", "Should we bring umbrellas in case it rains? ☔"],
  ["Ella debería hablar con su jefe sobre el problema en el trabajo. 👩‍💼", "She should talk to her boss about the issue at work. 👩‍💼"],
  ["¿Debería tomar un descanso antes de continuar trabajando? ☕", "Should I take a break before continuing to work? ☕"],
  ["Los estudiantes deberían hacer sus tareas a tiempo. 📝", "Students should do their homework on time. 📝"],
  ["¿Debería comprar esta camisa o buscar otra opción? 👕", "Should I buy this shirt or look for another option? 👕"],
  ["Creo que podríamos visitar a nuestros abuelos este fin de semana. 👵👴", "I think we could visit our grandparents this weekend. 👵👴"],
  ["¿Podría prestarme tu libro por favor? 📖", "Could you lend me your book, please? 📖"],
  ["Ella podría ser una excelente cantante si se esfuerza. 🎶", "She could be an excellent singer if she puts in effort. 🎶"],
  ["¿Podríamos tomar un taxi para llegar más rápido? 🚖", "Could we take a taxi to get there faster? 🚖"],
  ["Creo que podríamos aprender un nuevo idioma juntos. 🌍", "I think we could learn a new language together. 🌍"],
  ["¿Podría ayudarme a mover estos muebles, por favor? 💪", "Could you help me move this furniture, please? 💪"],
  ["Él podría ganar el concurso si practica lo suficiente. 🏆", "He could win the competition if he practices enough. 🏆"],
  ["¿Podríamos ir al cine esta noche? 🎬", "Could we go to the movies tonight? 🎬"],
  ["Creo que podríamos empezar un negocio propio. 💼", "I think we could start our own business. 💼"],
  ["¿Podría darme algunos consejos sobre cómo cocinar esto? 🍳", "Could you give me some tips on how to cook this? 🍳"],
  ["Ella podría ser una gran diseñadora de moda en el futuro. 👗", "She could be a great fashion designer in the future. 👗"],
  ["¿Podríamos reservar una mesa para dos a las 8 p.m.? 🍽️", "Could we book a table for two at 8 p.m.? 🍽️"],
  ["Creo que podríamos plantar un jardín en nuestro patio trasero. 🌻", "I think we could plant a garden in our backyard. 🌻"],
  ["¿Podría decirme cómo llegar a la estación de tren? 🚆", "Could you tell me how to get to the train station? 🚆"],
  ["Él podría ser un gran escritor si sigue escribiendo. ✍️", "He could be a great writer if he keeps writing. ✍️"],
  ["¿Podríamos reservar un hotel en la playa para las vacaciones? 🏖️", "Could we book a beachfront hotel for the vacation? 🏖️"],
  ["Creo que podríamos hacer una fiesta sorpresa para su cumpleaños. 🎉", "I think we could throw a surprise party for his birthday. 🎉"],
  ["¿Podría abrir la ventana, por favor? 🪟", "Could you open the window, please? 🪟"],
  ["Ella podría estudiar en el extranjero si lo desea. 🌏", "She could study abroad if she wants to. 🌏"],
  ["¿Podríamos comer en este restaurante esta noche? 🍽️", "Could we dine at this restaurant tonight? 🍽️"]
];



document.getElementById('should_could').addEventListener("click", (e) => {
  let btn_test = document.getElementById("should_could");
  if (!lista_all.includes(should_could)) {
    lista_all.push(should_could);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(should_could);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm