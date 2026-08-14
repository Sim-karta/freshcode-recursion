function validateEmail(email) {
    if (typeof email !== "string") {
        throw new TypeError("email must be a string");
    }

    if (!email.includes("@")) {
        throw new Error("email must include @");
    }

    if (email.startsWith("@") || email.endsWith("@")) {
        throw new Error("email is invalid");
    }

    return email;
}

console.log(validateEmail("sim@gmail.com"));
