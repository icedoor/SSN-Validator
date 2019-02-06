const RADIX = 10;
const DATE_LENGTH = 9;
const CTRL_LENGTH = 1;

/**
 * Validates a Swedish socual seucirty number.
 *
 * @param {string} input the input to validate.
 * @returns true if input is a valid SSN, false if not.
 */
const validateSSN = (input) => {
    if (!input || (input.length !== 10 && input.length !== 12)) {
        return false;
    }

    const start = input.length - 10;
    const end = start + DATE_LENGTH;

    const birthDate = input.substring(start, end);
    const ctrl = parseInt(input.substring(end, end + CTRL_LENGTH), RADIX);

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        let digit = parseInt(birthDate.charAt(i), RADIX);
        if (i % 2 === 0) digit *= 2;
        if (digit > 9) digit -= 9;
        sum += digit;
    }

    const real = (10 - (sum % 10)) % 10;

    return ctrl === real;
}

/**
 * Checks that a string isn not null or empty.
 *
 * @param {string} input the input to validate.
 * @returns true if input is a non-null and not empty, false if not.
 */
const validateNotNull = (input) => {
    return input !== null && input !== '';
}

module.exports = {
    validateNotNull,
    validateSSN
};
