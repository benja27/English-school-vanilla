import { random } from "../random.js"

export let add_basic_audio = []


let aud = document.getElementById('audio_basic').addEventListener('click',e=>{
  aud = document.getElementById('src_basic_audio')
  let n = random(1, 67)
  console.log(n)
  if(n < 10){
    n = '00'+n               
    aud.src = `http://original.ompersonal.com.ar/omquestion/elementary/question${n}.mp3`
  }else if (n > 9 && n < 99){
    n = '0'+n               
    aud.src = `http://original.ompersonal.com.ar/omquestion/elementary/question${n}.mp3`
  }else{
    aud.src = `http://original.ompersonal.com.ar/omquestion/intermediate/question${n}.mp3`
  }
})   


let aud_inter = document.getElementById('audio_inter').addEventListener('click',e=>{
  aud_inter = document.getElementById('src_inter_audio')
  let n = random(68, 134)
  console.log(n)
  
  if (n < 100){
    n = '0'+n               
    aud_inter.src = `http://original.ompersonal.com.ar/omquestion/intermediate/question${n}.mp3`
  }else{
    aud_inter.src = `http://original.ompersonal.com.ar/omquestion/intermediate/question${n}.mp3`
  }
})   

let aud_advance = document.getElementById('audio_avanzado').addEventListener('click',e=>{
  aud_advance = document.getElementById('src_advance_audio')
  let n = random(135, 200)
  console.log(n)
  
  // if (n < 100){
  //   n = '0'+n               
  //   aud_advance.src = `http://original.ompersonal.com.ar/omquestion/intermediate/question${n}.mp3`
  // }else{
    aud_advance.src = `http://original.ompersonal.com.ar/omquestion/advanced/question${n}.mp3`
  // }
})   



