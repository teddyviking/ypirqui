var SlackBot = require('slackbots');
var config = require('../config.js');

console.log(config);

var bot = new SlackBot({

    token: config.slack_token,
    name: config.slack_bot_name

});


bot.on('start', function() {

    var self = this;

    this.bot_full_data = this.users.filter(function(user) {
        return user.name === self.name;
    })[0];

    this.bot_id_as_user = this.bot_full_data.id;
    this.bot_id_as_mention = '<@' + this.bot_full_data.id + '>';
    this.bot_name = this.bot_full_data.name;
    this.bot_real_name = this.bot_full_data.real_name;
    this.bot_id = this.bot_full_data.profile.bot_id;
    this.params = {
        icon_url: this.bot_full_data.profile.image_48
    };

    console.log('- BOT   - ' + this.bot_name + ' ' + this.bot_id_as_user + '-' + this.bot_id);

    //bot.postMessageToChannel('general', 'Holiiiiiiii!', this.params);

});


bot.on('message', function(message) {

    if (message.type === 'hello') {
        console.log('- HELLO - Connection successful');
        return;
    }

    //Experimental. Ignore.
    if (message.type === 'reconnect_url') {
        return;
    }

    if (message.type === 'user_typing') {
        return;
    }

    if (message.type === 'file_shared') {
        return;
    }

    if (message.type === 'file_public') {
        return;
    }

    if (message.type === 'file_comment_added') {
        return;
    }

    if (message.type === 'file_change') {
        return;
    }

    if (message.type === 'presence_change') {
        console.log('- PCHNG - ' + message.user + ': ' + message.presence + (message.user === this.bot_id_as_user ? ' **' : ''));
        return;
    }


    if (message.type !== 'message') {

        console.log(message);

    } else {

        if (typeof message.subtype === 'undefined' &&
            message.channel[0] === 'C'
        ) {

            console.log('- MSG   - ' + message.user + ': ' + message.text);

            //console.log(message);

            var bot_response = '';

            if (message.text.search(this.bot_id_as_mention) != -1) {

                bot_response = '¿queeeeeeeeeeeeeeeé?';

            } else if (Math.random() > config.bot_random) {

                bot_response = ypirquiEncode(message.text);

            }

            bot.postMessage(message.channel, bot_response, this.params);

        }

    }

});


bot.on('open', function() {

    console.log('- OPEN  - Websocket opened');

});


bot.on('close', function() {

    console.log('- CLOSE - Websocket closed');

});


function ypirquiEncode(text) {

    regexp = new RegExp('<@' + this.bot_id_as_user + '>|\:[a-z_]+\:|qu|gu|gü|[aeouáéóúü]', 'g');

    text.toLowerCase();
    return text.replace(regexp, ypirquiSubs);


}

function ypirquiSubs(match) {

    if (match[0] === ':') {
        return ':eggplant:';
    }

    switch (match) {
        case 'a':
        case 'e':
        case 'o':
        case 'u':
            return 'i';
        case 'á':
        case 'é':
        case 'ó':
        case 'ú':
            return 'í';
        case 'qu':
            return 'qu';
        case 'gu':
            return 'gu';
        case 'gü':
            return 'gü';
    }
    return '=';
}