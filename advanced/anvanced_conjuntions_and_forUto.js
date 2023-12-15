import { random } from "../random.js";
import { lista_all } from "../sentences.js";
 
export let advanced_conjuncion = [
  ["Traje mi computadora portátil para trabajar en el proyecto.", "I brought my laptop for me to work on the project."],
  ["Puedes tomar prestados mis apuntes para que tú estudies.", "You can borrow my notes for you to study."],
  ["Él ahorró algo de dinero para que él compre un teléfono nuevo.", "He saved some money for him to buy a new phone."],
  ["Ella preparó una cena deliciosa para que ella la disfrute.", "She made a delicious dinner for her to enjoy."],
  ["Limpiamos la casa para que nosotros tengamos un espacio limpio.", "We cleaned the house for us to have a clean living space."],
  ["Reparaste el automóvil para que tú conduzcas al trabajo.", "You fixed the car for you to drive to work."],
  ["Prepararon una fiesta sorpresa para que ellos celebren su aniversario.", "They prepared a surprise party for them to celebrate their anniversary."],
  ["Ella cocinó su comida favorita para que ella la disfrutara.", "She cooked her favorite meal for her to enjoy it."],
  ["Hice ejercicio esta mañana para que yo me sintiera más enérgico.", "I worked out this morning for me to feel more energetic."],
  ["Compré un libro nuevo para que yo lo lea durante las vacaciones.", "I bought a new book for me to read during the holidays."],
  ["Plantaron flores en el jardín para que el jardín luzca más colorido.", "They planted flowers in the garden for the garden to look more colorful."],
  ["Ella reservó un boleto de avión para que ella visite a su familia.", "She booked a plane ticket for her to visit her family."],
  ["Estudiamos mucho para que nosotros obtuviéramos buenas calificaciones en el examen.", "We studied a lot for us to get good grades on the exam."],
  ["Compré ingredientes para hacer pastel para que mis amigos lo disfruten.", "I bought ingredients to make a cake for my friends to enjoy."],
  ["Arreglé la sala de estar para que los invitados se sientan cómodos.", "I arranged the living room for the guests to feel comfortable."],
  ["El artista pintó un cuadro hermoso para que la gente lo admire.", "The artist painted a beautiful picture for people to admire."],
  ["Compramos entradas para el concierto para que nosotros escuchemos a la banda en vivo.", "We bought tickets to the concert for us to listen to the band live."],
  ["Los padres prepararon una sorpresa para que su hijo se sienta especial en su cumpleaños.", "The parents prepared a surprise for their son to feel special on his birthday."],
  ["Hicieron un pastel de cumpleaños para que todos lo compartieran en la fiesta.", "They made a birthday cake for everyone to share at the party."],
  ["Ella escribió un poema para que sus sentimientos queden plasmados en papel.", "She wrote a poem for her feelings to be captured on paper."],
  ["Estudié mucho para poder aprobar el examen.", "I studied hard so that I could pass the exam."],
  ["Ella ahorró dinero para poder comprar un coche nuevo.", "She saved money so that she could buy a new car."],
  ["Trabajaron hasta tarde en la noche para poder terminar el proyecto a tiempo.", "They worked late into the night so that they could finish the project on time."],
  ["Se puso un abrigo para no resfriarse.", "He wore a coat so that he wouldn't catch a cold."],
  ["Apagamos las luces para que el bebé pudiera dormir tranquilamente.", "We turned off the lights so that the baby could sleep peacefully."],
  ["Escribió una lista de tareas para que no se olvidara de sus deberes.", "She wrote a to-do list so that she wouldn't forget her tasks."],
  ["Pidieron comida en línea para no tener que cocinar esta noche.", "They ordered food online so that they wouldn't have to cook tonight."],
  ["Puso una alarma para no quedarse dormido.", "He set an alarm so that he wouldn't oversleep."],
  ["Practicaron sus líneas para la obra de teatro para poder actuar bien.", "They practiced their lines for the play so that they could perform well."],
  ["Empacó su paraguas para no mojarse bajo la lluvia.", "She packed her umbrella so that she wouldn't get wet in the rain."],
  ["Estudié con concentración para obtener buenas calificaciones.", "I studied with focus so that I could get good grades."],
  ["Organizaron una reunión temprano para discutir el plan.", "They scheduled a meeting early so that they could discuss the plan."],
  ["Prepararon el escenario cuidadosamente para el concierto.", "They prepared the stage carefully so that the concert would go well."],
  ["Compraron ingredientes frescos para cocinar una comida deliciosa.", "They bought fresh ingredients to cook a delicious meal."],
  ["Se ejercitó todos los días para mantenerse en forma.", "He exercised every day to stay in shape."],
  ["Llevó un paraguas en caso de que lloviera.", "She carried an umbrella in case it rained."],
  ["Estudiaron juntos para ayudarse mutuamente.", "They studied together to help each other."],
  ["Hizo ejercicio intensivo para mejorar su resistencia.", "He did intensive exercise to improve his endurance."],
  ["Comieron ligero para no sentirse llenos.", "They ate lightly so that they wouldn't feel full."],
  ["Se inscribieron en un curso en línea para aprender un nuevo idioma.", "They enrolled in an online course to learn a new language."],
  ["Usaron auriculares para bloquear el ruido.", "They used headphones to block out the noise."],
  ["Planearon un viaje para explorar un país extranjero.", "They planned a trip to explore a foreign country."],
  ["Estudiaron historia para comprender el pasado.", "They studied history to understand the past."],
  ["Desarrollaron una aplicación móvil para facilitar la vida de las personas.", "They developed a mobile app to make people's lives easier."],
  ["Escogieron ropa adecuada para el clima frío.", "They chose appropriate clothing for the cold weather."],
  
  
  ["He estado aprendiendo inglés durante tres años.", "I've been learning English for three years."],
  ["Desde que me mudé a esta ciudad, he hecho muchos amigos.", "Since I moved to this city, I've made many friends."],
  ["¿Alguna vez has viajado a Europa?", "Have you ever traveled to Europe?"],
  ["Ella nunca ha probado sushi antes.", "She has never tasted sushi before."],
  ["Acabo de terminar de leer ese libro anoche.", "I just finished reading that book last night."],
  ["Él todavía está trabajando en su proyecto.", "He's still working on his project."],
  ["Todavía no he terminado mi tarea.", "I haven't finished my homework yet."],
  ["Hemos estado esperando el autobús durante siglos.", "We've been waiting for the bus for ages."],
  ["Desde que nos mudamos a una casa más grande, tenemos más espacio.", "Since we moved to a bigger house, we have more space."],
  ["¿Alguna vez has conocido a una persona famosa?", "Have you ever met a famous person?"],
  ["Acabo de escuchar las noticias en la radio.", "I just heard the news on the radio."],
  ["Él todavía está estudiando para el examen.", "He's still studying for the exam."],
  ["La reunión aún no ha comenzado.", "The meeting hasn't started yet."]
  
]

document.getElementById('advanced_conj').addEventListener("click", (e) => {
  let btn_test = document.getElementById("advanced_conj");
  if (!lista_all.includes(advanced_conjuncion)) {
    lista_all.push(advanced_conjuncion);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(advanced_conjuncion);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});







