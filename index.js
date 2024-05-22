const express = require('express');
const bodyParser = require('body-parser');
const { Telegraf } = require('telegraf');

const bot = new Telegraf('6991486301:AAHKH-OM7CrNhmkAjVmKbtXAqrzUFSL_t80');

const reply = text => ctx => ctx.reply(text);
const sendImage = source => ctx => ctx.replyWithPhoto(source);
const sendVideo = source => ctx => ctx.replyWithVideo(source);
const sendAudio = source => ctx => ctx.replyWithAudio(source);

bot.start(reply('Welcome!'));

bot.on('text', ctx => {
  const [command, ...args] = ctx.message.text.split(' ');
  switch (command) {
    case '/hallo':
      reply(`hello too. You said: ${args[0]}`)(ctx);
      break;
    default:
      reply('Command not recognized.')(ctx);
  }
});

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Bot Active√'));

app.listen(3000, () => console.log('Server running on port 3000'));

bot.launch();