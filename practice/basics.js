export let mode = [

]

import { random } from "../random.js"

let present = [
  'present simple',
  'present neg',
  'present int',
  'present neg-int'  
]
let past = [
  'past simple',
  'past neg',
  'past int',
  'past neg-int'
  // 'past going to',
  // 'past going to - neg',
  // 'past going to - int',
  // 'past going to - neg -int'

]
let future = [
  'future simple',
  'future neg',
  'future int',
  'future neg-int',
  'going to',
  'going to - neg',
  'going to neg-int'  
]

document.getElementById('present').addEventListener('click',e=>{
  let mode = document.getElementById('mode-b')
  mode.textContent = present[ random( 0, present.length ) ]
})
document.getElementById('past').addEventListener('click',e=>{
  let mode = document.getElementById('mode-b')
  mode.textContent = past[ random( 0, present.length ) ]
})
document.getElementById('future').addEventListener('click',e=>{
  let mode = document.getElementById('mode-b')
  mode.textContent = future[ random( 0, present.length ) ]
})