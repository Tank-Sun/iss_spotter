const {nextISSTimesForMyLocation} = require('./iss_promised');

const printTime = passTimes => {
  passTimes.forEach(element => {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(element.risetime);
    const durationTime = element.duration;
    console.log(`Next pass at ${dateTime} for ${durationTime} seconds!`);
  });
};

nextISSTimesForMyLocation()
  .then(times => printTime(times))
  .catch(error => {
    console.log("It didn't work: ", error.message);
  });