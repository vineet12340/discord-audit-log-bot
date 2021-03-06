const AuditLogEmbedBuilder = require('../classes/AuditLogEmbedBuilder');

const streamingRegExp = /twitch/gi;

module.exports = (state, activity) => {
  if (!activity.url || !streamingRegExp.test(activity.url)) return;

  const embed = new AuditLogEmbedBuilder()
    .setColor('streamingColor')
    .setBody(`${activity.details}: ${activity.name}`)
    .setLink(activity.url);

  switch (state) {
    case 'START':
      return embed.setFooter('Started stream');
    case 'STOP':
      return embed.setFooter('Stopped stream');
    case 'CHANGE':
      return embed.setFooter('Changed stream');
  }

  return null;
};
