var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var firstToDo = [1];

function addElementToBeginningOfArray(array, element) {
  var newFirstToDo = [element, ...array]
  return newFirstToDo
}
addElementToBeginningOfArray(firstToDo, 'foo');

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newSecondToDo = [...array, element];
  return newSecondToDo
}
addElementToEndOfArray(firstToDo, 'foo');

function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element);
  return array;
}