require('dotenv').config();
const telegramApi = require('node-telegram-bot-api');

const { TOKEN_BOT } = process.env;

const bot = new telegramApi(TOKEN_BOT, {polling: true});

bot.setMyCommands([
  {command: '/start', description: 'Начальное приветсвтвие'},
  {command: '/info', description: 'Что умеет этот бот'},
]);

bot.on('message', (msg) => {
    const {text, chat} = msg;
    bot.sendMessage(chat.id, `You write text ${text}`);
});
