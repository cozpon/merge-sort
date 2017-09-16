var unSorted = [4, 2, 3, 5, 1];
function breakDown(array){
 // base case
    if(array.length < 2) {
    return array;
  }
  var lengthArr = array.length;
  //sets middle to slice in half
  var mid = Math.floor(lengthArr / 2);
  //starts slice from beginning the middle
  var left = array.slice(0, mid);
  // starts slice from middle to end
  var right = array.slice(mid);

  return buildBack(breakDown(left), breakDown(right));

}

function buildBack(left, right){
  var sorted = [];
// array we will push sorted numbers into
  while(left.length && right.length) {
     //base case
// while left has a length, and right has a length, do this:
    if(left[0] < right[0]) {
// check if FIRST number on left side is greater than FIRST number on right side
// push it into SORTED array, and remove it from LEFT array
      sorted.push(left.shift());
    } else {
// else, the R first ELEMENT must be smaller than L first ELEMENT
// so push R ELEMENT into SORTED array and remove it from R array
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left.slice()).concat(right.slice());
// returns a flattened, sorted array (hopefully)
}

console.log(breakDown(unSorted));




