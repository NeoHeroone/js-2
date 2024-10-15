const a = prompt('Uch xonali raqam kiriting!');

if (a > 99 && a < 1000) {
    const b = a[0];
    const c = a[1];
    const d = a[2];
    alert(d + c + b);
} else {
    alert('Iltimos Uch xonali raqam kiriting!');
}