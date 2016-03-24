# Ypirquí
### A Slack bot that sometimes ridicules you

Ypirquí (full name: Jennifer Ypirquí) is a [Node.js](https://nodejs.org) based [Slack](https://slack.com/) bot. It uses the great [SlackBots.js](https://github.com/mishk0/slack-bot-api) library by [Mikhail Mokrushin](https://github.com/mishk0).

### Installation
1. Create a new [bot integration](https://my.slack.com/services/new/bot) in Slack. Name it **ypirqui** and write down the API Token, it will be needed later.
2. Download the code from GitHub and uncompress it.
3. Open the folder and run `npm install` in it, to install all the dependencies.
4. Edit `config.js` and add your API Token (step one) to the line `config.slack_token = "";`
5. Run `node lib/ypirqui.js`
6. Enjoy

### What does Jennifer Ypirquí do?
Jennifer is like a five year old child, ridiculing you, repeating what you write, subtituting all the vowels with an i, a common form of mockery among kids in the Spanish language. You can also mention her (She will get back at the channel) or mention her and other users, and she will come back at _them_. Also, Jennifer interacts with emojis in her own peculiar way.

### Additional configuration
You can edit `config.js` to tune a bit Ypirquí's behaviour
- `config.bot_random`: controls the probability of Ypirquí's responses. Should be a number between 0 (always responds - not recommended) and 1 (never responds). A value around 0.75-0.85 is a good strating point.
- `config.bot_min_string_length`: If an user writes a string shorter than this value, Ypirquí will ignore it.



