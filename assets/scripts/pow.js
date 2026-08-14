function exponentiation(a, n) {
    if (n === 1) {
        return a;
    }

    return a * exponentiation(a, n - 1);
}

console.log(exponentiation(3, 3));
