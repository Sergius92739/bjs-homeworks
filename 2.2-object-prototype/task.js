// Задача №1
String.prototype.isPalindrome = function (str) {
    let str1 = [];

    for (let i = 0; i < this.length; i++) {
        if (this.split('')[i] !== " ") {
            str1.push(this.split('')[i])
        }
    }

    return str1.join('').toLowerCase() === str1.reverse().join('').toLowerCase()
}


// Задача №2
function getAverageMark(marks) {
    let sumMarks = 0;

    if (marks.length === 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }

    let roundedAverage = Math.round(sumMarks / marks.length)

    return roundedAverage;
    // код для задачи №2 писать здесь
    // return averageMark
}


// Задача №3
function checkBirthday(birthday) {
    let msPerYear = 365.242 * 24 * 60 * 60 * 1000;
    let now = +new Date();
    let birthay1 = +new Date(birthday);
    let diff = now - birthay1;
    let age = diff / msPerYear;
    if (age > 18) {
        return age;
    } 
}





