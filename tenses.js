import { random } from "./random.js"
export let tenses = ['Present', 'Past' , 'Will', 'Going to']

export let modes = [
  'Afirmative',
  'Negative',  
  // 'Interrogative',
  // 'Negative interrogative'
]

document.getElementById('both').addEventListener('click',e=>{
  document.getElementById('test').textContent = `
  ${tenses[random(0, tenses.length)] } -
  ${modes[random(0, modes.length)] }
  `
})

document.getElementById('perfectos').addEventListener('click',e=>{
  let perfectos = document.getElementById('perfectos')  

  console.log(tenses.length)

  if (tenses.length > 4){
    tenses.splice(4,3)
    perfectos.style.backgroundColor = 'blue'
  }else{
    tenses.push('past perfect','present perfect', 'future perfect')
    perfectos.style.backgroundColor = 'red'
  }

  console.log(tenses)

})