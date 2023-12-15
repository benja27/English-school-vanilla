import { lista_all } from "../sentences.js";

export let reorder_basic = [
  ["Estás trabajando duro hoy. 😊 - Sí, tengo mucho que hacer. 💪 ", "You're working hard today. 😊- Yes, I have a lot to do. 💪 "],
  [`A: Vi a Brian hace unos días. 😊 B: ¿Oh, en serio? ¿Qué está haciendo estos días? 😄 A: Ahora está en la universidad. 🎓 B: ¿Qué está estudiando? 📚 A: Psicología. 😊 B: ¿Le gusta? 😄 A: Sí, dice que está aprendiendo mucho. 🧠`,
   "A: I saw Brian a few days ago. 😊 B: Oh, did you? What is he doing these days? 😄 A: He's in college now. 🎓 B: What is he studying? 📚 A: Psychology. 😊 B: Is he enjoying it? 😄 A: Yes, he says he is learning a lot. 🧠"
  ],
  ["Estoy buscando a Christine. ¿Sabes dónde está? 🤔", "I am looking for Christine. Do you know where she is? 🤔"],
  ["Se está oscureciendo. ¿Debería encender la luz? 🌙", "It is getting dark. Should I turn on the light? 🌙"],
  ["No tienen un lugar donde vivir en este momento. Están quedándose con amigos hasta que encuentren un lugar. 🏠", "They don't have anywhere to live at the moment. They are staying with friends until they find a place. 🏠"],
  ["Las cosas no van muy bien en el trabajo. La empresa está perdiendo dinero. 😞", "Things are not so good at work. The company is losing money. 😞"],
  ["¿Tienes un paraguas? Va a llover. ☔", "Do you have an umbrella? It is going to rain. ☔"],
  ["Estás haciendo mucho ruido. ¿Puedes ser más silencioso? Estoy tratando de concentrarme. 🤫", "You are making a lot of noise. Can you be quieter? I am trying to concentrate. 🤫"],
  ["¿Por qué están todas estas personas aquí? ¿Qué está pasando? 🤷‍♂️", "Why are all these people here? What is happening? 🤷‍♂️"],
  ["Por favor, no hagan tanto ruido. Estoy tratando de trabajar. 🙏", "Please don't make so much noise. I am trying to work. 🙏"],
  ["Salgamos ahora. Ya no está lloviendo. ☀️", "Let's go out now. It isn't raining anymore. ☀️"],
  ["Puedes apagar la radio. No la estoy escuchando. 📻", "You can turn off the radio. I am not listening to it. 📻"],
  ["Kate me llamó anoche. Está de vacaciones en Quebec. Se está divirtiendo mucho y no quiere volver a casa. 😎", "Kate called me last night. She's on vacation in Quebec. She is having a great time and doesn't want to come home. 😎"],
  ["Quiero perder peso, así que esta semana no estoy almorzando. 🥗", "I want to lose weight, so this week I am not eating lunch. 🥗"],
  ["Andrew acaba de empezar clases nocturnas. Está estudiando alemán. 📚", "Andrew just started evening classes. He is studying German. 📚"],
  ["Paul y Sally tuvieron una discusión. No se están hablando. 😔", "Paul and Sally had an argument. They aren't speaking to each other. 😔"],
  ["Me estoy cansando. Necesito un descanso. 😴", "I am getting tired. I need a break. 😴"],
  ["Tim no está trabajando esta semana. Tiene una semana libre. 🎉", "Tim isn't working this week. He has a week off. 🎉"],
  ["La población del mundo está aumentando muy rápido. 🌍", "The population of the world is increasing very fast. 🌍"],
  ["El mundo está cambiando. Las cosas nunca permanecen iguales. 🌎", "The world is changing. Things never stay the same. 🌎"],
  ["La situación ya es mala y se está poniendo peor. 😟", "The situation is already bad and it is getting worse. 😟"],
  ["El costo de vida está subiendo. Cada año las cosas son más caras. 💸", "The cost of living is rising. Every year things are more expensive. 💸"],
  ["El clima está empezando a mejorar. La lluvia ha parado y el viento no es tan fuerte. 🌦️", "The weather is beginning to improve. The rain has stopped, and the wind isn't as strong. 🌦️"],
  ["Unos amigos míos están construyendo su propia casa. Esperan terminarla el próximo verano. 🏡", "Some friends of mine are building their own house. They hope to finish it next summer. 🏡"]
];

document.getElementById('reorder_basic').addEventListener("click", (e) => {
  let btn_test = document.getElementById("reorder_basic");
  if (!lista_all.includes(reorder_basic)) {
    lista_all.push(reorder_basic);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(reorder_basic);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});

