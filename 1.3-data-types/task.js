"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    console.log(date);
    if ((Number(percent) !== Number(percent)) ||
        (percent === "") || (percent.indexOf(" ") !== -1) || Number(percent) < 0) {
        return alert(`Параметр \"Процентная ставка\" содержит неправильное значение \"${percent}\"`)
    } else if (Number(contribution) !== Number(contribution) || Number(contribution) < 0 || contribution === "") {
        return alert(`Параметр \"Начальный взнос\" содержит неправильное значение \"${contribution}\"`)
    } else if ((Number(amount) !== Number(amount)) ||
        (amount === "") || (amount.indexOf(" ") !== -1) || Number(amount) < 0) {
        return alert(`Параметр \"Общая стоимость\" содержит неправильное значение \"${amount}\"`)
    } else if ((date.getFullYear() !== date.getFullYear()) || date.getFullYear() < new Date().getFullYear()) {
        return alert(`Параметр \"Сроки ипотеки\" содержит неправильное значение \"${date}\"`)
    }

    let bodyCredit = Number(amount) - Number(contribution);
    let months = (date.getFullYear() - new Date().getFullYear()) * 12;
    let monthlyPercent = percent / 12 / 100;
    let monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** months) - 1));
    let totalAmount = Number((monthlyPayment * months).toFixed(2));
    return totalAmount;

}

function getGreeting(name) {
/*
    return `Привет мир ! Меня зовут ${name || 'Аноним'}.`;
*/


    if (name === "" || typeof name === "undefined" || name.indexOf(" ") !== -1) {
        name = "Аноним";
    }
    return `Привет, мир ! Меня зовут ${name}.`;


/*  if (name === "" || typeof name === "undefined") {
        name = "Аноним";
        console.log(`Привет, мир! Меня зовут ${name}.`);
        return `Привет, мир! Меня зовут ${name}.`;
    } else {
        console.log(`Привет, мир! Меня зовут ${name}.`);
        return `Привет, мир! Меня зовут ${name}.`;
    }
*/
}