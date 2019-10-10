
let money , time ;


function start() {
    money = +prompt ("Ваш бюджет на месяц?", '');
    

    while (isNaN(money) || money == '' || money == null ){
        money = +prompt ("Ваш бюджет на месяц?", '');
    }

    time = prompt ("Введите дату в формате YYYY-MM-DD", '');
}

start();



let appData ={ 
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

//  ---- Это цикл с "for" ------

function chooseExpenses () {
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
    
}

chooseExpenses ();

// appData.moneyPerDay = (appData.budget / 30).toFixed(3);

// alert('Vash Budjet: ' + appData.moneyPerDay);

//     if(appData.moneyPerDay < 100){
//         alert('Маловато бабок у тебя сынок... надо чето думать');
//     } else if(appData.moneyPerDay  > 2000){
//         alert('Да ты жирный кот... где столько поднимаешь?');
//     } else if(appData.moneyPerDay >=100 && appData.moneyPerDay<= 2000){
//         alert('Ну не бедствуешь и ладно... как сам то братишка?');
//     } else {
//         alert('Гдето косяк братишка');
//     }

function dectectDayBudget(){

    appData.moneyPerDay = (appData.budget / 30).toFixed(3);

    alert('Vash Budjet: ' + appData.moneyPerDay);
}

dectectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100){
        alert('Маловато бабок у тебя сынок... надо чето думать');
    } else if(appData.moneyPerDay  > 2000){
        alert('Да ты жирный кот... где столько поднимаешь?');
    } else if(appData.moneyPerDay >=100 && appData.moneyPerDay<= 2000){
        alert('Ну не бедствуешь и ладно... как сам то братишка?');
    } else {
        alert('Гдето косяк братишка');
    }

}

detectLevel ();





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
    



function checkSavings (){
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений???'),
            percent = +prompt('Под какой процент???');
            
        appData.monthIncome = save/100/12*percent;
        alert ('Доход v mesyac с вашего депозита: ' + appData.monthIncome);
    }

}

checkSavings ();


function chooseOptExpenses () {

    for (let i =0; i<=2; i++) {

        let questionOptExp = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = questionOptExp;

    }

}
chooseOptExpenses ();




















