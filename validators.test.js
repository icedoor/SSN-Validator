const test = require('tape');
const { validateSSN, validateNotNull } = require('./validators');

test('Test validate not null.', (t) => {
    t.equal(validateNotNull(null), false, "Null should not be valid");
    t.equal(validateNotNull(""), false, "An empty string should not be valid");
    t.equal(validateNotNull("Something"), true, "A non-empty, non-null string should be valid");

    t.end();
});

test('Test validate Swedish social security number.', (t) => {
    t.equal(validateSSN(null), false, "Null should not be valid");
    t.equal(validateSSN(""), false, "An empty string should not be valid");
    t.equal(validateSSN("199209265869"), false, "An invalid SSN");
    t.equal(validateSSN("199209265868"), true, "12 digit ssn should be valid");
    t.equal(validateSSN("9209265868"), true, "10 digit ssn should be valid");
    t.equal(validateSSN("209265868"), false, "9 digit ssn should not be valid");
    t.equal(validateSSN("99209265868"), false, "11 digit ssn should not be valid");
    t.equal(validateSSN("1992092658681"), false, "13 digit ssn should not be valid");

    t.end(); 
});

