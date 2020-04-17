/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Command, CommandArguments, Constants } from "tesseract";
import { Message } from "discord.js";

import BastionGuild = require("../../structures/Guild");

export = class LinkFilterCommand extends Command {
    constructor() {
        super("linkFilter", {
            description: "It allows you to enable (and disable) Link Filter in the server. And it also allows you to configure if violation of this filter should be considered an infraction.",
            triggers: [],
            arguments: {
                alias: {
                    disable: [ "d" ],
                    enable: [ "e" ],
                    infraction: [ "i" ],
                },
                boolean: [ "disable", "enable", "infraction" ],
            },
            scope: "guild",
            owner: false,
            typing: true,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [ "MANAGE_GUILD" ],
            syntax: [
                "linkFilter",
                "linkFilter --enable",
                "linkFilter --disable",
                "linkFilter --infraction",
                "linkFilter --no-infraction",
            ],
        });
    }

    exec = async (message: Message, argv: CommandArguments): Promise<void> => {
        const guild = (message.guild as BastionGuild);

        // update link filter settings
        guild.document.filters = {
            ...guild.document.filters,
            linkFilter: {
                enabled: argv.disable ? undefined : argv.enable || guild.document.filters && guild.document.filters.linkFilter && guild.document.filters.linkFilter.enabled ? true : undefined,
                infraction: argv.infraction === false ? undefined : argv.infraction || guild.document.filters && guild.document.filters.linkFilter && guild.document.filters.linkFilter.infraction ? true : undefined,
            },
        };

        // save document
        await guild.document.save();

        // acknowledge
        await message.channel.send({
            embed: {
                color: argv.enable ? Constants.COLORS.GREEN : argv.disable ? Constants.COLORS.RED : Constants.COLORS.IRIS,
                description: this.client.locale.getString("en_us", "info", argv.enable ? "linkFilterEnable" : argv.disable ? "linkFilterDisable" : guild.document.filters.linkFilter.enabled ? "linkFilterEnabled" : "linkFilterDisabled", message.author.tag),
                footer: {
                    text: guild.document.filters.linkFilter.enabled ? this.client.locale.getString("en_us", "info", guild.document.filters.linkFilter.infraction ? "filterInfractionEnabled" : "filterInfractionDisabled") : "",
                },
            },
        }).catch(() => {
            // this error can be ignored
        });
    }
}