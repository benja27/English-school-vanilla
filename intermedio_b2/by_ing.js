import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let by_ing = [
  ["Ella logró sus sueños 🌟 trabajando duro y sin rendirse.", "She achieved her dreams 🌟 by working hard and never giving up."],
  ["Aprendió a bailar salsa 💃 tomando clases todas las semanas.", "He learned to dance salsa 💃 by taking lessons every week."],
  ["Se convirtieron en chefs hábiles 👨‍🍳 practicando la cocina de diversos platos.", "They became skilled chefs 👨‍🍳 by practicing cooking various dishes."],
  ["Mejoré mi escritura ✍️ leyendo libros de diferentes autores.", "I improved my writing ✍️ by reading books from different authors."],
  ["El problema se resolvió 🧩 brainstorming soluciones creativas.", "The problem was solved 🧩 by brainstorming creative solutions."],
  ["Se convirtió en una gran pianista 🎹 practicando el piano a diario.", "She became a great pianist 🎹 by practicing the piano daily."],
  ["Dominaron el arte de la fotografía 📷 experimentando con diferentes técnicas.", "They mastered the art of photography 📷 by experimenting with different techniques."],
  ["Superó su miedo a las alturas 🏞️ enfrentándolo directamente.", "He overcame his fear of heights 🏞️ by facing it head-on."],
  ["Encontramos nuestro camino de regreso 🗺️ siguiendo las marcas del sendero.", "We found our way back 🗺️ by following the trail markers."],
  ["Aprendió a tejer 🧶 viendo tutoriales en línea.", "She learned to knit 🧶 by watching online tutorials."],
  ["Construyeron un negocio exitoso 🏢 ofreciendo productos de calidad.", "They built a successful business 🏢 by offering quality products."],
  ["Reducí el estrés 😌 practicando meditación de atención plena.", "I reduced stress 😌 by practicing mindfulness meditation."],
  ["Reparó la bicicleta averiada 🚲 reemplazando las piezas desgastadas.", "He fixed the broken bicycle 🚲 by replacing the worn-out parts."],
  ["Mantuvo la salud 🏋️‍♀️ haciendo ejercicio regularmente y comiendo bien.", "She stayed healthy 🏋️‍♀️ by exercising regularly and eating well."],
  ["Exploraron nuevas culturas 🌍 viajando a diferentes países.", "They explored new cultures 🌍 by traveling to different countries."],
  ["Mantuve el calor durante el invierno ❄️ vistiendo capas de ropa.", "I stayed warm during winter ❄️ by wearing layers of clothing."],
  ["Capturó fotos impresionantes 📸 experimentando con la iluminación.", "He captured stunning photos 📸 by experimenting with lighting."],
  ["Descubrió tesoros ocultos 💎 usando un detector de metales en la playa.", "She discovered hidden treasures 💎 by metal detecting on the beach."],
  ["Se convirtieron en activistas ambientales 🌿 creando conciencia sobre la contaminación.", "They became environmental activists 🌿 by raising awareness about pollution."],
  ["Me mantuve conectado con amigos y familiares 👪 usando redes sociales.", "I stayed connected with friends and family 👪 by using social media."],
  ["Aprendió a hacer malabares 🤹‍♂️ practicando con pelotas y clavas.", "He learned to juggle 🤹‍♂️ by practicing with balls and clubs."],
  ["Mantuvo la organización 🗂️ creando un horario detallado.", "She stayed organized 🗂️ by creating a detailed schedule."],
  ["Lograron el equilibrio entre el trabajo y la vida ⚖️ estableciendo límites.", "They achieved work-life balance ⚖️ by setting boundaries."],
  ["Disfruté de deliciosas comidas 🍽️ probando recetas de diferentes cocinas.", "I enjoyed delicious meals 🍽️ by trying recipes from different cuisines."],
  ["Expresó su arte a través de la pintura 🎨 creando pinturas y esculturas.", "She expressed herself through art 🎨 by painting and sculpting."],
];

document.getElementById('by_ing').addEventListener("click", (e) => {
  let btn_test = document.getElementById("by_ing");
  if (!lista_all.includes(by_ing)) {
    lista_all.push(by_ing);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(by_ing);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm