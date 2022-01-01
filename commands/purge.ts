import { Guild, GuildMember, ThreadManager } from 'discord.js';
import { ICommand } from 'wokcommands';
import DJS from 'discord.js'
export default {
  category: 'Moderation',
  description: 'Deletes multiple messages at once.',

  permissions: ['MANAGE_MESSAGES'],

  maxArgs: 1,
  expectedArgs: '[amount]',

  callback: async ({ message, interaction, channel, args }) => {
    
    const amount = args.length ? parseInt(args.shift()!) : 10

    if (message) {
      await message.delete()
    }

    const { size } = await channel.bulkDelete(amount, true)
    const reply = new DJS.MessageEmbed()
    const embed = new DJS.MessageEmbed()
  .setColor(12332065)
  .setTitle("Purge")
  .setDescription(`Purged ${size} Message(s)`)
  .setTimestamp()
  .setFooter(`Moderator: ${message.author.tag}`);
  channel.send({ embeds: [embed] });


  },
} as ICommand
