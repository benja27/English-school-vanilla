import { random } from "../random.js";
import { lista_all } from "../sentences.js";


export let questions_simple = [
  // "What do you study in school? 📚",
  // "Where did you go on vacation last summer? 🌞",
  // "When is your birthday? 🎂",
  // "Why are you feeling sad? 😔",
  // "Who is your best friend? 👫",
  // "Whose book is this? 📖",
  // "Which color do you prefer? 🌈",
  // "Whom did you invite to the party? 🎉",
  // "How did you learn to swim? 🏊‍♀️",
  // "How much does this cost? 💲",
  // "What is your favorite movie? 🎥",
  // "Where do you work? 💼",
  // "When did you first start learning English? 🌍",
  // "Why did you choose that restaurant for dinner? 🍽️",
  // "Who taught you how to cook? 👩‍🍳",
  // "Whose car is parked in front of the house? 🚗",
  // "Which sports do you enjoy playing? ⚽",
  // "Whom did you meet at the conference yesterday? 👥",
  // "How did you become interested in photography? 📷",
  // "How often do you exercise? 🏋️‍♀️",
  // "Are you feeling better today? 😊",
  // "Do you like to travel? ✈️",
  // "Did you see that movie? 🎬",
  // "Will you be home later? 🏡",
  // "Can you swim? 🏊‍♂️",
  // "Would you like some coffee? ☕",
  // "Did he pass the exam? 📝",
  // "Should I call you later? 📞",
  // "Is it raining outside? ☔",
  // "Have you ever been to Paris? 🗼",
  // "Did you enjoy the concert? 🎶",
  // "Are you going to the party tonight? 🎈",
  // "Do you need any help with your homework? 📚",
  // "Will you be available for a meeting tomorrow? 📅",
  // "Can you speak Spanish fluently? 🇪🇸",
  // "Did you finish reading that book? 📖",
  // "Should we order pizza for dinner? 🍕",
  // "Is your phone charged? 🔋",
  // "He likes pizza, doesn't he? 🍕",
  // "She's going to the concert, right? 🎤",
  // "You have a dog, don't you? 🐶",
  // "We should leave early, shouldn't we? 🕒",
  // "They won't mind, will they? 🤷",
  // "It's a beautiful day, isn't it? ☀️",
  // "She's a great singer, isn't she? 🎤",
  // "He's been working hard, hasn't he? 💼",
  // "You know the way, don't you? 🗺️",
  // "How long have you known each other? 👥",
  // "What time does the movie start? 🎥",
  // "How often do you exercise? 🏋️‍♀️",
  // "How many siblings do you have? 👨‍👩‍👦",
  // "How did you get here? 🚗",
  // "What's your favorite food? 🍔",
  // "How old is your car? 🚘",
  // "What kind of music do you like? 🎵",
  // "How tall are you? 📏",
  // "How far is it to the nearest beach? 🏖️",
  // "How much money do you have in your wallet? 💰",
  // "What is the main ingredient in your favorite dish? 🍝",
  // "How did you come up with that idea? 💡",
  // "What time is your flight tomorrow? ✈️",
  // "How often do you visit your family? 👪",
  // "What's the best book you've ever read? 📖",
  // "How deep is the swimming pool? 🏊",
  // "What color are your eyes? 👀",
  // "How many languages can you speak? 🗣️",
  // "What's the most interesting place you've visited? 🌍",
  "¿Qué estudias en la escuela? 📚",
  "¿A dónde fuiste de vacaciones el verano pasado? 🌞",
  "¿Cuándo es tu cumpleaños? 🎂",
  "¿Por qué te sientes triste? 😔",
  "¿Quién es tu mejor amigo? 👫",
  "¿De quién es este libro? 📖",
  "¿Qué color prefieres? 🌈",
  "¿A quién invitaste a la fiesta? 🎉",
  "¿Cómo aprendiste a nadar? 🏊‍♀️",
  "¿Cuánto cuesta esto? 💲",
  "¿Cuál es tu película favorita? 🎥",
  "¿Dónde trabajas? 💼",
  "¿Cuándo empezaste a aprender inglés? 🌍",
  "¿Por qué elegiste ese restaurante para cenar? 🍽️",
  "¿Quién te enseñó a cocinar? 👩‍🍳",
  "¿De quién es el coche estacionado frente a la casa? 🚗",
  "¿Qué deportes te gusta jugar? ⚽",
  "¿A quién conociste en la conferencia ayer? 👥",
  "¿Cómo te interesaste por la fotografía? 📷",
  "¿Con qué frecuencia haces ejercicio? 🏋️‍♀️",
  "¿Te sientes mejor hoy? 😊",
  "¿Te gusta viajar? ✈️",
  "¿Viste esa película? 🎬",
  "¿Estarás en casa más tarde? 🏡",
  "¿Sabes nadar? 🏊‍♂️",
  "¿Te gustaría un poco de café? ☕",
  "¿Aprobó él el examen? 📝",
  "¿Debería llamarte más tarde? 📞",
  "¿Está lloviendo afuera? ☔",
  "¿Alguna vez has estado en París? 🗼",
  "¿Disfrutaste del concierto? 🎶",
  "¿Vas a la fiesta esta noche? 🎈",
  "¿Necesitas ayuda con tu tarea? 📚",
  "¿Estarás disponible para una reunión mañana? 📅",
  "¿Hablas español con fluidez? 🇪🇸",
  "¿Terminaste de leer ese libro? 📖",
  "¿Deberíamos pedir pizza para cenar? 🍕",
  "¿Está cargado tu teléfono? 🔋",
  "A él le gusta la pizza, ¿verdad? 🍕",
  "Ella va al concierto, ¿no es cierto? 🎤",
  "Tienes un perro, ¿verdad? 🐶",
  "Deberíamos irnos temprano, ¿no? 🕒",
  "A ellos no les importará, ¿verdad? 🤷",
  "Es un día hermoso, ¿verdad? ☀️",
  "Ella es una gran cantante, ¿verdad? 🎤",
  "Él ha estado trabajando duro, ¿verdad? 💼",
  "Conoces el camino, ¿verdad? 🗺️",
  "¿Cuánto tiempo llevan conociéndose? 👥",
  "¿A qué hora empieza la película? 🎥",
  "¿Con qué frecuencia haces ejercicio? 🏋️‍♀️",
  "¿Cuántos hermanos tienes? 👨‍👩‍👦",
  "¿Cómo llegaste aquí? 🚗",
  "¿Cuál es tu comida favorita? 🍔",
  "¿Cuántos años tiene tu coche? 🚘",
  "¿Qué tipo de música te gusta? 🎵",
  "¿Cuánto mides? 📏",
  "¿Qué tan lejos está la playa más cercana? 🏖️",
  "¿Cuánto dinero tienes en tu billetera? 💰",
  "¿Cuál es el ingrediente principal de tu plato favorito? 🍝",
  "¿Cómo se te ocurrió esa idea? 💡",
  "¿A qué hora es tu vuelo mañana? ✈️",
  "¿Con qué frecuencia visitas a tu familia? 👪",
  "¿Cuál es el mejor libro que has leído? 📖",
  "¿Qué tan profunda es la piscina? 🏊",
  "¿De qué color son tus ojos? 👀",
  "¿Cuántos idiomas sabes hablar? 🗣️",
  "¿Cuál es el lugar más interesante que has visitado? 🌍"
]



