export const changeState = (prop) => {
  return (value) => {
    return (state) => (
      {
        ...state,
        [prop]: (state[prop] || 0) + value
      }
    )
  }
}

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

export function plantType(state) {
  return function (type) {
    if (type === "daisy") {
      return {
        ...state,
        name: "Daisy",
        happiness: 4,
      }
    }
    else if (type === "rose") {
      return {
        ...state,
        name: "Rose",
        smelliness: 5,
      }
    } else {
      return {
        ...state,
        name: "Common houseplant",
        rarity: 0,
      }
    }
  }
}  

// export const killDaisy = (state) => {
//   return {...state, change: "dead"}
// }

export const happier = (state) => {
  return (value) => {
      return (state) => (
        {
          ...state,
          happiness: (state.happiness) + 1
        }
      )
  }
}


export const blueFood = changeState("soil")(5);
export const hydrate = changeState("water")(1);
export const light = changeState("light")(1);






// export const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// export const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// const changeState = (state, prop, value) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + value
//   }
// }


// export const changeState2 = (prop,dataType) => {
//   if (dataType === "string") {
//     return (value) => {
//       return (state) => (
//         {
//           ...state,
//           [prop]: (state[prop] || "") + value
//         }
//       )
//     }
//   } else {
//     return (value) => {
//       return (state) => (
//         {
//           ...state,
//           [prop]: (state[prop] || 0) + value
//         }
//       )
//     }
//   }
// }