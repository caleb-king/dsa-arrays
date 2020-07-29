function URLify(inputString) {
  let outputString = '';
  for (let i = 0; i < inputString.length; i += 1) {
    if (inputString[i] === ' ') {
      outputString += '%20';
    } else {
      outputString += inputString[i];
    }
  }
  return outputString;
}

// console.log(URLify('this is a test'));

function filterArray(inputArr) {
  const outputArr = [];
  inputArr.forEach(el => {
    if (el >= 5) {
      outputArr.push(el);
    }
  });
  return outputArr;
}

// console.log(filterArray([-7, 6, 3, 100]));

function sumArr(inputArr) {
  let result = 0;
  inputArr.forEach(number => {
    result += number;
  });
  return result;
}

function maxSumInArr(inputArr) {
  let maxSum = inputArr[0];
  let currentArr = [];
  for (let i = 0; i < inputArr.length; i += 1) {
    for (let j = 0; j < inputArr.length - i; j += 1) {
      currentArr.push(inputArr[j]);
      const currentSum = sumArr(currentArr);
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
    currentArr = [];
  }
  return maxSum;
}

// console.log(maxSumInArr([10, -6, -8, 18, -10, 1]));

function mergeArrays(arr1, arr2) {
  const mergedArr = [];
  let pointer1 = 0;
  let pointer2 = 0;
  for (let i = 0; i < arr1.length + arr2.length; i += 1) {
    // this case is for the final element
    if (pointer1 === arr1.length) {
      mergedArr.push(arr2[pointer2]);
      break;
    } else if (pointer2 === arr2.length) {
      mergedArr.push(arr1[pointer1]);
      break;
    }

    const lowest = arr1[pointer1] < arr2[pointer2] ? 1 : 2;
    if (lowest === 1) {
      mergedArr.push(arr1[pointer1]);
      pointer1 += 1;
    } else {
      mergedArr.push(arr2[pointer2]);
      pointer2 += 1;
    }
  }
  return mergedArr;
}

const firstArr = [2, 3, 5, 8, 9, 10];
const secondArr = [1, 3, 6, 8, 11];

const expectedOutput = [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11];

// console.log('merge Array result: ', mergeArrays(firstArr, secondArr));
// console.log('expected Output: ', expectedOutput);

function removeCharacters(inputString, charactersToRemove) {
  let outputString = '';
  for (let i = 0; i < inputString.length - 1; i += 1) {
    let deleteCharacter = false;
    for (let j = 0; j < charactersToRemove.length - 1; j += 1) {
      if (inputString[i] === charactersToRemove[j]) {
        deleteCharacter = true;
      }
    }
    if (!deleteCharacter) {
      outputString += inputString[i];
    }
  }
  return outputString;
}

// console.log(
//   removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')
// );

function products(inputArr) {
  const outputArr = [];
  let currentProduct = 1;
  for (let i = 0; i < inputArr.length; i += 1) {
    for (let j = 0; j < inputArr.length; j += 1) {
      if (j !== i) {
        currentProduct *= inputArr[j];
      }
    }
    outputArr[i] = currentProduct;
    currentProduct = 1;
  }
  return outputArr;
}

// console.log(products([1, 3, 9, 4, 12]));

function setColumnToZeros(columnIndex, arr) {
  if (columnIndex < 0 || columnIndex >= arr[0].length) {
    return 'invalid column index';
  }
  for (let i = 0; i < arr.length; i += 1) {
    arr[i][columnIndex] = 0;
  }
  return arr;
}

function setRowToZeros(rowIndex, arr) {
  if (rowIndex < 0 || rowIndex >= arr.length) {
    return 'invalid column index';
  }
  for (let i = 0; i < arr[0].length; i += 1) {
    arr[rowIndex][i] = 0;
  }
  return arr;
}

function products2(inputArr) {
  const outputArr = [];
  let currentProduct = 1;
  const n = inputArr.length;
  const m = inputArr[0].length;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      console.log(currentProduct);
      currentProduct *= inputArr[i][j];
    }
    outputArr[i] = currentProduct;
    currentProduct = 1;
  }
  return outputArr;
}

function twoDimensionalArrayReplacingZeros(inputArr) {
  const n = inputArr.length;
  const m = inputArr[0].length;

  // the rows and columns correspond to if there is a 0 in that row or column.
  const rows = new Array(n).fill(1);
  const columns = new Array(m).fill(1);

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (inputArr[i][j] === 0) {
        rows[i] = 0;
        columns[j] = 0;
      }
    }
  }

  // combine rows and columns to get output Arr
  const outputArr = new Array(n);

  for (let i = 0; i < n; i += 1) {
    outputArr[i] = new Array(m);
    for (let j = 0; j < m; j += 1) {
      outputArr[i][j] = rows[i] * columns[j];
    }
  }

  return outputArr;
}

const sampleArr = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

// console.log(twoDimensionalArrayReplacingZeros(sampleArr));

function isStringARotation(inputStr1, inputStr2) {
  if (inputStr1.length !== inputStr2.length) return false;
  if (inputStr1 === inputStr2) return true;
  let isRotation = false;
  let tempStr = inputStr2;
  for (let i = 1; i < inputStr2.length; i += 1) {
    tempStr = `${tempStr.slice(1, inputStr2.length)}${tempStr[0]}`;
    if (tempStr === inputStr1) {
      isRotation = true;
      break;
    }
  }
  return isRotation;
}

// console.log(isStringARotation('amazon', 'azonam'));
