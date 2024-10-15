const A = prompt('Enter a value of A');
const B = prompt('Enter a value of B');

if (A >= B) {
    const C = Math.floor(A / B);
    alert(`Bni ${C}marta joylashitrish mumkin`);
} else {
    alert("A > B try again");
}