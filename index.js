// Write your solution in this file!

const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee };

    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const clone = Object.assign({}, employee);
    delete clone[key];
    return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}