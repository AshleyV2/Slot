import { ICommand } from "wokcommands";

export default {
    category: 'Vicegram',
    description: 'Start the staff training process',

    guildOnly: true,

    callback: async ({ guild, message, interaction, args }) => {
        if (message.guildId !== '926478930830045234'){
            message.reply('ERROR: This command can only be used in Vicegram!')
        }
        else{
            message.guild?.channels.create(`training-${message.member?.displayName}`, {
                permissionOverwrites: [
                    {
                        id: message.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL'],
                    },
                    {
                        id: message.author.id,
                        allow: ['VIEW_CHANNEL']
                    }
                ],
            })
        }
    }        
} as ICommand