// const fs = require("fs");
// const uuid = require("uuid");

// (async () => {
//   let states = fs.readFileSync("./data/json/test.json", "utf-8");

//   states = JSON.parse(states);

//   //   const editedStates = states.map((state, i) => {
//   //     const cities = state.cities.map((city) => city);

//   //     return {
//   //       ...cities,
//   //       id: i + 1,
//   //       stateCode: state.state_code,
//   //       stateId: state.id,
//   //     };
//   //   });

//   //   const result = [...new Set([].concat(...editedStates))];

//   //   const result = states.flatMap((state) =>
//   //     state.cities.map((city, i) => ({
//   //       ...city,
//   //       id: i + 1,
//   //       stateCode: state.state_code,
//   //       stateId: state.id,
//   //     }))
//   //   );

//   const result = states.map((value, i) => ({
//     ...value,
//     id: i + 1,
//     cities: undefined,
//   }));

//   console.log(result);

//   fs.writeFileSync("./data/json/test2.json", JSON.stringify(result));
// })();

// /**
//  * "id": 1822,
//     "name": "Aceh",
//     "state_code": "AC",
//     "latitude": "4.69513500",
//     "longitude": "96.74939930",
//     "type": "province",
//  */
