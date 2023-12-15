import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let basicos_conjuncion = [
  "Estaba en la tienda ayer 😊 cuando de repente vi a mi viejo amigo.",
  "Llegaste tarde a la escuela hoy 😕 porque tuviste problemas con el tráfico.",
  "Era un buen estudiante 👍 y siempre obtuve buenas calificaciones en matemáticas.",
  "Me estaba divirtiendo mucho en la fiesta 🥳, así que decidí quedarme hasta tarde.",  
  "Ella tenía mucho trabajo que hacer en la oficina 💻, pero aún encontró tiempo para ayudarme.",  
  "No estudiaste para el examen 😴, por lo que no estabas preparado para las preguntas difíciles.",
  "Él no fue a trabajar ayer ❌ porque estaba enfermo.",   
  "Conseguí un nuevo trabajo 🎉, así que estoy emocionado por esta nueva oportunidad.",
  "Cometí un error 🤦‍♀️, pero aprendí de él y no lo repetiré.",
  "Ella llegó a la cima de la montaña ⛰️ después de una larga caminata.",
  "Fui a la tienda 🛒 y compré todo lo que necesitábamos.",
  "Fuiste al parque 🏞️, donde jugaste con tus amigos.",
  "Ella fue al cine 🍿 y vio una película emocionante.",
  "Sabía que era un error 🤦‍♂️, pero aún así lo intenté.",  
  "Tomé un taxi al aeropuerto ✈️, donde me reuní con mi familia.",
  "Estoy en la tienda ahora 😊 y estoy buscando algunos productos interesantes.",  
  "Tengo mucho trabajo que hacer esta noche 🥴, así que necesito concentrarme en mis tareas pendientes.",
  "Ella tiene mucho trabajo que hacer en la oficina 💻 y a menudo trabaja hasta tarde.",
  "Hago mi tarea esta noche 📚 y luego reviso mis notas.",  
  "Él no va a trabajar hoy ❌ porque está de vacaciones.",
  "Digo que estaré allí 🤝, pero depende del tráfico.",
  "Busco mis llaves 🔑 y las encuentro en mi bolsillo, donde las olvidé esta mañana.",
  "Quieres ir al cine 🍿 y ver la última película de superhéroes.",
  "ellos hiban a ir a la fiesta pero no pudieron",
  "ellos hiban a pagar la cuenta pero de repente se dieron cuenta que no tenian dinero",
  "ellos hiban a ir a la playa pero el clima estaba feo",
  "ellos no hiban a pagar la cuenta pero se dieron cuenta que la policia estaba afuera del restaurante",
  "ellos hiban a ir a la playa pero se dieron cuenta que no tenian gasolina",
  "ellos hiban a ir a la fiesta pero se dieron cuenta que no tenian gasolina",
  "ellos hiban a ir a la playa pero se dieron cuenta que no tenian dinero",
  "ellos no hiban a pagar la cuenta de repente se dieron cuenta que tenian mucho dinero",
  "ellos querian pagar la cuenta pero se dieron cuenta que no tenian dinero",
  "ellos querian viajar por el mundo por 90 dias pero de repente un chino se comio un murcielago y el coronavirus llego a todo el mundo",
  "ellos hiban a viajar pero se dieron cuenta que el aeropuerto estaba cerrado",
  "ellos no querian viajar muy a menudo pero su jefe les dijo que tenian que viajar por todo el mundo",
  "ellos no solian comer sushi pero un dia fueron a un restaurante japones y les gusto mucho",
  "ellos solian comer mucho sushi pero un dia se enfermaron y ya no comieron sushi",
  "ellos estaban acostumbrados a comer sushi pero se dieron cuenta que era muy caro"  
];

document.getElementById('conjunciones2').addEventListener("click", (e) => {
  let btn_test = document.getElementById("conjunciones2");
  if (!lista_all.includes(basicos_conjuncion)) {
    lista_all.push(basicos_conjuncion);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(basicos_conjuncion);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});
