const a = prompt('Ikki xonali raqam kiriting!');

if (a > 9 && a < 100) {
    const b = a % 10;
    const c = (a - b) / 10;
    alert(`${b}${c}`);
} else {
    alert('Iltimos ikki xonali raqam kiriting!');
}