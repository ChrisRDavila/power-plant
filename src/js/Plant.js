export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop] : (state[prop] || 0) + value
    })
  }
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