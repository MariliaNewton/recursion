function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];

  let iL = 0;
  let iR = 0;

  while (iL < left.length && iR < right.length) {
    if (right[iR] < left[iL]) {
      sorted.push(right[iR]);
      iR++;
    } else {
      sorted.push(left[iL]);
      iL++;
    }
  }

  while (iL < left.length) {
    sorted.push(left[iL]);
    iL++;
  }

  while (iR < right.length) {
    sorted.push(right[iR]);
    iR++;
  }

  return sorted;
}

console.log(mergeSort([6, 5, 12, 10, 9, 7]));
console.log(mergeSort([6, -5, -12, 10, 9, -7]));
console.log(mergeSort([]));
console.log(mergeSort([9]));
