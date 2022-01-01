const departmentId = ['FC', 'BC', 'MAR'];

function randomNumber(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

export default function randomTaskId() {
    const randomDepartment = departmentId[randomNumber(0, 2)];
    return `${randomDepartment}-${randomNumber(1, 99)}`;
}