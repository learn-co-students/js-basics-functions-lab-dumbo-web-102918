// Code your solution in this file!
let hq = 42
function distanceFromHqInBlocks(someValue){
  return Math.abs(`${someValue}` - hq);
}

 function distanceFromHqInFeet(someValue){
   return distanceFromHqInBlocks(someValue)*264
 }

function distanceTravelledInFeet(someValue, anotherValue){
  return Math.abs((`${anotherValue}` - `${someValue}`) * 264);
 // return distanceFromHqInFeet(someValue);
}
function calculatesFarePrice(first, second){
  var feet = distanceTravelledInFeet(first, second);

  if (feet <= 400){
  return 0;
  }
  else if (feet > 2000 && feet < 2500){
    return 25;
  }
  else if (feet > 2500) {
    return 'cannot travel that far'
  }
  else {
  return (`${feet}` - 400) * 0.02
  }
  // else {
  //
  // }
}
// else if(feet>=400 $$ feet<=2000){
//  return (400 - `${feet}`) * 2;
// }
