const { Telegraf } = require('telegraf')
const bot = new Telegraf('7649300766:AAF4_Sd4A-SWLEbI6ihdTyYOOAwgUje4UoM')
bot.start((ctx) => ctx.reply('type /check, to learn if Vitya works today'))


bot.command('check', (ctx) => {
var now = new Date();
var cur_date = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//пятницу и субботу работает 22.11 23.11 

var workday_1 = new Date(2024, 10, 22)


var dif_in_days = (cur_date.getTime() - workday_1.getTime())/ (1000 * 3600 * 24);

if (dif_in_days % 4 === 0 || (dif_in_days - 1) % 4 === 0) {
    console.log('Сегодня Витя работает');
    ctx.reply('Сегодня Витя работает')
}else {
    console.log('Сегодня Витя отдыхает');
    ctx.reply('Сегодня Витя отдыхает')
}

});


bot.command('checkWeek', (ctx) => {
    var now = new Date();
    var cur_date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    //пятницу и субботу работает 22.11 23.11 
    
    var workday_1 = new Date(2024, 10, 22)
    
    
    var dif_in_days = (cur_date.getTime() - workday_1.getTime())/ (1000 * 3600 * 24);
    
    if (dif_in_days % 4 === 0) {
        console.log('Vitya works today');
        ctx.reply('Сегодня Витя работает');
    } else {
        console.log('Vitya doesn\'t work today');
        ctx.reply('Сегодня Витя отдыхает');
    }
    
    if ((dif_in_days + 1) % 4 === 0) {
        console.log('Vitya works tomorrow');
        ctx.reply('Завтра Витя работает');
    } else {
        console.log('Vitya doesn\'t work tomorrow');
        ctx.reply('Завтра Витя отдыхает');
    }
    
    if ((dif_in_days + 2) % 4 === 0) {
        console.log('Vitya works the day after tomorrow');
        ctx.reply('Послезавтра Витя работает');
    } else {
        console.log('Vitya doesn\'t work the day after tomorrow');
        ctx.reply('Послезавтра Витя отдыхает');
    }
    
    });

bot.launch();



 