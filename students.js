import { random } from "./random.js";

// let lista = []
export let lista = window.lista = []

export function reg_students(){
  let students = Array.from( document.getElementsByClassName('students') ) 

  // let lista = []
  
  students.forEach(ele => {
    if (ele.value !== "" && !lista.includes(ele.value) ) {      
      window.lista.push(`${ele.value} 😀` )
    }

  });  
  // console.log(window.lista)
  // return lista

}

// window.lista_de_estudiantes = reg_students()

// console.log(window.lista_de_estudiantes)


export function randomStudent( lista ){  
  // console.log((window.lista).length)

  let n = random(0, lista.length )

  console.log(n)

  let student = document.getElementById('student')

  student.innerHTML = lista[n]

}




