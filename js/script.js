const colors = ['Red', 'Green', 'Blue'];
const rgbValues = [0, 0, 0];

const mainContainer = document.querySelector('#container');
const copyTextContainer = document.querySelector('#copyTextContainer');
const table = document.createElement('table');
const rgbResult = document.querySelector('#rgbResult');

window.addEventListener('load', () => {
  defineStyleContainer(mainContainer.style);
  defineStyleCopyTextContainer(copyTextContainer.style);
  defineStyleRGBResult(rgbResult.style);
  changeRBG();
  render();
});

function render() {
  mainContainer.appendChild(table);

  colors.forEach( color =>{
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
  });
  
  let buttonCopyRBG = createCopyButton();
  copyTextContainer.appendChild(buttonCopyRBG);
}

function createTdName(color) {
  let tdName = document.createElement('td');
  tdName.textContent = color;
  defineStyleTdName(tdName.style, color);
  return tdName;
}

function createRange(color) {
  let range = document.createElement('input');
  range.setAttribute('type', 'range');
  range.setAttribute('min', '0');
  range.setAttribute('max', '255');
  range.setAttribute('name', color);
  range.value = 0;
  range.addEventListener('input', handlerRangeAndColor);
  return range;
}

function createInputDisplay(color) {
  let inputDisplay = document.createElement('input');
  inputDisplay.setAttribute('type', 'input');
  inputDisplay.setAttribute('disabled', true);
  inputDisplay.setAttribute('id', `display${color}`);
  inputDisplay.value = 0;
  defineStyleInputDisplay(inputDisplay.style);
  return inputDisplay;
}

function createCopyButton(){
  let button = document.createElement('button');
  button.addEventListener('click', copyRGB);
  button.textContent = 'Copiar';
  defineStyleCopyButton(button.style);
  return button;
}

function handlerRangeAndColor(event) {
  let { value, name } = event.target;
  let display = document.querySelector(`#display${name}`);
  let indexName = colors.findIndex(color => color === name);

  display.value = value;
  rgbValues[indexName] = value;
  changeRBG(rgbValues);
}

function changeRBG(values = [0, 0, 0]) {
  rgbResult.style.backgroundColor = 'rgb(' + values[0] + ',' + values[1] + ',' + values[2] + ')';
}

function copyRGB() {
  let rbgTemp = document.createElement('textarea');
  rbgTemp.value = rgbResult.style.backgroundColor;
  document.body.appendChild(rbgTemp);
  rbgTemp.select();
  document.execCommand('copy');
  document.body.removeChild(rbgTemp);
  alert('Copiado!')
}