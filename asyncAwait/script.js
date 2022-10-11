//async returns promise
async function weather() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 2000);
  });

  let bangoloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg");
    }, 5000);
  });

  //instead of writting delhiWeather.then()

  console.log("Fetching Delhi's weather");
  let delhiW = await delhiWeather; //returns resolved value
  console.log("Fetched Delhi weather: " + delhiW);

  console.log("Fetching Bangolore's weather");
  let bangoloreW = await bangoloreWeather;
  console.log("Fetched Bangolore weather: " + bangoloreW);
  return [delhiW, bangoloreW];
}


 
// const abc = () =>{
//     console.log("Hey I am Waiting");
// }

//In this case both functions run parallely
// let a = weather();
// let b = abc()
// a.then((value) => {
//   console.log(value);
// });



const abc = async() =>{
    console.log("Hey I am Waiting");
}

//In this case weather() executes first after that abc() executes
const mainFunc = async() =>{
    let a = await weather();
    let b = await abc()
}

mainFunc()