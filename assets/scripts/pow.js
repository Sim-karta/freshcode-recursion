function exponentiation(base, exponent) {
    if (typeof base !== "number" || Number.isNaN(base)) {
        throw new TypeError("base must be a number");
    }

    if (typeof exponent !== "number" || Number.isNaN(exponent)) {
        throw new TypeError("exponent must be a number");
    }

    if (exponent <= 0 || !Number.isSafeInteger(exponent)) {
        throw new RangeError("exponent must be positive and integer value");
    }

    if (exponent === 1) {
        return base;
    }

    return base * exponentiation(base, exponent - 1);
}

try {
    console.log(
        exponentiation(
            Number(prompt("Введіть число яке хочете возвести")),
            Number(prompt("Введіть степінь")),
        ),
    );
} catch (error) {
    console.log(error);
}
