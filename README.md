# Discord Audit Log Bot

A Discord bot that fills in the gaps in Discord's Audit Log.

| | |
|:-:|:-:|
|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/messageEdit.png"> Message edit|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/messageDelete.png"> Message delete|
|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/messageEditWithImage.png"> Message edit with image|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/messageDeleteWithImage.png"> Message delete with image|
|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/memberJoin.png"> Member join|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/memberLeave.png"> Member leave|
|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/voiceJoin.png"> Voice join|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/voiceChange.png"> Voice change|
|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/voiceLeave.png"> Voice leave|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/streamStart.png"> Stream start|
|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/streamChange.png"> Stream change|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/streamStop.png"> Stream stop|
|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/listeningStart.png"> Listening start|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/listeningStop.png"> Listening stop|
|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/avatarChange.png"> Avatar change|<img src="https://raw.githubusercontent.com/peterthehan/discord-audit-log-bot/master/assets/usernameChange.png"> Username change|

The user's active clients are indicated in the footer as:
- 🌐: web
- 📱: mobile
- 💻: desktop

## Setup

1. Adapt and follow the steps found in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

2. Open [src/config.js](https://github.com/peterthehan/discord-audit-log-bot/blob/master/src/config.js) to configure your own settings:

```js
positiveColor: 3447003,
neutralColor: 15105570,
negativeColor: 15277667,
streamingColor: 6570404,
listeningColor: 1947988,
clientMap: { web: '🌐', mobile: '📱', desktop: '💻' },
deleteTimeThreshold: 1,
guildChannelMap: {
  'GUILD_1_ID': 'TEXT_CHANNEL_1_ID',
  'GUILD_2_ID': 'TEXT_CHANNEL_2_ID',
  'GUILD_3_ID': 'TEXT_CHANNEL_3_ID',
  // ...Add as many guild-channel mappings as you want.
}
```

> `clientMap` labels the client the user is connecting from.

> Message deletions that occur in less time than the `deleteTimeThreshold` (in seconds) will not be logged.

Visit for more help or information!

<a href="https://discord.gg/WjEFnzC">
  <img src="https://discordapp.com/api/guilds/258167954913361930/embed.png?style=banner2" title="Discord Server"/>
</a>
