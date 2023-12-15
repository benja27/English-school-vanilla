import { random } from "../random.js";
import { lista_all } from "../sentences.js";



// ====================================



export let vocabulario= [

  
  ['En la tienda de ropa puedes comprar ropa. 👕👖👗', 'At the clothing store, you can buy clothes. 👕👖👗'],
  ['En las fábricas encuentras máquinas y trabajadores. 🏭👷', 'In factories, you find machines and workers. 🏭👷'],
  ['En estación de bomberos encuentras bomberos y carros de bomberos. 🚒👨‍🚒', 'At the fire station, you find firefighters and fire trucks. 🚒👨‍🚒'],
  ['En las librerías encuentras estantes con libros. 📚📖', 'In bookstores, you find shelves with books. 📚📖'],
  ['En el hospital encuentras doctores, medicinas, ambulancias y hacen operaciones. 🏥💉🚑', 'In the hospital, you find doctors, medicines, ambulances, and they perform surgeries. 🏥💉🚑'],
  ['En la estación de policía encuentras policías y patrullas. 🚓👮', 'At the police station, you find police officers and patrol cars. 🚓👮'],
  ['Los rascacielos son muy altos los encuentras en las grandes ciudades. 🏙️🏢', 'Skyscrapers are very tall; you find them in big cities. 🏙️🏢'],
  ['En las iglesias encuentras sacerdotes y puedes ir a rezar y a escuchar misa. ⛪🙏', 'In churches, you find priests, and you can go to pray and attend mass. ⛪🙏'],
  ['En el cine puedes ir a ver películas. 🎥🍿', 'At the cinema, you can go to watch movies. 🎥🍿'],
  ['En la cafetería puedes ir a comprar un café. ☕', 'In the cafeteria, you can go to buy a coffee. ☕'],
  ['En el hotel puedes rentar una habitación. 🏨🛏️', 'At the hotel, you can rent a room. 🏨🛏️'],
  ['En la oficina de correos puedes enviar un paquete o mandar una carta. 📮✉️', 'At the post office, you can send a package or mail a letter. 📮✉️'],
  ['En el aeropuerto puedes volar a otros países, en aviones, no olvides tu equipaje, a veces necesitas un pasaporte o una visa. ✈️🌍🛅', 'At the airport, you can fly to other countries in airplanes; don\'t forget your luggage, sometimes you need a passport or a visa. ✈️🌍🛅'],
  ['En el acuario puedes ir a ver los peces que están en peceras. 🐠🦑', 'At the aquarium, you can go to see the fish that are in fish tanks. 🐠🦑'],
  ['En el dentista puedes ir a arreglarte los dientes. 😁🦷', 'At the dentist, you can go to get your teeth fixed. 😁🦷'],
  ['En la florería puedes comprar flores, como rosas, margaritas y girasoles. 💐🌹🌼', 'At the florist\'s, you can buy flowers like roses, daisies, and sunflowers. 💐🌹🌼'],
  ['En la escuela encuentras salones, pizarrones y estacionamiento. 🏫📚🅿️', 'In school, you find classrooms, chalkboards, and parking. 🏫📚🅿️'],
  ['En el car wash puedes ir lavar tu coche. 🚗🧽', 'At the car wash, you can go to wash your car. 🚗🧽'],
  ['En la granja puedes encontrar animales, como gallinas y caballos. 🐔🐎', 'On the farm, you can find animals like chickens and horses. 🐔🐎'],
  ['En la lavandería puedes encontrar lavadoras, detergente, y puedes lavar tu ropa. 🧺🧴👚', 'In the laundromat, you can find washing machines, detergent, and you can wash your clothes. 🧺🧴👚'],
  ['En la guardería te pueden cuidar a tus hijos. 👶👩‍🏫', 'At the daycare, they can take care of your children. 👶👩‍🏫'],
  ['En el shopping center puedes comprar cosas. 🛍️', 'At the shopping center, you can buy things. 🛍️'],
  ['En el centro comercial puedes comprar cosas y también tiene estacionamiento. 🚗🅿️', 'In the shopping mall, you can buy things, and it also has parking. 🚗🅿️'],
  ['En un departamento puedes vivir. 🏢🏠', 'In an apartment, you can live. 🏢🏠'],
  ['En la panadería puedes comprar pan y pasteles, tienen de varios sabores como chocolate y vainilla, algunos pasteles tienen chantilly. 🍰🍞', 'In the bakery, you can buy bread and cakes; they have various flavors like chocolate and vanilla, and some cakes have whipped cream. 🍰🍞'],
  ['En el banco puedes guardar tu dinero, pedir un préstamo, puedes hablar con un asesor o pasar a ventanilla para ser atendido. 🏦💰👩‍💼', 'At the bank, you can save your money, request a loan, speak with an advisor, or go to the teller for assistance. 🏦💰👩‍💼'],
  ['En la gasolinera puedes comprar gas para tu coche. Encuentras bombas de gasolina que se conectan a tu coche a través de una manguera. ⛽🚗👨‍🔧', 'At the gas station, you can buy gas for your car. You find gas pumps that connect to your car via a hose. ⛽🚗👨‍🔧'],
  ['En el townhall encuentras el ayuntamiento, aquí encuentras funcionarios que hacen actividades administrativas. 🏛️🏢👨‍💼', 'In the townhall, you find the city hall; here, you find officials who perform administrative activities. 🏛️🏢👨‍💼'],
  ['En el zoológico encuentras animales encerrados en jaulas. 🦁🦓🐘', 'At the zoo, you find animals enclosed in cages. 🦁🦓🐘'],
  ['En la estación de autobuses puedes comprar un boleto para viajar. 🚌🎫', 'At the bus station, you can buy a ticket to travel. 🚌🎫'],
  ['En la universidad puedes estudiar una licenciatura y obtener un certificado. 🎓📜', 'At the university, you can study for a bachelor\'s degree and earn a certificate. 🎓📜'],
  ['En la tienda de comestibles puedes comprar la despensa. 🛒🍏', 'At the grocery store, you can buy groceries. 🛒🍏'],
  ['En el museo puedes encontrar esculturas y pinturas. 🏛️🎨', 'In the museum, you can find sculptures and paintings. 🏛️🎨']



];



// ====================================



document.getElementById('vocabulario').addEventListener("click", (e) => {
  let btn_test = document.getElementById("vocabulario");
  if (!lista_all.includes(vocabulario)) {
    lista_all.push(vocabulario);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(vocabulario);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm