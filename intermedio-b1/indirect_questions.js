import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let indirect_questions = [
  ["¿Podría decirme dónde está el museo? 🏛️", "Could you tell me where the museum is? 🏛️"],
  ["¿Sabe cuándo comienza la conferencia? 🕒", "Do you know when the conference starts? 🕒"],
  ["¿Puede decirme qué películas están en cartelera? 🎥", "Can you tell me what movies are currently showing? 🎥"],
  ["¿Sabe cuántos estudiantes asistirán a la reunión? 👩‍🎓👨‍🎓", "Do you know how many students will attend the meeting? 👩‍🎓👨‍🎓"],
  ["¿Podría decirme por qué el tren se retrasó? 🚆", "Could you tell me why the train was delayed? 🚆"],
  ["¿Sabe quién ganó el concurso de canto? 🎤🏆", "Do you know who won the singing competition? 🎤🏆"],
  ["¿Puede decirme cuál es el mejor restaurante en la ciudad? 🍽️", "Can you tell me what the best restaurant in town is? 🍽️"],
  ["¿Sabe cuánto cuesta la entrada al parque? 🎫", "Do you know how much the park entrance fee is? 🎫"],
  ["¿Podría decirme dónde se encuentra la estación de tren? 🚉", "Could you tell me where the train station is located? 🚉"],
  ["¿Sabe cuándo abre la tienda de ropa? 👚", "Do you know when the clothing store opens? 👚"],
  ["¿Puede decirme cuál es la dirección de la oficina? 🏢", "Can you tell me what the office address is? 🏢"],
  ["¿Sabe cuántos años tiene el presidente? 🇺🇸", "Do you know how old the president is? 🇺🇸"],
  ["¿Podría decirme dónde puedo encontrar un buen café? ☕", "Could you tell me where I can find a good coffee? ☕"],
  ["¿Sabe cuándo parte el próximo vuelo a París? ✈️", "Do you know when the next flight to Paris departs? ✈️"],
  ["¿Puede decirme qué libros recomiendan en esta librería? 📚", "Can you tell me what books they recommend at this bookstore? 📚"],
  ["¿Sabe cuánto tiempo dura el tour por la ciudad? 🌆", "Do you know how long the city tour lasts? 🌆"],
  ["¿Podría decirme por qué se canceló el concierto? 🎵", "Could you tell me why the concert was canceled? 🎵"],
  ["¿Sabe quién es el director de esta película? 🎬", "Do you know who the director of this movie is? 🎬"],
  ["¿Puede decirme cómo llegar al museo de arte? 🖼️", "Can you tell me how to get to the art museum? 🖼️"],
  ["¿Sabe cuál es la mejor época para visitar la playa? 🏖️", "Do you know the best time to visit the beach is? 🏖️"],
  ["¿Podría decirme cuándo comienza la temporada de esquí? ⛷️", "Could you tell me when the ski season starts? ⛷️"],
  ["¿Sabe cuánto cuesta el boleto de entrada al zoológico? 🦁", "Do you know how much the zoo entrance ticket costs? 🦁"],
  ["¿Puede decirme dónde puedo encontrar un buen restaurante italiano? 🍕", "Can you tell me where I can find a good Italian restaurant? 🍕"],
  ["¿Sabe cuándo se celebrará el próximo partido de fútbol? ⚽", "Do you know when the next soccer match will be held? ⚽"],
  ["¿Podría decirme qué tiempo hará mañana? 🌦️", "Could you tell me what the weather will be like tomorrow? 🌦️"],
  ["¿Sabe cuál es el horario de la biblioteca? 📖", "Do you know what the library's hours are? 📖"],
  ["¿Puede decirme cómo reservar un hotel en línea? 🏨", "Can you tell me how to book a hotel online? 🏨"],
  ["¿Sabe cuántas personas trabajan en esta empresa? 👩‍💼👨‍💼", "Do you know how many people work in this company? 👩‍💼👨‍💼"],
  ["¿Podría decirme por qué el parque está cerrado hoy? 🌳🚧", "Could you tell me why the park is closed today? 🌳🚧"],
  ["¿Sabe cuál es la política de cancelación del hotel? 🏨", "Do you know what the hotel's cancellation policy is? 🏨"]
];

document.getElementById('indirect_questions').addEventListener("click", (e) => {
  let btn_test = document.getElementById("indirect_questions");
  if (!lista_all.includes(indirect_questions )) {
    lista_all.push(indirect_questions );
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(indirect_questions );
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm