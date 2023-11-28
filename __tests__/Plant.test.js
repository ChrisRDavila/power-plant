import { changeState } from "../src/js/Plant.js"
import { storeState } from "../src/js/Plant.js"
import { daisy } from "../src/js/Plant.js"
import { blueFood } from "../src/js/Plant.js"
import { hydrate } from "../src/js/Plant.js"
import { light } from "../src/js/Plant.js"
import { killDaisy } from "../src/js/Plant.js"

describe(changeState, () => {
  
  let state;
  beforeEach(() => {
    state = {}
  });

  test('should change state for selected property of object, and return new state', () => {
    const property = "prop";
    const value = 2;
    const newState = changeState(property)(value)(state);
    expect(newState[property]).toEqual(2)
  });

  // test('should create state that includes a name value attributed to given value', () => {
  //   const property = "name";
  //   const value = "daisy";
  //   const daisyState = changeState(property)(value)(state);
  //   expect(daisyState.name).toEqual("daisy")

  // })
})


describe(storeState, () => {

  let state;
  const stateControl = storeState();
  beforeEach(() => {
    state = { 
    }
  });

  test('should return initial state when no changes are made', () => {
    const changedStateofObject = stateControl()
    expect(changedStateofObject).toEqual(stateControl())
  });

  test('should return changed state according to type of change (ie bluefood) introduced', () => {
    const blueFood = changeState('soil')(5);
    const changedStateofObject = stateControl(blueFood);
    expect(changedStateofObject.soil).toEqual(5);

  });
})


describe(daisy, () => {

  let state = {};
  
  test('should return state object with name property of daisy', () => {
    const daisyState = daisy(state)
    expect(daisyState.name).toEqual("daisy")
  })

  test('should change the daisy property to dead', () => {
    const daisyState = daisy(state)
    const deadDaisy = killDaisy(daisyState)
    expect(deadDaisy.change).toEqual("dead")
  })
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

