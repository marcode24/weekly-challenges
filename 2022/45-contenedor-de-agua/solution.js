const howManyWater = (arr) => {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (arr[left] < arr[right]) {
      arr[left] >= leftMax ? (leftMax = arr[left]) : (count += leftMax - arr[left]);
      left++;
    } else {
      arr[right] >= rightMax ? (rightMax = arr[right]) : (count += rightMax - arr[right]);
      right--;
    }
  }
  return count;
};

module.exports = howManyWater;
