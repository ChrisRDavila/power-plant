import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeState } from "../src/js/Plant.js";
import { storeState } from "../src/js/Plant.js";
import { daisy } from "../src/js/Plant.js";
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

function increasePlantImgSize(amount) {
  const plantImg = document.getElementById("plantImg");
  const currentPlantSize = plantImg.style.height;
  let numericalCurrentPlantSize = currentPlantSize.substring(0, currentPlantSize.length - 2);
  let newPlantSize = parseInt(numericalCurrentPlantSize) + parseInt(amount);
  plantImg.style.height = `${newPlantSize}px`;
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
  
  document.getElementById('grow-daisy').onclick = function() {
    const newDaisy = plantType({})("daisy");
    document.getElementById('name-value').innerText = `${newDaisy.name}`;
    document.getElementById("plantImg").setAttribute("src","./assets/images/daisy.png");
  };

  document.getElementById('grow-rose').onclick = function() {
    const newRose = plantType({})("rose");  
    document.getElementById('name-value').innerText = `${newRose.name}`;
    document.getElementById("plantImg").setAttribute("src","./assets/images/rose.png");
  };

  document.getElementById('happiness').onclick = function() {
    const newDaisy = plantType({})(happier);                  
    console.log(newDaisy);
    document.getElementById('happiness-value').innerText = `${newDaisy.happiness}`;    document.getElementById("plantImg").setAttribute("src","./assets/images/daisy.png");
  };

  
};


