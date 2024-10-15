const L = prompt("Enter the weight of the kilobayts: ");

const l1 = parseFloat(L);

const res = Math.floor(l1 / 1024);

alert(`The weight in bayts is ${res}bayt`);