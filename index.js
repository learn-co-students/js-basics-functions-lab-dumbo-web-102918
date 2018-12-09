// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if (block > 42){
    return block - 42;
  }
  else{
    return 42 - block;
  }
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(first, second){
  let feet = (first > second) ? (first - second)*264 : (second - first)*264;
  return feet;
}

function calculatesFarePrice(start, destination){
  let total = distanceTravelledInFeet(start, destination);
  if (total < 400){
    return 0;
  }
  else if (total > 400 && total < 2000) {
    return (total-400)*.02;
  }
  else if (total > 2000 && total < 2500) {
    return 25;
  }
  else{
    return "cannot travel that far";
  }
}
