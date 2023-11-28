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

export const daisy = (name) => {
  let state = {
    name: "daisy"
  };
  return {...state}
}

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