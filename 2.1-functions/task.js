"use strict";
// Задача N1
function getSolutions(a, b, c) {
    let D = (b ** 2) - (4 * a * c);
    if (D < 0) {
        return {
            D,
            roots: []
        };
    } else if (D === 0) {
        let x1 = -(b) / (2 * a);
        return {
            D,
            roots: [x1]
        };
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2]
        };
    }
}
//console.log(getSolutions(1, 2, 3)); // D < 0
//console.log(getSolutions(7, 20, -3)); // D > 0
//console.log(getSolutions(2, 4, 2)); // D === 0

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x\u00B2 \+ ${b}x \+ ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X\u2081 = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X\u2081 = ${result.roots[0]}, X\u2082 = ${result.roots[1]}`);
    }
}
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);




// Задача N2
let data = {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poerty: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
};

console.log(getAverageScore(data));
// Выдаёт объект со свойствами, обозначающими предмет + средняя оценка и дополнительным
// свойством  average, в котором хранится средняя отметка ученика по всем предметам.
function getAverageScore(data) {
    let listMarks = {};
    let average = 0;
    let counter = 0;

    for (let key in data) {
        listMarks[key] = getAverageMark(data[key]);
        average += getAverageMark(data[key]);
        counter++;
    }

    if (counter === 0) {
        return {
            average: 0
        };
    }
    average /= counter;
    listMarks.average = average;

    return listMarks;
}

// Вычисляет среднее значение массива
function getAverageMark(marks) {
    let sumMarks = 0;

    if (marks.length === 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }

    return sumMarks / marks.length;
}


// Задача N3

let secretData = {
    aaa: 1,
    bbb: 0
};

function getPersonData(secretData) {
    let decryptedData = {};

    for (let keys in secretData) {
        decryptedData[keys] = getDecodedValue(secretData[keys]);
    }

    return {
        firstName: decryptedData.aaa,
        lastName: decryptedData.bbb
    }
}
console.log(getPersonData(secretData));

function getDecodedValue(secret) {
    if (secret === 1) {
        return "Эмильо";
    } else if (secret === 0) {
        return "Родриго";
    }
}

