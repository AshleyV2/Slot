import { GuildMember, Message, ThreadManager, GuildBan } from 'discord.js';
import { ICommand } from 'wokcommands';
import DJS from 'discord.js';
import DiscordJS from 'discord.js'

export default {
    category: 'Moderation',
    description: 'Used to remove a member from a server without giving them the option to join back.',
    requiredPermissions: ['BAN_MEMBERS'],

    guildOnly: true,

    minArgs: 1,
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'],

    callback: ({message, interaction, args}) => {
        const target = message
        ? message.mentions.members?.first()
        : (interaction.options.getMember('user') as GuildMember)
        if (!target) {
        const reply = new DJS.MessageEmbed()
        const embed1 = new DJS.MessageEmbed()
        .setColor(0x3498DB)
        .setTitle("Ban | Error")
        .setDescription(`Sorry, Please enter A Valid User ID.`)
        .setTimestamp()
        .setFooter(`Moderator: ${message.author.tag}`);
        return {
        content: message.channel.send({ embeds: [embed1] })
        }
        }
        if(!target?.bannable) {
            const embed2 = new DJS.MessageEmbed()
            const reply = new DJS.MessageEmbed()
            
            .setColor(12332065)
            .setTitle("Ban | Error")
            .setDescription(`Sorry, But you cannot Ban ${target}`)
            .setTimestamp()
            .setFooter(`Moderator: ${message.author.tag}`);
            message.channel.send({ embeds: [embed2] });
        }

        args.shift();
        const reason = args.join(' ');
        target.ban({
            reason,
            days: 7,
        })
        const embed3 = new DJS.MessageEmbed()
        const reply = new DJS.MessageEmbed()
        
        .setColor(12332065)
        .setTitle("Ban")
        .setDescription(`User: ${target} Was **Permanently** Banned From The Server.`)
        .setTimestamp()
        .setFooter(`Moderator: ${message.author.tag}`);


        return {
            content: message.channel.send({embeds: [embed3] })
        }
    }
} as ICommand