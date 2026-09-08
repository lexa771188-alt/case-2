const MIN_VALUE = -10;
const MAX_VALUE = 10;


function changeValue(currentValue, step) {
  let newValue = currentValue + step;

  if (newValue > MAX_VALUE) {
    newValue = MAX_VALUE;
  }

  if (newValue < MIN_VALUE) {
    newValue = MIN_VALUE;
  }

  return newValue;
}
