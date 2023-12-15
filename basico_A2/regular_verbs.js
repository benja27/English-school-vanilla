import { random } from "../random.js";
import { lista_all } from "../sentences.js";

export let regular_verbs = [
  ["aceptar", "accepted"],
  ["agregar", "added"],
  ["llegar", "arrived"],
  ["preguntar", "asked"],
  ["creer", "believed"],
  ["llamar", "called"],
  ["cambiar", "changed"],
  ["limpiar", "cleaned"],
  ["cerrar", "closed"],
  ["comparar", "compared"],
  ["cocinar", "cooked"],
  ["decidir", "decided"],
  ["entregar", "delivered"],
  ["descubrir", "discovered"],
  ["ganar", "earned"],
  ["terminar", "ended"],
  ["disfrutar", "enjoyed"],
  ["esperar", "expected"],
  ["explicar", "explained"],
  ["arreglar", "fixed"],
  ["suceder", "happened"],
  ["ayudar", "helped"],
  ["esperar con optimismo", "hoped"],
  ["mejorar", "improved"],
  ["incluir", "included"],
  ["invitar", "invited"],
  ["saltar", "jumped"],
  ["golpear", "kicked"],
  ["besar", "kissed"],
  ["reír", "laughed"],
  ["aprender", "learned"],
  ["gustar", "liked"],
  ["vivir", "lived"],
  ["mirar", "looked"],
  ["amar", "loved"],
  ["mover", "moved"],
  ["necesitar", "needed"],
  ["abrir", "opened"],
  ["jugar", "played"],
  ["preparar", "prepared"],
  ["leer", "read (pronounced as red)"],
  ["recordar", "remembered"],
  ["regresar", "returned"],
  ["empezar", "started"],
  ["estudiar", "studied"],
  ["hablar", "talked"],
  ["viajar", "traveled"],
  ["intentar", "tried"],
  ["esperar", "waited"],
  ["caminar", "walked"],
  ["querer", "wanted"]
];


document.getElementById('regular_verbs').addEventListener("click", (e) => {
  let btn_test = document.getElementById("regular_verbs");
  if (!lista_all.includes(regular_verbs)) {
    lista_all.push(regular_verbs);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(regular_verbs);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


// source http://original.ompersonal.com.ar/ADVANCED/unit1/page5.htm