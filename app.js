const colors = [
{value:"#2196f3", name:"azul"},
{value:"#d6c533", name:"amarillo"},
{value:"#fe82ab", name:"rosa"},
{value:"#5cba5f", name:"verde"},
{value:"#181717", name:"negro"}
];

const clickSound = new Audio("sounds/pop.flac");
clickSound.preload = "auto";

function randomColor(){
  return colors[Math.floor(Math.random()*colors.length)]
}

function speak(text){

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "es-ES";
  speech.rate = 0.9;
  speech.pitch = 1.1;

  window.speechSynthesis.speak(speech);

}

function spin(elementId){
  const element = document.getElementById(elementId);

  const duration = 1500;
  const interval = 90;
  const start = Date.now();

  const timer = setInterval(() => {
    const c = randomColor();
    element.style.background = c.value;

    if (Date.now() - start > duration) {
      clearInterval(timer);

      const final = randomColor();
      element.style.background = final.value;

      // decir el color final en voz alta
      window.speechSynthesis.cancel(); // para que no se solapen voces
      speak(final.name);
    }
  }, interval);
}

document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click",()=>{

    clickSound.currentTime = 0;
    clickSound.volume = 0.4;
    clickSound.play();

    spin(card.dataset.limb);

  })
})