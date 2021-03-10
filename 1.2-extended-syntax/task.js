"use strict";
function getResult(a, b, c) {
    //2x^2+4x-3=0 
    let x = [];
    const discriminant = (b ** 2) - (4 * a * c);
    console.log(discriminant);
    if (discriminant === 0) {
        let x0 = -(b) / (2 * a);
        x.push(x0);
    } else if (discriminant > 0) {
        let x1 = (- b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (- b - Math.sqrt(discriminant)) / (2 * a);
        x.push(x1, x2);
    }
    return x;
}


function getAverageMark(marks) {
    let sum = 0;

    if (marks.length === 0) {
        return 0;
    } else {
        console.log(marks);
        marks.splice(5);
        console.log(marks);
    }

    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }

    return sum / marks.length;
}

// Задача 3
function askDrink(name, dateOfBirthday) {
  
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();

    if (age >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }
    
}