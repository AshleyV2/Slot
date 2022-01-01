import { Guild, GuildMember, ThreadManager } from 'discord.js';
import { ICommand } from 'wokcommands';

export default {
    category: 'Moderation',
    description: 'Used to remove a member from a server with giving them the option to join back.',
    requiredPermissions: ['KICK_MEMBERS'],
    
    guildOnly: true,

    minArgs: 2,
    expectedArgs: '<user> <reason>',
    expectedArgstypes: ['USER', 'STRING'],

    callback: ({message, interaction, args}) => {
        const target = message
        ? message.mentions.members?.first()
        : (interaction.options.getMember('user') as GuildMember)
        if (!target) {
            return 'Please Mention A User To Kick.'
        }
        if(!target.kickable) {
            return {
                custom: true,
                content: 'Cannot Kick That User.',
                ephemeral: true
            }
        }
        args.shift()
        const reason = args.join(' ')
        target.send(`You were kicked from **${target.guild.name}** due to **${reason}**`)
        target.kick(reason)
        return`<@${target.id}> Was Kicked from the server.`

    }
} as ICommand