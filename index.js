// Code your solution in this file!
// Define the headquarters block location (assumed as 42)
// Function to calculate distance from HQ in blocks
/*    distanceFromHqInBlocks()
      -returns a distance in blocks
      -returns a distance in blocks
      - calculates distances below 42nd street
*/
const hqLocation = 42;

function distanceFromHqInBlocks(blockNumber) {
  // Return the absolute distance in blocks
  return Math.abs(blockNumber - hqLocation);
}
/*
    distanceFromHqInFeet()
      -returns a distance in feet
      - returns a distance in feet
      -calculates distances below 42nd street

*/
const feetPerBlock = 264;

function distanceFromHqInFeet(blockNumber) {
  // Get the distance in blocks and convert to feet
  const distanceInBlocks = distanceFromHqInBlocks(blockNumber);
  return distanceInBlocks * feetPerBlock;
}
/*
    distanceTravelledInFeet()
      - returns the distance travelled in feet
      - returns a distance in feet
      -returns distance when destination is below distance

*/
function distanceTravelledInFeet(start, destination) {
    // Calculate the absolute difference between start and destination blocks
    const distanceInBlocks = Math.abs(start - destination);
    // Convert the distance to feet
    return distanceInBlocks * feetPerBlock;
  }
 /* calculatesFarePrice(start, destination)
  - gives customers a free sample
  - charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
  - charges 25 dollars for a distance over 2000 feet
  -does not allow rides over 2500 feet
*/
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      // Free for the first 400 feet
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      // Charge 2 cents per foot for distances between 400 and 2000 feet
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      // Flat rate of $25 for distances between 2000 and 2500 feet
      return 25;
    } else {
      // No rides over 2500 feet
      return 'cannot travel that far';
    }
  }
// Test cases
console.log(distanceFromHqInBlocks(43)); 
console.log(distanceFromHqInFeet(43)); 
console.log(distanceTravelledInFeet(34, 42)); 
console.log(calculatesFarePrice(34, 42)); 
    