import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeState } from "../src/js/Plant.js";
import { storeState } from "../src/js/Plant.js";
import { growPlant } from "../src/js/Plant.js";
import { blueFood } from "../src/js/Plant.js";
import { hydrate } from "../src/js/Plant.js";
import { light } from "../src/js/Plant.js";
import { killDaisy } from "../src/js/Plant.js";
import { plantType } from "../src/js/Plant.js";
import { happier } from "../src/js/Plant.js";


const stateControl = storeState();

function handleSampleForm() {
  event.preventDefault();
  document.getElementById("soil-value").innerText = null;
  document.getElementById("water-value").innerText = null;
  document.getElementById("light-value").innerText = null;
  document.getElementById("name-value").innerText = null;
  document.getElementById("happiness-value").innerText = null;
  const soilP = document.createElement("p");
  pTag.append(document.getElementById("blue-food").value);
  document.getElementById("soil-value").append(soilP);document.getElementById("soil-value").innerText = null;
  const waterP = document.createElement("p");
  pTag.append(document.getElementById("hydrate").value);
  document.getElementById("water-value").append(waterP);
  const lightP = document.createElement("p");
  pTag.append(document.getElementById("sunlight").value);
  document.getElementById("light-value").append(lightP);
  const nameP = document.createElement("p");
  pTag.append(document.getElementById("daisy").value);
  document.getElementById("name-value").append(lightP);
  const happinessP = document.createElement("p");
  pTag.append(document.getElementById("happiness").value);
  document.getElementById("happiness-value").append(happinessP);
}

let currentSize = 300;
let targetSize = 10;
let animationID;

function shrinkPlant() {
  const plantImg = document.getElementById("plantImg");

  function animate() {
    if (currentSize <= targetSize) {
      cancelAnimationFrame(animationID);
      killPlant();
    } else {
      currentSize -= .25 ;
      plantImg.style.height = `${currentSize}px`;
      animationID = requestAnimationFrame(animate);
    }
  }
  animate();
}

function increasePlantImgSize(amount) {
  // const plantImg = document.getElementById("plantImg");
  // const currentPlantSize = plantImg.style.height;
  // let numericalCurrentPlantSize = currentPlantSize.substring(0, currentPlantSize.length - 2);
  // let newPlantSize = parseInt(numericalCurrentPlantSize) + parseInt(amount);
  // plantImg.style.height = `${newPlantSize}px`;
  console.log(plantImg.style.height);
  currentSize += parseInt(amount);
}

function newPlant() {
  document.getElementById("plantImg").removeAttribute("class");
  document.getElementById("kill-plant").removeAttribute("class");
  document.getElementById("new-plant").setAttribute("class","hidden");
}

function killPlant() {
  document.getElementById("plantImg").setAttribute("class","deadPlant");
  document.getElementById("kill-plant").setAttribute("class","hidden");
  document.getElementById("new-plant").removeAttribute("class");
}

window.onload = function() {

  document.getElementById('blue-food').onclick = function() {
    const newState = stateControl(blueFood);
    increasePlantImgSize(50);
    document.getElementById('soil-value').innerText = `${newState.soil}`;
  };

  document.getElementById('hydrate').onclick = function() {
    const newState = stateControl(hydrate);
    increasePlantImgSize(10);
    document.getElementById('water-value').innerText = `${newState.water}`;
  };
  
  document.getElementById('sunlight').onclick = function() {
    const newState = stateControl(light);
    increasePlantImgSize(10);
    document.getElementById('light-value').innerText = `${newState.light}`;
  };
  
  document.getElementById('select-daisy').onclick = function() {
    killPlant();
    newPlant();
    shrinkPlant();
    const newDaisy = plantType({})("daisy");
    document.getElementById('name-value').innerText = `${newDaisy.name}`;
    document.getElementById('happiness-value').innerText = `${newDaisy.happiness}`
    const plantImg = document.getElementById("plantImg");
    plantImg.setAttribute("src","./assets/images/daisy.png");
    plantImg.removeAttribute("class");
  };

  document.getElementById('select-rose').onclick = function() {
    killPlant();
    newPlant();
    shrinkPlant();
    const newRose = plantType({})("rose");  
    document.getElementById('name-value').innerText = `${newRose.name}`;
    const plantImg = document.getElementById("plantImg");
    plantImg.setAttribute("src","./assets/images/rose.png");
    plantImg.removeAttribute("class");
  };

  document.getElementById('select-houseplant').onclick = function() {
    killPlant();
    newPlant();
    shrinkPlant();
    const newHouseplant = plantType({})("houseplant");  
    document.getElementById('name-value').innerText = `${newHouseplant.name}`;
    const plantImg = document.getElementById("plantImg");
    plantImg.setAttribute("src","./assets/images/houseplant.png");
    plantImg.removeAttribute("class");
  };

  document.getElementById('happiness').onclick = function() {
    const newState = stateControl(happier);
    happier(newState);                  
    console.log(newState);
    document.getElementById('happiness-value').innerText = `${newState.happiness}`;
    //     document.getElementById("plantImg").setAttribute("src","./assets/images/daisy.png");
  };

  document.getElementById('kill-plant').onclick = function() {
    currentSize = 9;
  };
};


