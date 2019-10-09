let money = +prompt ("Ваш бюджет на месяц?", ''),
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');

let appData ={ 
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

//  ---- Это цикл с "for" ------

for (let i = 0; i<2; i++) {
    let a = prompt ("Статья расходов?", ''),
        b = prompt ("Во сколько встанет?", '');
    if ( typeof(a)=== "string" && typeof(a) !=null && typeof(b) !=null && a !='' && b !='' && a.length <10) {
        console.log('done!');
        appData.expenses[a] = b;
    } else {
        console.log('Вы где-то ввели недопустимое значение! Попробуйте снова!');
        i--;
    }
}

// ----- Это цикл с "while" -----
// let i = 0
//     while (i < 2) {
//         let a = prompt ("Статья расходов?", ''),
//             b = prompt ("Во сколько встанет?", '');
//         if ( typeof(a)=== "string" && typeof(a) !=null && typeof(b) !=null && a !='' && b !='' && a.length <10) {
//             console.log('done!');
//             appData.expenses[a] = b;
//         } else {
//             console.log('Вы где-то ввели недопустимое значение! Попробуйте снова!');
//             i--;
//         }

//         i++;
//     }


// ---- Это цикл с "do" + "while" ----

// let i = 0;
// do {
//     let a = prompt ("Статья расходов?", ''),
//         b = prompt ("Во сколько встанет?", '');
//     if ( typeof(a)=== "string" && typeof(a) !=null && typeof(b) !=null && a !='' && b !='' && a.length <10) {
//         console.log('done!');
//         appData.expenses[a] = b;
//     } else {
//         console.log('Вы где-то ввели недопустимое значение! Попробуйте снова!');
//         i--;
//     }

//     i++;
// }
//     while (i < 2);
    

appData.moneyPerDay = appData.budget / 30;

alert('Vash Budjet: ' + appData.moneyPerDay);

    if(appData.moneyPerDay < 100){
        alert('Маловато бабок у тебя сынок... надо чето думать');
    } else if(appData.moneyPerDay  > 200){
        alert('Да ты жирный кот... где столько поднимаешь?');
    } else if(appData.moneyPerDay >=100 && appData.moneyPerDay< 2000){
        alert('Ну не бедствуешь и ладно... как сам то братишка?');
    } else {
        alert('Гдето косяк братишка');
    }























