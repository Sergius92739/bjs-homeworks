"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(percent) === true) {
        alert(`Параметр \"Процентная ставка\" содержит неправильное значение \"${percent}\"`)
    } else if (isNaN(contribution) === true) {
        alert(`Параметр \"Начальный взнос\" содержит неправильное значение \"${contribution}\"`)
    } else if (isNaN(amount) === true) {
        alert(`Параметр \"Общая стоимость\" содержит неправильное значение \"${amount}\"`)
    } else if (isNaN(date) === true) {
        alert(`Параметр \"Сроки ипотеки\" содержит неправильное значение \"${date}\"`)
    }

    let bodyCredit = Number(amount) - Number(contribution);
    let months = (date.getFullYear() - new Date().getFullYear()) * 12;
    let monthlyPercent = percent / 12 / 100;
    let monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** months) - 1));
    let totalAmount = Number((monthlyPayment * months).toFixed(2));
    return totalAmount;

}

function getGreeting(name) {

    if (name === "" || typeof name === "undefined") {
         name = "Аноним";
         console.log(`Привет, мир! Меня зовут ${name}.`);
         return `Привет, мир! Меня зовут ${name}.`;
    } else {
        console.log(`Привет, мир! Меня зовут ${name}.`);
        return `Привет, мир! Меня зовут ${name}.`;
    }
     
}