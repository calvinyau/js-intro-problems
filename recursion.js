function range(start, end) {
  if (start > end) {
    return [];
  } else {
    let nums = [];
    for (let i = start; i < end; i++) {
      nums.push(i);
    }
    return nums;
  }
}

function recursiveArraySum(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {
    return array[0] + recursiveArraySum(array.slice(1, array.length));
  }
}

// console.log(recursiveArraySum([1,2,3]));
// console.log(recursiveArraySum([5]));

function iterativeArraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// console.log(iterativeArraySum([1,2,3]));
// console.log(iterativeArraySum([5]));

function exponent1(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return base * exponent1(base, power - 1);
  }
}

function exponent2(base, power) {
  if (power === 0) {
    return 1;
  } else if (power === 1) {
    return base;
  } else if (power % 2 === 0) {
    return exponent2(base, power / 2) * exponent2(base, power / 2);
  } else {
    return base * exponent2(exponent2(base, Math.floor((power - 1) / 2)), 2);
  }
}

// console.log(exponent2(3,3));

function recFibonacci(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [1];
  } else if (num === 2) {
    return [1, 1];
  } else {
    let prevFibs = recFibonacci(num - 1);
    prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);
    return prevFibs;
  }
}


function iterFibonacci(num) {
  let numbers = [1, 1];
  if (num < 3) {
    return numbers.slice(0, num);
  } else {
    for (let a = 2; a < num; a++) {
      numbers.push(numbers[a-1] + numbers[a-2]);
    }
  }
  return numbers;
}

// console.log(iterFibonacci(1));
// console.log(iterFibonacci(4));
// console.log(iterFibonacci(7));


function bsearch(array, target) {
  let mid = Math.floor(array.length / 2);
  if (array.length === 0) {
    return -1;
  } else if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return bsearch(array.slice(0, mid), target);
  } else {
    let result = bsearch(array.slice(mid + 1, array.length), target);
    if (result === -1) {
      return -1;
    } else {
      return mid + result + 1;
    }
  }
}

console.log(bsearch([0], 1));
console.log(bsearch([2, 3, 4, 5], 3));
console.log(bsearch([2, 4, 6, 8, 10], 6));
console.log(bsearch([1, 3, 4, 5, 9], 5));
console.log(bsearch([1, 2, 3, 4, 5, 6], 6));
console.log(bsearch([1, 2, 3, 4, 5, 6], 0));
console.log(bsearch([1, 2, 3, 4, 5, 7], 6));
