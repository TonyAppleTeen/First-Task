

let money , time ;


function start() {
    money = +prompt ("Ваш бюджет на месяц?", '');
    

    while (isNaN(money) || money == '' || money == null ){
        money = +prompt ("Ваш бюджет на месяц?", '');
    }

    time = prompt ("Введите дату в формате YYYY-MM-DD", '');
}

start();

let appData = { 
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i=0; i<2; i++) {
            let a = prompt ('Введите обязательную строку расходов в этом месяце',''),
                b = prompt ('Во сколько обойдется?','');
            
            if (typeof(a) === 'string' &&  typeof(a) != null && a !='' && typeof(b) != null && b !='' && a.length <20) {
                console.log ('chooseExpenses - done');
                appData.chooseExpenses[a] = b;
            } else { 
                console.log('cjooseExp - something wrong');
                i--;
            }
        }
    },
    dectectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(3);
        alert('Vash Budjet na odin den: ' + appData.moneyPerDay);
    },
    detectLeve: function () {
        if(appData.moneyPerDay < 100){
            alert('Маловато бабок у тебя сынок... надо чето думать');
        } else if(appData.moneyPerDay  > 2000){
            alert('Да ты жирный кот... где столько поднимаешь?');
        } else if(appData.moneyPerDay >=100 && appData.moneyPerDay<= 2000){
            alert('Ну не бедствуешь и ладно... как сам то братишка?');
        } else {
            alert('Гдето косяк братишка');
        }
    },
    checkSavings: function (){
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений???'),
                percent = +prompt('Под какой процент???');
                
            appData.monthIncome = save/100/12*percent;
            alert ('Доход v mesyac с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i =0; i<=2; i++) {
            let questionOptExp = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = questionOptExp;
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет доп доход? (Перечислите через запятую','');
        if (typeof(items) !='string' || items =='' || (items) ==null) {
            console.log('chooseIncome - введено некорректное значение или оно невведено вовсе');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Mojet chto-to eshe?',""));
            appData.income.sort();
        }
        appData.income.forEach (function (itemmasive, i) {
            alert('Sposobi dop zarabotka: ' + (i+1) + '-' + itemmasive);
        });
    }
};
for (let key in appData) {
    console.log('Nasha programma vkluchaet v sebya dannie: ' + key +' - ' + appData[key]);
}




