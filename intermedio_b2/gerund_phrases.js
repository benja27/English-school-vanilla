import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let gerund_phrases = [
  // **Como sujeto**
  ["**Estar en forma es importante.** 💪", "**Being in shape is important.** 💪"],
  ["**Viajar es divertido.** 🤩", "**Traveling is fun.** 🤩"],
  ["**Aprender inglés es un desafío.** 🤔", "**Learning English is a challenge.** 🤔"],
  ["**Ser amable con los demás es importante.** 🥰", "**Being kind to others is important.** 🥰"],
  ["**Comer sano es necesario para estar saludable.** 🍎", "**Eating healthy is necessary to be healthy.** 🍎"],

  // **Como objeto del verbo**
  ["**Me gusta** **viajar**. 🧳", "I like **traveling**. 🧳"],  
  // **Como objeto de una preposición**
  ["**Estoy interesado en** **viajar**. 🧳", "I'm interested in **traveling**. 🧳"],
  ["**Tengo miedo de** **hablar en público.** 😱", "I'm afraid of **public speaking**. 😱"],
  ["**Estoy cansado de** **trabajar**. 🥱", "I'm tired of **working**. 🥱"],
  ["**Me gusta** **pasar tiempo con mi familia.** 👨‍👩‍👦", "I like **spending time with my family**. 👨‍👩‍👦"],
  ["**Necesito** **ayuda con** **mis tareas.** 📑", "I need **help with** my homework. 📑"],
  // **Otras**
  ["**Me encanta** **bailar**. 💃", "I love **dancing**. 💃"],
  ["**Me gusta** **leer** libros. 📚", "I like **reading** books. 📚"],
  ["**Me gusta** **cocinar**. 🍳", "I like **cooking**. 🍳"],
  ["**Me gusta** **pasar tiempo al aire libre.** 🏕️", "I like **spending time outdoors**. 🏕️"],
  ["**Me gusta** **jugar videojuegos.** 🎮", "I like **playing video games**. 🎮"],
  ["**Correr es mi pasatiempo favorito.** 🏃‍♂️", "Running is my favorite hobby. 🏃‍♂️"],
  ["**Jugar al fútbol es divertido.** ⚽️", "Playing football is fun. ⚽️"],
  ["**Escribir es una forma de expresarse.** ✍️", "Writing is a way to express oneself. ✍️"],
  ["**Escuchar música es relajante.** 🎼", "Listening to music is relaxing. 🎼"],
  ["**Aprender un nuevo idioma es desafiante pero gratificante.** 🎓", "Learning a new language is challenging but rewarding. 🎓"],

  // **Como objeto del verbo**
  ["**Amo** **viajar** por el mundo.** 🧳", "I love **traveling** the world. 🧳"],
  ["**Aprendí** **a tocar el piano** cuando era niño.** 🎹", "I learned **to play the piano** when I was a child. 🎹"],
  ["**Voy a** **jugar** al fútbol con mis amigos el sábado.** ⚽️", "I'm going to **play** football with my friends on Saturday. ⚽️"],
  ["**Necesito** **estudiar** para el examen de matemáticas.** 📚", "I need to **study** for the math exam. 📚"],
  ["**Quiero** **aprender** a cocinar nuevos platos.** 🍳", "I want to **learn** to cook new dishes. 🍳"],

  // **Como objeto de una preposición**
  ["**Estoy interesado en** **viajar** a Europa.** 🧳", "I'm interested in **traveling** to Europe. 🧳"],
  ["**Tengo miedo de** **hablar en público**.** 😱", "I'm afraid of **public speaking**. 😱"],
  ["**Estoy cansado de** **trabajar** todo el día.** 🥱", "I'm tired of **working** all day. 🥱"],
  ["**Me gusta** **pasar tiempo con mi familia** los fines de semana.** 👨‍👩‍👦", "I like **spending time with my family** on the weekends. 👨‍👩‍👦"],
  ["**Necesito** **ayuda con** **mi tarea de inglés.** 📑", "I need **help with** my English homework. 📑"],

  // **Otras**
  ["**Me encanta** **bailar** en las fiestas.** 💃", "I love **dancing** at parties. 💃"],
  ["**Me gusta** **leer** libros de misterio.** 📚", "I like **reading** mystery novels. 📚"],
  ["**Me gusta** **cocinar** platos mexicanos.** 🍳", "I like **cooking** Mexican dishes. 🍳"],
  ["**Me gusta** **pasar tiempo al aire libre** en el parque.** 🏕️", "I like **spending time outdoors** in the park. 🏕️"],
  ["**Me gusta** **jugar videojuegos** con mis amigos.** 🎮", "I like **playing video games** with my friends. 🎮"],
];

document.getElementById('gerund_phrases').addEventListener("click", (e) => {
  let btn_test = document.getElementById("gerund_phrases");
  if (!lista_all.includes(gerund_phrases)) {
    lista_all.push(gerund_phrases);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(gerund_phrases);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm