// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  let result;
  if (someValue > 42){
      result = someValue - 42;
  }else if(someValue <=42){
      result = 42 - someValue;
  }
  return result;
}

function distanceFromHqInFeet(someValue){
  let result;
  if(someValue > 42){
    result = 264 * (someValue - 42);
  }else if(someValue <= 42){
    result = 264 * (42 - someValue);
  }
  return result;
}

function distanceTravelledInFeet(a,b){
  let result = 264 * (Math.abs(a-b));
  return result;
}

function calculatesFarePrice(start, destination){
  let distance = Math.abs(start-destination) * 264;
  let result;

  if(distance <= 400){
    result = 0;
  }else if(distance > 400 && distance < 2000){
    result = (distance - 400) * .02;
  }else if(distance > 2000 && distance <= 2500){
    result = 25;
  }else{
    result = "cannot travel that far";
  }
  return result;
}
