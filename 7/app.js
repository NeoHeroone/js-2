const a = prompt('Ikki xonali raqam kiriting!');

if (a > 9 && a < 100) {
    const b = a % 10;
    const c = (a - b) / 10;
    const d = b + c;
    alert(`Birinchi raqam: ${c} Ikkinchi raqam: ${b}, raqamlar yigindisi: ${d}`);
} else {
    alert('Iltimos ikki xonali raqam kiriting!');
}