document.getElementById('questions_basic').addEventListener("click", (e) => {
  let btn_test = document.getElementById("questions_basic");
  if (!lista_all.includes(questions_simple)) {
    lista_all.push(questions_simple);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(questions_simple);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});










// wh questions

// What do you study in school?
// Where did you go on vacation last summer?
// When is your birthday?
// Why are you feeling sad?
// Who is your best friend?
// Whose book is this?
// Which color do you prefer?
// Whom did you invite to the party?
// How did you learn to swim?
// How much does this cost?
// What is your favorite movie?
// Where do you work?
// When did you first start learning English?
// Why did you choose that restaurant for dinner?
// Who taught you how to cook?
// Whose car is parked in front of the house?
// Which sports do you enjoy playing?
// Whom did you meet at the conference yesterday?
// How did you become interested in photography?
// How often do you exercise?

// Espero que estos ejemplos te sean útiles. Si necesitas más preguntas o alguna otra ayuda, no dudes en preguntar.

// --------------------------yes no questions

// Are you feeling better today?
// Do you like to travel?
// Did you see that movie?
// Will you be home later?
// Can you swim?
// Would you like some coffee?
// Did he pass the exam?
// Should I call you later?
// Is it raining outside?
// Have you ever been to Paris?
// Did you enjoy the concert?
// Are you going to the party tonight?
// Do you need any help with your homework?
// Will you be available for a meeting tomorrow?
// Can you speak Spanish fluently?
// Did you finish reading that book?
// Should we order pizza for dinner?
// Is your phone charged?

// ------------------------tag-questions

// He likes pizza, doesn't he?
// She's going to the concert, right?
// You have a dog, don't you?
// We should leave early, shouldn't we?
// They won't mind, will they?
// It's a beautiful day, isn't it?
// She's a great singer, isn't she?
// He's been working hard, hasn't he?
// You know the way, don't you?


// --------------------- preguntas especiales

// 31. How long have you known each other?

// What time does the movie start?
// How often do you exercise?
// How many siblings do you have?
// How did you get here?
// What's your favorite food?
// How old is your car?
// What kind of music do you like?
// How tall are you?
// How far is it to the nearest beach?
// How much money do you have in your wallet?
// What is the main ingredient in your favorite dish?
// How did you come up with that idea?
// What time is your flight tomorrow?
// How often do you visit your family?
// What's the best book you've ever read?
// How deep is the swimming pool?
// What color are your eyes?
// How many languages can you speak?
// What's the most interesting place you've visited?