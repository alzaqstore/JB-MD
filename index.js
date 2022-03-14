require('./settings')
const { default: makeWASocket, BufferJSON, WAMessageStubType, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia , generateWAMessage, areJidsSameUser, makeInMemoryStore} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require("moment-timezone");
const { performance } = require('perf_hooks')

const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const database = require('./database/database.json')
const stcCmd = JSON.parse(fs.readFileSync('./database/command.json'))

pp_bot = fs.readFileSync(thumbnail)
qris = fs.readFileSync(donasi)
// language
const  { ind } = require(`./language`)
lang = ind //language
enter = '\n'
typemenu = 'templateLocation'
moment.tz.setDefault("Asia/Jakarta").locale("id");


module.exports = alpha = async (alpha, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
 		var budy = (typeof m.text == 'string' ? m.text : ' ')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const type = Object.keys(mek.message)[0]
		 const from = mek.key.remoteJid
		 const content = JSON.stringify(mek.message)
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const isCreator = [alpha.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == alpha.user.id ? true : false
        const text = q = args.join(" ")
        const c = args.join(' ')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const botNumber = alpha.user.id ? alpha.user.id.split(":")[0]+"@s.whatsapp.net" : alpha.user.id
        const groupMetadata = m.isGroup ? await alpha.groupMetadata(from) : ''
        const groupId = m.isGroup ? groupMetadata.id : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const groupMembers = m.isGroup ? await groupMetadata.participants : ''
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		
		const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: pp_bot, surface: 200, message: `© ${ownername}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: pp_bot}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': pp_bot}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': pp_bot}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': pp_bot}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: pp_bot}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp_bot, thumbnail: pp_bot,sendEphemeral: true}}}
		let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
		
		const reply = async (teks) => {
			return await alpha.sendFakeLink(m.chat,teks,salam, pushname,ownername, thumbnail, myweb, m)
		}
		// DATABASE
try {
let users = global.db.data.users[m.sender]
if (typeof users !== 'object') global.db.data.users[m.sender] = {}
if (users) {
if (!isNumber(users.afkTime)) users.afkTime = -1
if (!('banned' in users)) users.banned = false
if (!('afkReason' in users)) users.afkReason = ''
} else global.db.data.users[m.sender] = {
afkTime: -1,
banned: false,
afkReason: '',
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('setWelcome' in chats)) chats.setWelcome = ''
if (!('setLeave' in chats)) chats.setLeave = ''
} else global.db.data.chats[m.chat] = {
setWelcome: '',
setLeave: '',
}

let settings = global.db.data.settings[botNumber]
if (typeof settings !== 'object') global.db.data.settings[botNumber] = {}
if (settings) {
if (!('available' in settings)) settings.available = false
if (!('composing' in settings)) settings.composing = false
if (!('recording' in settings)) settings.recording = false
} else global.db.data.settings[botNumber] = {
available: false,
composing: false,
recording: false,
}
} catch (err) {
console.log(err)
}


        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
        
        if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antilink && !isCreator && !isGroupAdmins && !isGroupOwner){
        	if (budy.match(`https://chat.whatsapp.com`)) {
        	alpha.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${groupMetadata.subject}`}, {quoted:m})
			alpha.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	}
        
        // Public & Self
        if (!alpha.public) {
            if (!m.key.fromMe && !isCreator) return
        }

        // Push Message To Console
        if (m.message) {
        	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(args.length))
         }
        const alphaapi ='https://api-alphabot.herokuapp.com/api'
		const alphakey = 'Alphabot'
        // Function
        const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return alpha.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return alpha.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return alpha.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return alpha.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return alpha.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
        }

        switch(command) {
        	case 'antilink':
			if (!m.isGroup) return reply(lang.groupOnly())
			if (!isGroupAdmins && !isGroupOwner && !isCreator) return reply(lang.adminOnly())
			if (!isBotAdmins) return reply(lang.botNotAdmin())
			if (args[0] === "on") {
				if (global.db.data.chats[m.chat].antilink) return reply('Sudah Aktif Sebelumnya')
				global.db.data.chats[m.chat].antilink = true
				reply(`Antilink Berhasil Di Aktifkan !`)
				} else if (args[0] === "off") {
					if (!global.db.data.chats[m.chat].antilink) return reply('Sudah Nonaktif Sebelumnya')
					global.db.data.chats[m.chat].antilink = false
					reply(`Antilink Berhasil Di Nonaktifkan !`)
					} else {
						alpha.sendButMessage(from, 'Mode Antilink', `© ${ownername}`, [{buttonId: 'antilink on', buttonText: {displayText: 'ON'}, type: 1},{buttonId: 'antilink off', buttonText: {displayText: 'OFF'}, type: 1}], {quoted: fgif})
						}
					break
            
            case 'linkgroup': case 'linkgrup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await alpha.groupInviteCode(m.chat)
                alpha.sendText(m.chat, `Link Group : *${groupMetadata.subject}*\nhttps://chat.whatsapp.com/${response}`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
            	if (!m.key.fromMe && !isCreator) throw mess.owner
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                alpha.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
	    case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Reply Sticker Dengan Caption *${prefix + command}*`
                reply(lang.wait())
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw 'Maaf Saat Ini Belum Support Sticker Gif '
                    let buffer = fs.readFileSync(ran)
                    alpha.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + `VERSION:3.0\n`
                    + `N:;${ownername}.;;;`
                    + `FN:${ownername}.\n` // full name
                    + `ORG:Owner ${botname};\n` // the organization of the contact
                    + `TEL;type=CELL;type=VOICE;waid=${ownernomer}:${ownernomerr}\n`
                    + 'END:VCARD'
                alpha.sendMessage(m.chat, { contacts: { displayName: 'Zeeone Ofc.', contacts: [{ vcard }] } }, { quoted: m })
            }
            break
            case 'stikerin':case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
}
}
break
case 'setname': case 'setsubject': {
                if (!m.isGroup) return reply(mess.group)
				if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
				if (!isBotAdmins) return reply(lang.botNotAdmin())
				if (!text) return reply(`Kirim perintah ${prefix + command} *teks*`)
                await alpha.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break

            case 'setdesc': case 'setdesk': case 'setdeskripsi':{
             	if (!m.isGroup) return reply(mess.group)
				if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
				if (!isBotAdmins) return reply(lang.botNotAdmin())
				if (!text) return reply(`Kirim perintah ${prefix + command} *teks*`)
				alpha.groupUpdateDescription(m.chat, `${args.join(" ")}`)
				reply(lang.ok())
				}
				break
            case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return reply(lang.groupOnly())
if (!isBotAdmins) return reply(lang.botNotAdmin())
if (!isGroupAdmins && !isGroupOwner && !isBotAdmins) return reply(lang.adminOnly())
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await alpha.downloadAndSaveMediaMessage(quoted)
await alpha.updateProfilePicture(groupId, { url: media }).catch((err) => fs.unlinkSync(media))
reply(lang.ok())
}
break
            case 'join': {
                if (!isCreator) return reply(lang.ownerOnly())
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                reply(lang.wait())
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await alpha.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'tagall': case 'infoall':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                let tekss = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${q ? q : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            tekss += `🏅 @${mem.id.split('@')[0]}\n`
				}
                tekss += `\n⋙ *${botname}* ⋘`
                alpha.sendMessage(from, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: fkontak })
            break
            case 'hidetag':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                alpha.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted: fkontak})
            break
            case 'kick': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(`Kirim nomer/tag/reply target yang ingin di kick !`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'add': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(`Kirim nomer/tag/reply target yang ingin di promote !`)
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'promote': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())	
                if (!m.quoted && !text) return reply(`Kirim nomer/tag/reply target yang ingin di promote !`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'demote': {
				if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (!m.quoted && !text) return reply(`Kirim nomer/tag/reply target yang ingin di demote !`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
				break
			case 'revoke':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                let link = await alpha.groupRevokeInvite(from)
                await reply(lang.ok() + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
            break
            case 'group': case 'grup': case 'gc':
                if (!m.isGroup) return reply(lang.groupOnly())
                if (!isBotAdmins) return reply(lang.botNotAdmin())
                if (!(isGroupAdmins || isGroupOwner )) return reply(lang.adminOnly())
                if (args[0] === 'open'){
                    await alpha.groupSettingUpdate(from, 'not_announcement')
		 		   reply(lang.ok())
                } else if (args[0] === 'close'){
                    await alpha.groupSettingUpdate(from, 'announcement')
                    reply(lang.ok())
                } else {
                    alpha.sendButMessage(from, 'GROUP SETTING', `© ${ownername}`, [{buttonId: 'group open', buttonText: {displayText: 'Open'}, type: 1},{buttonId: 'group close', buttonText: {displayText: 'Close'}, type: 1}], {quoted: fgif})
                }
            break 
            case 'format':{
            	reply(lang.format())
            	}
case 'frmtvlg':{
            	reply(lang.frmtvlg())
            	}
            break
case 'rules':{
            	reply(lang.rules())
            	}
            case 'menu':{
            	var but = [
						{
							"urlButton": {
								"displayText": "DROP VILOG",
								"url": `https://chat.whatsapp.com/FzvHVWoq2W9EpAs8VolFeI`
								}
								},
								{
									"urlButton": {
										"displayText": "DROP CHIP",
										"url": `https://chat.whatsapp.com/CRCWzRiJWwK8jdh7Mo76ME`
										}
										},
										{
											"quickReplyButton": {
												"displayText": "FF",
												"id": 'ff'
												}
												},
												{
													"quickReplyButton": {
														"displayText": "ML",
														"id": 'ml'
														}
														},
														{
															"quickReplyButton": {
																"displayText": "LIST STORE",
																"id": 'pricelist'
																}
																}
																]
							await alpha.send5ButLoc(from, `Halo` + ' ' + pushname + ' ' + `selamat datang di *ALZAQ STORE*` , `© ${ownername}`,pp_bot, but )
							}
							break
			case 'ff':{
				alpha.send2ButMes(m.chat, `Halo` + ' ' + pushname + ' ' + `Berikut adalah list diamond FF`, `© ${ownername}`, `ffa`, `FF A`, `ffb`, `FF B`, m)
				}
				break
			case 'ffa':{
				alpha.send2ButMes(m.chat, lang.ffa(), `© ${ownername}`, `format`, `FORMAT `, `bayar`, `BAYAR`, m)
				}
				break
			case 'ffb':{
				alpha.send2ButMes(m.chat, lang.ffb(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
				break
			case 'ml':{
				alpha.sendList(from, 'LIST DIAMOND ML', `© ${ownername}`, salam + ' ' +  pushname, 'KLIK DISINI', [
							{
								"title": "LIST DIAMOND ML",
								"rows": [
									{
										"title": "ML A",
										"rowId": "mla"
									},
									{
										"title": "ML B",
										"rowId": "mlb"
									},
									{
										"title": "ML C",
										"rowId": "mlc"
									},
									{
										"title": "ML GIFT",
										"rowId": "mlg"
									},
									{
										"title": "ML SLOW",
										"rowId": "mls"
									},
									{
										"title": "ML SEMIFAST",
										"rowId": "mlss"
									}
								]
							}
							], {quoted: m})
				}
			break
			case 'mla':{
				alpha.send2ButMes(m.chat, lang.mla(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
			break
			case 'mlb':{
				alpha.send2ButMes(m.chat, lang.mlb(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
			break
			case 'mlc':{
				alpha.send2ButMes(m.chat, lang.mlc(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
			break
			case 'mlg':{
				alpha.send2ButMes(m.chat, lang.mlg(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
			break
			case 'mls':{
				alpha.send2ButMes(m.chat, lang.mls(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
			break
			case 'mlss':{
				alpha.send2ButMes(m.chat, lang.mlss(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
			break
			case 'liststore': case 'pricelist':{
				alpha.sendList(from, 'LIST STORE', `© ${ownername}`, salam +   pushname, 'KLIK DISINI', [
							{
								"title": "LIST STORE",
								"rows": [
									{
										"title": "PULSA",
										"rowId": "pulsa"
									},
									{
										"title": "CV PULSA",
										"rowId": "cvpulsa"
									},
									{
										"title": "KEB. SOSMED",
										"rowId": "sosmed"
									},
									{
										"title": "APK PREMIUM",
										"rowId": "apk"
									},
									{
										"title": "ALL GAME VIA ID",
										"rowId": "game"
									}
								]
							}
							], {quoted: m})
				}
				break
				 case 'pulsa':{
					alpha.send2ButMes(m.chat, 'Silahkan di pilih kak' + ' ' + pushname + '🌜', `© ${ownername}`, `reguler`, `REGULER`, `transfer`, `TRANSFER`, m)
				}
					break
					case 'reguler':{
					alpha.send2ButMes(m.chat, lang.reguler(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
					break
					case 'transfer':{
					alpha.send2ButMes(m.chat, lang.transfer(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
					break
					case 'cvpulsa':{
					alpha.send2ButMes(m.chat, lang.cvpulsa(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
					break
					case 'sosmed':{
					alpha.send2ButMes(m.chat, lang.sosmed(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
					break
					case 'apk':{
					alpha.send2ButMes(m.chat, lang.apk(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
					break
					case 'game':{
						alpha.sendList(from, 'LIST TOP UP GAME', `© ${ownername}`, salam +   pushname, 'KLIK DISINI', [
							{
								"title": "LIST TOP UP GAME",
								"rows": [
									{
										"title": "FF",
										"rowId": "ff"
									},
									{
										"title": "ML",
										"rowId": "ml"
									},
									{
										"title": "PUBG",
										"rowId": "pubg"
									},
									{
										"title": "CODM",
										"rowId": "codm"
									},
									{
										"title": "ZEPETO",
										"rowId": "zepeto"
									},
									{
										"title": "VALORANT",
										"rowId": "valorant"
									},
									{
										"title": "LIFE AFTER",
										"rowId": "life"
									},
									{
										"title": "RAGNAROK",
										"rowId": "ragnarok"
									},
									{
										"title": "POINT BLANK",
										"rowId": "pb"
									},
									{
										"title": "DRAGON RAJA",
										"rowId": "dragon"
									},
									{
										"title": "SAUSAGE MAN",
										"rowId": "sausage"
									},
									{
										"title": "LORDS MOBILE",
										"rowId": "lords"
									},
									{
										"title": "LOL: WILD RIFT",
										"rowId": "lol"
									},
									{
										"title": "OMEGA LEGENDS",
										"rowId": "omega"
									},
									{
										"title": "ARENA OF VALOR",
										"rowId": "arena"
									},
									{
										"title": "GENSHIN IMPACT",
										"rowId": "genshin"
									}
								]
							}
							], {quoted: m})
					}
					break
					case 'pubg':{
						var but = [
						{
											"quickReplyButton": {
												"displayText": "PUBG FAST",
												"id": 'fast'
												}
												},
												{
													"quickReplyButton": {
														"displayText": "PUBG SEMI",
														"id": 'semi'
														}
														},
														{
															"quickReplyButton": {
																"displayText": "PUBG GLOBAL",
																"id": 'global'
																}
																}
																]
							await alpha.send5ButLoc(from, salam + '' + pushname, `© ${ownername}`,pp_bot, but )
							
						}
						break
						case 'fast':{
						alpha.send2ButMes(m.chat, lang.fast(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'semi':{
						alpha.send2ButMes(m.chat, lang.semi(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'global':{
						alpha.send2ButMes(m.chat, lang.global(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'codm':{
						alpha.send2ButMes(m.chat, lang.codm(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'zepeto':{
						alpha.send2ButMes(m.chat, lang.zepeto(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'valorant':{
					alpha.send2ButMes(m.chat, lang.valorant(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'life':{
						alpha.send2ButMes(m.chat, lang.life(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'ragnarok':{
						alpha.send2ButMes(m.chat, lang.ragnarok(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'pb':{
						alpha.send2ButMes(m.chat, lang.pb(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'dragon':{
						alpha.send2ButMes(m.chat, lang.dragon(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'sausage':{
						alpha.send2ButMes(m.chat, lang.sausage(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'lords':{
						alpha.send2ButMes(m.chat, lang.lords(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'lol':{
						alpha.send2ButMes(m.chat, lang.lol(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'omega':{
						alpha.send2ButMes(m.chat, lang.omega(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'genshin':{
						alpha.send2ButMes(m.chat, lang.genshin(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
case 'vilog':{
						alpha.sendList(from, 'LIST TOP UP GAME', `© ${ownername}`, salam +   pushname, 'KLIK DISINI', [
							{
								"title": "LIST VILOG ALL GAME",
								"rows": [
									{
										"title": "FF",
										"rowId": "vilogff"
									},
									{
										"title": "LINE",
										"rowId": "line"
									},
									{
										"title": "TIKTOK",
										"rowId": "tt"
									},
									{
										"title": "ZEPETO",
										"rowId": "zpt"
									},
									{
										"title": "ROBLOX",
										"rowId": "roblox"
									},
									{
										"title": "PES 2021",
										"rowId": "pes"
									},
									{
										"title": "LIFE AFTER",
										"rowId": "la"
									},
									{
										"title": "PUBG MOBILE",
										"rowId": "vilogpubg"
									},
									{
										"title": "GENSHIN IMPACT",
										"rowId": "viloggenshin"
									},
									{
										"title": "REQUEST ALL GAME",
										"rowId": "request"
									}
								]
							}
							], {quoted: m})
					}
					break
					case 'chip':{
						var but = [
						{
											"quickReplyButton": {
												"displayText": "CHIP EMAS",
												"id": 'emas'
												}
												},
												{
													"quickReplyButton": {
														"displayText": "CHIP UNGU",
														"id": 'ungu'
														}
														},
														{
															"quickReplyButton": {
																"displayText": "VIP NAMBAH LIMIT",
																"id": 'vip'
																}
																}
																]
							await alpha.send5ButLoc(from, salam + '' + pushname, `© ${ownername}`,pp_bot, but )
							
						}
						break
case 'emas':{
						alpha.send2ButMes(m.chat, lang.emas(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'ungu':{
						alpha.send2ButMes(m.chat, lang.ungu(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'vip':{
						alpha.send2ButMes(m.chat, lang.vip(), `© ${ownername}`, `format`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'vilogff':{
						alpha.send2ButMes(m.chat, lang.vilogff(), `© ${ownername}`, `frmtvlg`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'line':{
						alpha.send2ButMes(m.chat, lang.line(), `© ${ownername}`, `frmtvlg`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'tt':{
					alpha.send2ButMes(m.chat, lang.tt(), `© ${ownername}`, `frmtvlg`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'zpt':{
						alpha.send2ButMes(m.chat, lang.zpt(), `© ${ownername}`, `frmtvlg`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'roblox':{
						alpha.send2ButMes(m.chat, lang.roblox(), `© ${ownername}`, `frmtvlg`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'pes':{
						alpha.send2ButMes(m.chat, lang.pes(), `© ${ownername}`, `frmtvlg`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'la':{
						alpha.send2ButMes(m.chat, lang.la(), `© ${ownername}`, `frmtvlg`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'vilogpubg':{
						alpha.send2ButMes(m.chat, lang.vilogpubg(), `© ${ownername}`, `frmtvlg`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'viloggenshin':{
						alpha.send2ButMes(m.chat, lang.viloggenshin(), `© ${ownername}`, `frmtvlg`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
					case 'request':{
						alpha.send2ButMes(m.chat, lang.request(), `© ${ownername}`, `frmtvlg`, `FORMAT`, `bayar`, `BAYAR`, m)
				}
						break
		case 'pay': case 'bayar':{
				let cap =`*╭─❒  SCAN UNTUK GOPAY ❒──*
*│*
*│*⬡ *BRI : 547901014514 538*
*│*⬡ *BCA : 8455711777*
*│*⬡ *OVO : 082288381388*
*│*⬡ *DANA : 082288381388*
*│*⬡ *SHOPEE : 082288381388*
*│* *ALZAQSTORE / ARI ALZAQKRI*
*│* *ALFA/INDO/QR MINTA ADMIN*
*└────────────────────*
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
▌│█║▌║▌║║▌│▌║█│▌║▌║█│
▌│█║▌║▌║║▌│▌║█│▌║▌║█│`
alpha.sendMessage(from, {image : fs.readFileSync('./image/alzaq92.jpg'), caption: cap}, {quoted: m})
				}
			break
            case 'p': case 'proses':{
            	let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            	let teks = `「 *TRANSAKSI PENDING*」

\`\`\`📅 TANGGAL : ${tanggal(new Date())}
⌚ JAM : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
⏳ STATUS : Pending\`\`\`

🗒️ Catatan :
${tek}

Pesanan sedang di proses!`
alpha.sendTextWithMentions(m.chat, teks, m)
            	}
            break
            case 'd': case 'done':{
            	            	let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
            	let teks = `「 *TRANSAKSI BERHASIL*」

\`\`\`📅 TANGGAL : ${tanggal(new Date())}
⌚ JAM : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
⏳ STATUS : Berhasil\`\`\`

Terima kasih di tunggu next order ya 🙏`
alpha.sendTextWithMentions(m.chat, teks, m)
            	}
            break
			 default:
} 
} catch (err) {
 console.log(err)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
