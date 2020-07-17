const colors = ['Red', 'Green', 'Blue'];

const container = document.querySelector('#container');
const table = document.createElement('table');
const rgbResult = document.querySelector('#rgbResult');
const rgbValues = [0, 0, 0];

window.addEventListener('load', start);

function start() {
  render();
  changeRBG();
}

function render() {
  container.appendChild(table);

  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];

    let tdName = createTdName(color);
    let range = createRange(color);

    let tdRange = document.createElement('td');
    tdRange.appendChild(range);

    let display = createInputDisplay(color);

    let tdDisplay = document.createElement('td');
    tdDisplay.appendChild(display);

    let tr = document.createElement('tr');
    tr.appendChild(tdName);
    tr.appendChild(tdRange);
    tr.appendChild(tdDisplay);

    table.appendChild(tr);
  }
}

function createTdName(color) {
  let tdName = document.createElement('td');
  tdName.textContent = color;
  tdName.style.fontFamily = 'Arial';
  tdName.style.fontWeight = 'Bold';
  tdName.style.color = color;
  return tdName;
}

function createRange(color) {
  let range = document.createElement('input');
  range.setAttribute('type', 'range');
  range.setAttribute('min', '0');
  range.setAttribute('max', '255');
  range.setAttribute('name', color);
  range.value = 0;
  range.addEventListener('input', handlerRange);
  return range;
}

function createInputDisplay(color) {
  let inputDisplay = document.createElement('input');
  inputDisplay.setAttribute('type', 'input');
  inputDisplay.setAttribute('disabled', true);
  inputDisplay.setAttribute('id', `display${color}`);
  inputDisplay.value = 0;
  inputDisplay.style.border = 0;
  inputDisplay.style.width = '25px';
  inputDisplay.style.borderColor = 'transparent';
  inputDisplay.style.backgroundColor = 'rgb(221, 221, 221)';
  return inputDisplay;
}

function handlerRange(event) {
  let { value, name } = event.target;
  let display = document.querySelector(`#display${name}`);
  let indexName = colors.findIndex((color) => color === name);

  display.value = value;
  rgbValues[indexName] = value;
  changeRBG(rgbValues);
}

function changeRBG(values = [0, 0, 0]) {
  const { style } = rgbResult;
  style.backgroundColor =
    'rgb(' + values[0] + ',' + values[1] + ',' + values[2] + ')';
}