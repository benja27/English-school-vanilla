import { lista_all } from "../sentences.js";

export let irregulares_past = [
  ["surgir", ["arise", "arose"]],
  ["despertar", ["awake", "awoke"]],
  ["ser", ["be", "was/were"]],
  ["soportar", ["bear", "bore"]],
  ["golpear", ["beat", "beat"]],
  ["convertirse en", ["become", "became"]],
  ["empezar", ["begin", "began"]],
  ["doblar", ["bend", "bent"]],
  ["apostar", ["bet", "bet"]],
  ["morder", ["bite", "bit"]],
  ["soplar", ["blow", "blew"]],
  ["romper", ["break", "broke"]],
  ["traer", ["bring", "brought"]],
  ["construir", ["build", "built"]],
  ["quemar", ["burn", "burnt/burned"]],
  ["comprar", ["buy", "bought"]],
  ["atrapar", ["catch", "caught"]],
  ["elegir", ["choose", "chose"]],
  ["venir", ["come", "came"]],
  ["costar", ["cost", "cost"]],
  ["cortar", ["cut", "cut"]],
  ["hacer", ["do", "did"]],
  ["dibujar", ["draw", "drew"]],
  ["beber", ["drink", "drank"]],
  ["conducir", ["drive", "drove"]],
  ["comer", ["eat", "ate"]],
  ["caer", ["fall", "fell"]],
  ["sentir", ["feel", "felt"]],
  ["pelear", ["fight", "fought"]],
  ["encontrar", ["find", "found"]],
  ["volar", ["fly", "flew"]],
  ["olvidar", ["forget", "forgot"]],
  ["perdonar", ["forgive", "forgave"]],
  ["helar", ["freeze", "froze"]],
  ["obtener", ["get", "got"]],
  ["dar", ["give", "gave"]],
  ["ir", ["go", "went"]],
  ["crecer", ["grow", "grew"]],
  ["tener", ["have", "had"]],
  ["oir", ["hear", "heard"]],
  ["esconder", ["hide", "hid"]],
  ["golpear", ["hit", "hit"]],
  ["sostener", ["hold", "held"]],
  ["herir", ["hurt", "hurt"]],
  ["guardar", ["keep", "kept"]],
  ["saber", ["know", "knew"]],
  ["dejar", ["leave", "left"]],
  ["prestar", ["lend", "lent"]],
  ["permitir", ["let", "let"]],
  ["mentir", ["lie", "lay"]],
  ["perder", ["lose", "lost"]]
];


document.getElementById('past_irregular').addEventListener("click", (e) => {
  let btn_test = document.getElementById("past_irregular");
  if (!lista_all.includes(irregulares_past)) {
    lista_all.push(irregulares_past);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(irregulares_past);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});

