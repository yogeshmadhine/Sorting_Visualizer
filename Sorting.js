const arrayContainer = document.querySelector('.array-container');
const newArrayBtn = document.getElementById('newArray');
const sizeSlider = document.getElementById('sizeSlider');
const speedSlider = document.getElementById('speedSlider');
const buttons = document.querySelectorAll('button');
let array = [];
let delay = 1000 / speedSlider.value;

function createArray(size) {
  array = [];
  arrayContainer.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    array.push(value);
    const bar = document.createElement('div');
    bar.style.height = `${value * 5}px`;
    bar.classList.add('bar');
    arrayContainer.appendChild(bar);
  }
}

function swap(el1, el2) {
  const temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

async function bubbleSort() {
  const bars = document.querySelectorAll('.bar');
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      bars[j].style.backgroundColor = 'orange';
      bars[j + 1].style.backgroundColor = 'orange';
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        swap(bars[j], bars[j + 1]);
      }
      bars[j].style.backgroundColor = '#00ffff';
      bars[j + 1].style.backgroundColor = '#00ffff';
    }
    bars[bars.length - i - 1].style.backgroundColor = 'green';
  }
  bars[0].style.backgroundColor = 'green';
}

async function selectionSort() {
  const bars = document.querySelectorAll('.bar');
  for (let i = 0; i < bars.length; i++) {
    let minIdx = i;
    bars[minIdx].style.backgroundColor = 'red';
    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.backgroundColor = 'orange';
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (parseInt(bars[j].style.height) < parseInt(bars[minIdx].style.height)) {
        if (minIdx !== i) bars[minIdx].style.backgroundColor = '#00ffff';
        minIdx = j;
        bars[minIdx].style.backgroundColor = 'red';
      } else {
        bars[j].style.backgroundColor = '#00ffff';
      }
    }
    swap(bars[i], bars[minIdx]);
    bars[minIdx].style.backgroundColor = '#00ffff';
    bars[i].style.backgroundColor = 'green';
  }
}

async function insertionSort() {
  const bars = document.querySelectorAll('.bar');
  for (let i = 1; i < bars.length; i++) {
    const keyHeight = bars[i].style.height;
    let j = i - 1;
    bars[i].style.backgroundColor = 'orange';
    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(keyHeight)) {
      bars[j].style.backgroundColor = 'orange';
      await new Promise((resolve) => setTimeout(resolve, delay));
      bars[j + 1].style.height = bars[j].style.height;
      bars[j].style.backgroundColor = 'green';
      j--;
    }
    bars[j + 1].style.height = keyHeight;
    bars[i].style.backgroundColor = 'green';
  }
}

async function quickSortHelper(bars, low, high) {
  if (low < high) {
    const pivotIdx = await partition(bars, low, high);
    await quickSortHelper(bars, low, pivotIdx - 1);
    await quickSortHelper(bars, pivotIdx + 1, high);
  }
}

async function partition(bars, low, high) {
  const pivot = parseInt(bars[high].style.height);
  bars[high].style.backgroundColor = 'red';
  let i = low - 1;
  for (let j = low; j < high; j++) {
    bars[j].style.backgroundColor = 'orange';
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (parseInt(bars[j].style.height) < pivot) {
      i++;
      swap(bars[i], bars[j]);
      bars[i].style.backgroundColor = 'green';
    }
    bars[j].style.backgroundColor = '#00ffff';
  }
  swap(bars[i + 1], bars[high]);
  bars[high].style.backgroundColor = '#00ffff';
  bars[i + 1].style.backgroundColor = 'green';
  return i + 1;
}

async function quickSort() {
  const bars = document.querySelectorAll('.bar');
  await quickSortHelper(bars, 0, bars.length - 1);
  bars.forEach((bar) => (bar.style.backgroundColor = 'green'));
}

async function mergeSortHelper(bars, l, r) {
  if (l >= r) return;
  const m = Math.floor((l + r) / 2);
  await mergeSortHelper(bars, l, m);
  await mergeSortHelper(bars, m + 1, r);
  await merge(bars, l, m, r);
}

async function merge(bars, l, m, r) {
  const left = [];
  const right = [];
  for (let i = l; i <= m; i++) left.push(parseInt(bars[i].style.height));
  for (let i = m + 1; i <= r; i++) right.push(parseInt(bars[i].style.height));
  let i = 0, j = 0, k = l;
  while (i < left.length && j < right.length) {
    bars[k].style.backgroundColor = 'orange';
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (left[i] <= right[j]) {
      bars[k].style.height = `${left[i]}px`;
      i++;
    } else {
      bars[k].style.height = `${right[j]}px`;
      j++;
    }
    bars[k].style.backgroundColor = 'green';
    k++;
  }
  while (i < left.length) {
    bars[k].style.backgroundColor = 'orange';
    await new Promise((resolve) => setTimeout(resolve, delay));
    bars[k].style.height = `${left[i]}px`;
    bars[k].style.backgroundColor = 'green';
    i++;
    k++;
  }
  while (j < right.length) {
    bars[k].style.backgroundColor = 'orange';
    await new Promise((resolve) => setTimeout(resolve, delay));
    bars[k].style.height = `${right[j]}px`;
    bars[k].style.backgroundColor = 'green';
    j++;
    k++;
  }
}

async function mergeSort() {
  const bars = document.querySelectorAll('.bar');
  await mergeSortHelper(bars, 0, bars.length - 1);
  bars.forEach((bar) => (bar.style.backgroundColor = 'green'));
}

newArrayBtn.addEventListener('click', () => createArray(sizeSlider.value));
sizeSlider.addEventListener('input', () => createArray(sizeSlider.value));
speedSlider.addEventListener('input', () => delay = 1000 / speedSlider.value);

document.getElementById('bubbleSort').addEventListener('click', bubbleSort);
document.getElementById('selectionSort').addEventListener('click', selectionSort);
document.getElementById('insertionSort').addEventListener('click', insertionSort);
document.getElementById('quickSort').addEventListener('click', quickSort);
document.getElementById('mergeSort').addEventListener('click', mergeSort);

createArray(sizeSlider.value);
