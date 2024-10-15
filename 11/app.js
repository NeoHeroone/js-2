const a = prompt('Uch xonali raqam kiriting!');

if (a > 99 && a < 1000) {
    const b = a[0];
    const c = a[1];
    const d = a[2];
    alert('Raqamlar yigindisi ' + Number(b) + Number(c) + Number(d) + 'ga teng.');
} else {
    alert('Iltimos Uch xonali raqam kiriting!');
}