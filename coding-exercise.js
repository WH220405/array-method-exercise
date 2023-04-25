function removeLastElement(arr) {
  if (arr.length === 0) {
      throw new Error('Array is empty');
  }
  return arr.pop();
}

function addElementToEnd(arr, element) {
  arr.push(element);
  return arr.length;
}

function removeFirstElement(arr) {
  if (arr.length === 0) {
      throw new Error('Array is empty');
  }
  return arr.shift();
}

function addElementToBeginning(arr, element) {
  arr.unshift(element);
  return arr.length;
}

function getArraySection(arr, start, end) {
  if (start < 0 || end <= start || end > arr.length) {
      throw new Error('Invalid start or end index');
  }
  return arr.slice(start, end);
}

function removeArraySection(arr, start, end) {
  if (start < 0 || end <= start || end > arr.length) {
      throw new Error('Invalid start or end index');
  }
  return arr.splice(start, end - start);
}

module.exports = {
  removeLastElement,
  addElementToEnd,
  removeFirstElement,
  addElementToBeginning,
  getArraySection,
  removeArraySection
};