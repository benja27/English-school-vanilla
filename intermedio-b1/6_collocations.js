import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let collocations = [
  ["Ella llevaba un vestido elegante.", "She was wearing an elegant dress."],
  ["Él dio un fuerte aplauso al final del concierto.", "He gave a loud applause at the end of the concert."],
  ["¿Puedes hacer un favor por mí?", "Can you do a favor for me?"],
  ["Estoy teniendo una mañana ocupada en el trabajo.", "I'm having a busy morning at work."],
  ["Necesito tomar una decisión importante.", "I need to make an important decision."],
  ["Ellos están teniendo una conversación seria.", "They are having a serious conversation."],
  ["Me encanta escuchar música clásica.", "I love listening to classical music."],
  ["Ellos fueron a una fiesta sorpresa anoche.", "They went to a surprise party last night."],
  ["Voy a hacer una presentación en la reunión.", "I'm going to give a presentation at the meeting."],
  ["Ellos tomaron una taza de café en el café local.", "They had a cup of coffee at the local cafe."],
  ["¿Puedes prestar atención en clase, por favor?", "Can you pay attention in class, please?"],
  ["Hicimos un viaje en coche a la costa.", "We took a road trip to the coast."],
  ["Ella tomó una siesta después del almuerzo.", "She took a nap after lunch."],
  ["¿Has tenido una discusión con tu jefe?", "Have you had a disagreement with your boss?"],
  ["Estamos teniendo una conversación importante.", "We are having an important conversation."],
  ["Ella va a dar una conferencia en la universidad.", "She is going to give a lecture at the university."],
  ["Me gusta tomar un baño largo después de un día agotador.", "I like to take a long bath after a tiring day."],
  ["¿Puedes echar un vistazo a este documento?", "Can you take a look at this document?"],
  ["Ellos tuvieron una reunión de negocios esta mañana.", "They had a business meeting this morning."],
  ["Hicimos una caminata larga por el bosque.", "We took a long hike in the forest."],
  ["Necesito hacer una llamada importante.", "I need to make an important call."],
  ["¿Alguna vez has tenido un sueño extraño?", "Have you ever had a strange dream?"],
  ["Vamos a tener una cena especial esta noche.", "We are going to have a special dinner tonight."],
  ["Ellos están teniendo una entrevista de trabajo mañana.", "They are having a job interview tomorrow."],
  ["Mi abuela solía hacer una deliciosa tarta de manzana.", "My grandmother used to make a delicious apple pie."],
  ["¿Puedes hacer una pregunta sobre este tema?", "Can you ask a question about this topic?"],
  ["Estamos teniendo una conversación agradable.", "We are having a pleasant conversation."],
  ["Ellos tomaron un vuelo largo a Asia.", "They took a long flight to Asia."],
  ["Voy a hacer una presentación importante en la conferencia.", "I'm going to give an important presentation at the conference."],
  ["¿Has tenido alguna experiencia emocionante recientemente?", "Have you had any exciting experiences recently?"],
];

document.getElementById('collocations').addEventListener("click", (e) => {
  let btn_test = document.getElementById("collocations");
  if (!lista_all.includes(collocations)) {
    lista_all.push(collocations);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(collocations);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm