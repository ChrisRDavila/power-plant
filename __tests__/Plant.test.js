import { changePlantState } from "../src/js/Plant.js"

describe(changePlantState, () => {
  
    let plant;
  beforeEach(() => {
    plant = { 
      water: 0
    }
  });

  test('should change state for selected property of plant, and return new state', () => {
    const property = "water";
    const newStatePlant = changePlantState(plant, property);
    expect(newStatePlant[property]).toEqual(1)
  });
})

// describe(hydrate, () => {
  
//   let plant;
//   beforeEach(() => {
//     plant = { 
//       water: 0
//     }
//   });

//   test("should change state for property of water", () => {
//     const newStatePlant = hydrate(plant);
//     expect(newStatePlant.water).toEqual(1);
//   });
// })


// describe(feed, () => {

//   let plant;
//   beforeEach(() => {
//     plant = {
//       soil: 0
//     }
//   });

//   test("should change state for property of soil", () => {
//     const newStatePlant = feed(plant);
//     expect(newStatePlant.soil).toEqual(1);
//   });

// })

