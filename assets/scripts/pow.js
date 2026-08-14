function exponentiation(base, exponent) {
    if (exponent === 1) {
        return base;
    }

    return base * exponentiation(base, exponent - 1);
}

console.log(
    exponentiation(
        prompt("Введіть число яке хочете возвести"),
        prompt("Введіть степінь"),
    ),
);
