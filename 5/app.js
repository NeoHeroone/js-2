const A = prompt('Enter a value of A');
const B = prompt('Enter a value of B');

if (A >= B) {
    const C = Math.floor(A / B);
    const D = A % B;
    alert(`B kesmani ${C}marta joylashitirish mumkin ${D} qoldiq qoladi`);
} else {
    alert("A > B try again");
}