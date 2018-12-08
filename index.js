// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let price = 0
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    price = 0;
    return price;
  } else if (400 < distance && distance < 2000) {
    price = 0.02 * (distance - 400);
    return price;
  } else if (2000 < distance && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
