// // axios
// //   .get("https://swapi.dev/api/people/1/")
// //   .then((res) => {
// //     console.log("RESPONSE: ", res);
// //   })
// //   .catch((e) => {
// //     console.log("ERROR! ", e);
// //   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);


// CODEALONG
// https://swapi.dev/api/people/1/


// axios.get('https://swapi.dev/api/people/1/')
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })


const getStarWarsPerson = async(id) => {
  try{
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
    console.log(res.data)
  } catch (err) {
    console.log(err)
  }
}

getStarWarsPerson(55)
