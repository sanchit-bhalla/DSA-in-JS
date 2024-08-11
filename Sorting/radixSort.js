// return the digit at the `place` from the right side
// getDigit(12345, 0) --> 5
// getDigit(12345, 1) --> 4
function getDigit(num, place) {
  // Math.abs for negative numbers
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  // Way 1
  /*
        num = Math.abs(num)
        let count=0
        while(num != 0){
            num = Math.floor(num / 10)
            count++
        }
        return count
    */

  // Way 2
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Given an array, return most number of digits a number have in that array
function mostDigits(nums) {
  // Way 1
  //   return nums.reduce(
  //     (maxDigits, curr) => Math.max(maxDigits, digitCount(curr)),
  //     0
  //   );

  // Way 2
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++)
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    // let digitBuckets = new Array(10).fill().map(() => []) // or 2nd way below
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // nums = [].concat(...digitBuckets); // But now we need to return nums

    // If we want to change nums
    let j = 0;
    for (const num of digitBuckets.flat(1)) {
      nums[j] = num;
      j++;
    }
  }
}

let arr = [65, 37, 0, 23, 2, 999, 7];
radixSort(arr);
console.log(arr);
