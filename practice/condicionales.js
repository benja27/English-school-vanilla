import { lista_all } from "../sentences.js";

export const condicionales = [
  ["El agua hierve a 212 grados Fahrenheit. 🔥", "Water boils at 212 degrees Fahrenheit. 🔥"],
  ["El agua se está hirviendo. ¿Puedes apagarla? 💦", "The water is boiling. Can you turn it off? 💦"],
  ["¡Mira! Ese hombre está intentando abrir la puerta de tu coche. 👀", "Look! That man is trying to open the door of your car. 👀"],
  ["¿Puedes escuchar a esas personas? ¿De qué están hablando? 👂", "Can you hear those people? What are they talking about? 👂"],
  ["La luna orbita alrededor de la Tierra en aproximadamente 27 días. 🌕", "The moon goes around the earth in about 27 days. 🌕"],
  ["Tengo que irme ahora. Se está haciendo tarde. 🕔", "I have to go now. It's getting late. 🕔"],
  ["Normalmente conduzco al trabajo. 🚗", "I usually drive to work. 🚗"],
  ["¡Date prisa! Todos te están esperando. 🏃‍♂️", "\"Hurry up! It’s time to leave.\" \"OK, I'm coming.\" 🏃‍♂️"],
  ["Escuché que conseguiste un nuevo trabajo. ¿Cómo te va? 🤔", "I hear you've got a new job. How's it going? 🤔"],
  ["Paul nunca llega tarde. Siempre llega puntual al trabajo. ⌛", "Paul is never late. He always gets to work on time. ⌛"],
  ["No se llevan bien. Siempre están discutiendo. 😡", "They don't get along well. They're always arguing. 😡"],
  ["Julia es muy buena en idiomas. Habla cuatro idiomas muy bien. 🗣️", "Julia is very good at languages. She speaks four languages very well. 🗣️"],
  ["¡Date prisa! Todos te están esperando. 🏃‍♂️", "Hurry up! Everybody is waiting for you. 🏃‍♂️"],
  ["¿Estás escuchando la radio? No, puedes apagarla. 📻", "\"Are you listening to the radio?\" \"No, you can turn it off.\" 📻"],
  ["¿Escuchas la radio todos los días? No, solo ocasionalmente. 🎶", "\"Do you listen to the radio every day?\" \"No, just occasionally.\" 🎶"],
  ["El río desemboca en el Mediterráneo. 🌊", "The river flows into the Mediterranean. 🌊"],
  ["El río está fluyendo muy rápido hoy, mucho más rápido de lo habitual. 💧", "The river is flowing very fast today — much faster than usual. 💧"],
  ["Normalmente cultivamos verduras en nuestro jardín, pero este año no estamos cultivando ninguna. 🥕", "We usually grow vegetables in our garden, but this year we are not growing any. 🥕"],
  ["¿Cómo está tu inglés? No está mal. Creo que está mejorando lentamente. 📚", "A: How's your English? B: Not bad. I think it's improving slowly. 📚"],
  ["Rachel está en Nueva York en este momento. Se está quedando en el Park Hotel. Siempre se queda allí cuando está en Nueva York. 🗽", "Rachel is in New York right now. She is staying at the Park Hotel. She always stays there when she's in New York. 🗽"],
  ["¿Podemos dejar de caminar pronto? Estoy empezando a sentirme cansado. 😴", "Can we stop walking soon? I am starting to feel tired. 😴"],
  ["A: ¿Puedes conducir? B: Estoy aprendiendo. Mi padre me está enseñando. 🚗", "A: Can you drive? B: I am learning. My father is teaching me. 🚗"],
  ["Normalmente termino de trabajar a las cinco, pero esta semana estoy trabajando hasta las seis para ganar un poco más de dinero. 💸", "Normally I finish work at five, but this week I am working until six to earn a little more money. 💸"],
  ["Mis padres viven en Taipei. Nacieron allí y nunca han vivido en ningún otro lugar. ¿Dónde viven tus padres? 🏠", "My parents live in Taipei. They were born there and have never lived anywhere else. Where do your parents live? 🏠"],
  ["Sonia está buscando un lugar para vivir. Se está quedando con su hermana hasta que encuentre un lugar. 🏡", "Sonia is looking for a place to live. She is staying with her sister until she finds a place. 🏡"],
  ["A: ¿Qué hace tu hermano? B: Es arquitecto, pero ahora mismo no está trabajando. 🏢", "A: What does your brother do? B: He's an architect, but he's not working right now. 🏢"],
  ["Normalmente disfruto de las fiestas, pero esta no me está gustando mucho. 🎉", "(At a party) I usually enjoy parties, but I'm not enjoying this one very much. 🎉"],

];

document.getElementById('condicionales').addEventListener("click", (e) => {
  let btn_test = document.getElementById("condicionales");
  if (!lista_all.includes(condicionales)) {
    lista_all.push(condicionales);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(condicionales);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});

