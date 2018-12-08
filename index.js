// Code your solution in this file!

function distanceFromHqInBlocks(loc){
  if (loc > 42){
    return loc - 42
  }else{
    return 42 - loc
  }
}

function distanceFromHqInFeet(loc){
    let block = distanceFromHqInBlocks(loc)
    return block * 264;
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end)*264;
}


function calculatesFarePrice(start, end){
  let distance_travelled = distanceTravelledInFeet(start, end);
  switch (true) {
    case distance_travelled<=400:
      return 0;
      break;

    case distance_travelled >400 && distance_travelled <= 2000:
      return (distance_travelled-400)*0.02
      break;

    case distance_travelled>2000 && distance_travelled < 2500:
      return 25;
      break;
    default:
      return 'cannot travel that far';
  }
}
