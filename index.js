// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  if (someValue > 42) {
    return someValue - 42
  } else {
    return 42 - someValue
  }
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue)*264
}

function distanceTravelledInFeet(start, end){
  return (start > end) ? (start-end)*264 : (end-start)*264
}

function calculatesFarePrice(start, end){
  let feet = distanceTravelledInFeet(start, end)
  console.log(feet)
  if (feet <= 400){
    return 0;
  } else if (feet > 400 && feet <= 2000){
      return ((feet-400)* 0.02);
  } else if (feet > 2000 && feet < 2500){
       return 25;
  } else if (feet > 2500){
      return "cannot travel that far";
      //console.log(`feet were ${feet}`)
    }
}
