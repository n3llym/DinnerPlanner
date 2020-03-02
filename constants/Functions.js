// // function to remove all data
// const keysObj = [];

// AsyncStorage.getAllKeys((err, keys) => {
//   AsyncStorage.multiGet(keys, (err, stores) => {
//     stores.map((result, i, store) => {
//       AsyncStorage.multiRemove([store[i][0]], err => {
//       });
//       let key = store[i][0];
//       // let value = store[i][1];
//       keysObj.push(key);
//     });
//   });
// });

// AsyncStorage.multiRemove(keysArray, err => {
//   console.log("deleting");
// });

//function to get just 1 item based on specific key
// const retrieveRecipe = async () => {
//   try {
//     const recipe = await AsyncStorage.getItem("key");
//     let parsed = JSON.parse(recipe);
//     console.log(parsed);
//   } catch (error) {
//     console.log(error);
//   }
// };
