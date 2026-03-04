const colors = [
  "#2196f3", // azul
  "#d6c533", // amarillo
  "#fe82ab", // rosa
  "#5cba5f", // verde
  "#181717"  // negro
];

function randomColor(){
return colors[Math.floor(Math.random()*colors.length)]
}

function spin(elementId){

let element = document.getElementById(elementId)

let duration = 1500
let interval = 90
let start = Date.now()

let timer = setInterval(()=>{

element.style.background=randomColor()

if(Date.now()-start>duration){
clearInterval(timer)
element.style.background=randomColor()
}

},interval)

}

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

let limb = card.dataset.limb
spin(limb)

})

})