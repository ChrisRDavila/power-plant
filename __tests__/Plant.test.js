import { hydrate } from "../src/js/Plant.js"

describe(hydrate, () => {
  
  let plant;
  beforeEach(() => {
    plant = { 
      water: 0
    }
  });

  test("should change state for property of water", () => {
    const newStatePlant = hydrate(plant);
    expect(newStatePlant.water).toEqual(1);
  });



})


// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };