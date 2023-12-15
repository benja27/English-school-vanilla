import {
  reg_students,
  randomStudent,
  lista as lista_students,
} from "./students.js";
import { random } from "./random.js";
import { lista_all, test } from "./sentences.js";
import { frases } from "./basicas.js";
import { tenses } from "./tenses.js";
import { basicas_esp } from "./practice/basicas_esp.js";
import { used_to_spa } from "./intermedio-b1/used_to.js";
import { regular_verbs } from "./basico_A2/regular_verbs.js";
import { reorder_basic } from "./practice/reorder_basic.js";
import { adverbs_of_quantity } from "./practice/advers_of_quantity.js";
import { condicionales } from "./practice/condicionales.js";
import { add_basic_audio } from "./practice/basic_audios.js";
import { irregulares_past } from "./basico_A2/verbos_irregulares.js";
import { mode } from "./practice/basics.js";
import { vocabulario } from "./basico_A2/vocabulario.js";

//=========================================================================== 
//================================== NIVEL B1
//=========================================================================== 

import { be_used_to } from "./intermedio-b1/be_used_to.js";
import { used_to } from "./intermedio-b1/used_to2.js";
import { yet_still } from "./intermedio_b2/still_yet.js";
import { should_could } from "./intermedio-b1/should_could.js";
import { indirect_questions } from "./intermedio-b1/indirect_questions.js";
import { too_and_enough } from "./intermedio-b1/too_and_enough.js";
import { antonimos } from "./intermedio-b1/antonimos.js";
import { expressing_desires } from "./intermedio-b1/4_expressing_desires.js";
import { simple_past_vs_present_perfect } from "./intermedio-b1/5_simple_past_vs_present_perfect.js";
import { sequence_adverbs } from "./intermedio-b1/5_Sequence%20adverbs.js";
import { collocations } from "./intermedio-b1/6_collocations.js";
import { be_going_to } from "./intermedio-b1/6_be_going_to.js";
import { modals_for_necessity_and_suggestion } from "./intermedio-b1/6_modals_for_nessecity_and_suggestion.js";


import { questions_simple } from "/practice/preguntas_simples.js";
import { basicos_conjuncion } from "./en proceso/basicos_conjuncion.js";
import { presentPerfectSentences } from "./ideas/present_perfect.js";
import { past_perfect_sentences } from "./ideas/past_perfect.js";
import { advanced_conjuncion } from "./advanced/anvanced_conjuntions_and_forUto.js";
import { countable_uncountable_nouns } from "./intermedio-b1/adverbs_of_quantity.js";



// =========================================================================
// INTERMEDIO AVANZADO b2


import { by_ing } from "./intermedio_b2/by_ing.js";
import { would_rather } from "./intermedio_b2/would_rather.js";
import { adverbial_clauses_of_time } from "./intermedio_b2/adverb_clauses_of_time.js";
import { gerund_phrases } from "./intermedio_b2/gerund_phrases.js";
import { expresing_regrets } from "./intermedio_b2/expresing_regrets.js";




// 
document.getElementById("register").addEventListener("click", (e) => {
  reg_students(lista_students);
  console.log(lista_students);
});

document.getElementById("randomS").addEventListener("click", (e) => {
  randomStudent(lista_students);
});


// sentences
let btn_test = document.getElementById("basicas");

btn_test.addEventListener("click", (e) => {
  if (!lista_all.includes(frases)) {
    lista_all.push(frases);
    console.log(btn_test);
    btn_test.style.backgroundColor = "red";
  } else {
    const index = lista_all.indexOf(frases);
    if (index !== -1) {
      lista_all.splice(index, 1);
    }
    btn_test.style.backgroundColor = "blue";
  }

  console.log(lista_all);
});


document.getElementById("randomSentence").addEventListener("click", (e) => {
  let n = random( 0, lista_all.length  )
  let set = lista_all[n]
  // console.log(set)
  let n2 = random(0, set.length)
  let excersise = set[n2]

  console.log(excersise)

  if(excersise.length == 2){
    document.getElementById('sentence').innerHTML = excersise[0]
    // document.getElementById('sentence2').innerHTML = excersise[1]
    // document.getElementById('show_answer').addEventListener("click", (e) => {
    //   document.getElementById('sentence2').innerHTML = excersise[1]
    // })
  }else{
    document.getElementById('sentence').innerHTML = excersise
  }


  document.getElementById('show_answer').addEventListener("click", (e) => {
    document.getElementById('sentence2').innerHTML = excersise[1]
  })

  console.log(excersise)
  
});
