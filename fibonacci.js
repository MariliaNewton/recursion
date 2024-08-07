function fibs(num, arr = [0, 1], a = 0, b = 0) {
  if (num <= 0) return [];
  if (arr.length >= num) return arr.slice(0, num);

  for (let i = 3; i <= num; i++) {
    arr.push(arr.at(-2) + arr.at(-1));
  }

  return arr;
}

function fibsRec(num, arr = [0, 1]) {
  if (num <= 0) return [];
  if (arr.length >= num) return arr.slice(0, num);

  arr.push(arr.at(-2) + arr.at(-1));

  return fibsRec(num, arr);
}

console.log(fibsRec(0));
console.log(fibsRec(-3));
console.log(fibsRec(-1));
console.log(fibsRec(3));
console.log(fibsRec(8));

console.log(fibs(0));
console.log(fibs(-3));
console.log(fibs(-1));
console.log(fibs(3));
console.log(fibs(8));
