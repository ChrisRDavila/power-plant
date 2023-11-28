import { changeState } from "../src/js/Plant.js"

describe(changeState, () => {
  
  let state;
  beforeEach(() => {
    state = { 
      prop: 0
    }
  });

  test('should change state for selected property of object, and return new state', () => {
    const property = "prop";
    const value = 2;
    const newState = changeState(property)(value)(state);
    expect(newState[property]).toEqual(2)
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

