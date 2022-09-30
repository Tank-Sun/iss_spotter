const {nextISSTimesForMyLocation} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('42', (error, data) => {
//    if (error) {
//     console.log("It didn't work!" , error);
//     return;
//    }

//    console.log('It worked! Returned data:' , data);
//  });

// const coords = { latitude: '51.0486151', longitude: '-114.0708459' };
// const coords1 = { latitude: '100', longitude: '-114.0708459' };
// const coords2 = { latitude: '51.0486151', longitude: '200' };
// fetchISSFlyOverTimes(coords2, (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned data:' , data);
// });

const printTime = passTimes => {
  passTimes.forEach(element => {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(element.risetime);
    const durationTime = element.duration;
    console.log(`Next pass at ${dateTime} for ${durationTime} seconds!`);
  });
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printTime(passTimes);
});