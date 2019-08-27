const arr = [1, [2, 3, [4]], 5, [6, [7, 8, [9], 10]], 11];

// Recursive version
function flat(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  
  let flattened = [];
  
  arr.forEach(el => {
    flattened = flattened.concat(flat(el));
  });
  
  return flattened;
}

// Iterative version
function iterFlat(arr) {
  let i = 0;
  let flattened = [...arr];
  
  while (i < flattened.length) {
    if (!Array.isArray(flattened[i])) {
      i++;
    } else {
      let left = flattened.slice(0, i).concat(flattened[i]);
      flattened = left.concat(flattened.slice(i + 1));
    }
  }
  
  return flattened;
}

console.log(flat(arr));
console.log(iterFlat(arr));