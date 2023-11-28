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

const stateControl = storeState();

function handleSampleForm() {
  event.preventDefault();
  document.getElementById("soil-value").innerText = null;
  document.getElementById("water-value").innerText = null;
  document.getElementById("light-value").innerText = null;
  const soilP = document.createElement("p");
  pTag.append(document.getElementById("blue-food").value);
  document.getElementById("soil-value").append(soilP);document.getElementById("soil-value").innerText = null;
  const waterP = document.createElement("p");
  pTag.append(document.getElementById("hydrate").value);
  document.getElementById("water-value").append(waterP);
  const lightP = document.createElement("p");
  pTag.append(document.getElementById("sunlight").value);
  document.getElementById("light-value").append(lightP);
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
    increasePlantImgSize(newState.soil);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('hydrate').onclick = function() {
    const newState = stateControl(hydrate);
    increasePlantImgSize(5);
    document.getElementById('water-value').innerText = `Water: ${currentState.water}`;
  };
  
  // document.getElementById('sunlight').onclick = function() {
  //   const newState = stateControl(sunlight);
  //   increasePlantImgSize(5);
  //   document.getElementById('light-value').innerText = `Sunlight: ${currentState.light}`;
  // };
  
  // document.getElementById('daisy').onclick = function() {
  //   const newState = stateControl(hydrate);
  //   increasePlantImgSize(5);
  //   document.getElementById('water-value').innerText = `Water: ${currentState.water}`;
  // };
};


