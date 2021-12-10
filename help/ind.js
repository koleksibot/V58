const fs = require('fs')


exports.ok = () => {
    return `Ok desu~`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}menu*`
}

exports.hadis = (command) => {
    return `*── 「 HADIS 」 ──*

Daftar hadis:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${command} bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${command} muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${command} tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${command} nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${command} ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${command} abu-daud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${command} malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${command} ibnu-majah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${command} darimi 3`
}

exports.groupBot = (sender) => {
    return `
Link Group Rushia Bot : https://chat.whatsapp.com/B88FbnUm0OsEwdE2xyPC7v


Jangan lupa join ya kak @${sender.split('@')[0]}`
}

exports.BlockBan = (ownerNumber, prefix) => {
    return `*Sepertinya kamu telah diblok/diban. Hubungi untuk mengetahui cara membuka blok!*\n\n Owner: wa.me/${ownerNumber}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.stickerDel = () => {
    return `Stiker berhasil dihapus dari database!`
}

exports.stickerAdd = () => {
    return `Stiker berhasil ditambahkan ke database!`
}

exports.stickerAddAlready = (q) => {
    return `Stiker dengan keyword "${q}" sudah ada di database!`
}

exports.stickerNotFound = () => {
    return `Stiker tidak ditemukan!`
}

exports.vnDel = () => {
    return `Vn berhasil dihapus dari database!`
}

exports.vnAdd = () => {
    return `Vn berhasil ditambahkan ke database!`
}

exports.vnAddAlready = (q) => {
    return `Vn dengan keyword "${q}" sudah ada di database!`
}

exports.vnNotFound = () => {
    return `Vn tidak ditemukan!`
}

exports.imageAdd = () => {
    return `image berhasil ditambahkan ke database!`
}

exports.imageAddAlready = (q) => {
    return `image dengan keyword "${q}" sudah ada di database!`
}

exports.imageNotFound = () => {
    return `image tidak ditemukan!`
}

exports.respon = (ketikan, respt) => {
    return `
*── 「 AUTO RESPON 」 ──*

Auto-Respon berhasil dibuat dengan:

➸ *Text*: ${ketikan}
➸ *Akan Merespon*: ${respt}`
}

exports.responAlready = (ketikan) => {
    return `
Maaf, autorespon untuk teks "${ketikan}" sudah ada sebelumnya,harap memasukkan teks lain.`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.claimOn = (yo) => {
    return `
*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *10000Xp* dan *$${yo}* balance
Dari claim harian`
}

exports.claimOnAlready = () => {
    return `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.menu = (prefix, ucap, pushname2, jumlahUser, timebot, owner, jumlahHarian, jumlahCommand, sender, time, public, levelMenu, xpMenu, reqXp, uangku, role, Limitnya) => {
    return `\`\`\`Selamat ${ucap} Kak @${sender.split('@')[0]}\`\`\`

╭── 「 *BOT INFO* 」 ──
│
│❒͡  _*Rushia Bot*_ 
│❒͡ *Contact My Owner*
│ *https://wa.me/${owner}*
│❒͡ *Time: ${time}*
│❒͡ *STATUS* :「 ${public} 」
│
╰── 「 *Rushia Bot* 」 ──

❉──────────────────❉  
*Name* : *${pushname2}* 
*Your API* : *https://wa.me/${sender.split('@')[0]}*
*Limit* : *${Limitnya}*


*Your Progress*:
*Level: ${levelMenu}*
*XP: ${xpMenu} / ${reqXp}*
*Role: ${role}*
*Your Balance: $${uangku}*
❉──────────────────❉  

*── 「 BOT STATUS 」 ──*

 ❏ *${timebot}*

 𒍮 *Auto-Regis User: ${jumlahUser}*

 𒍮 *Total Hit Bot : ${jumlahCommand}*

 𒍮 *Total Hit Today : ${jumlahHarian}*

*── 「 Rushia Bot 」 ──*


*Official BOT By @0*`
}

exports.menuDownloader = (prefix) => {
    return `
*── 「 DOWNLOADER 」 ──*
❒ ${prefix}ytdl \`\`\`link\`\`\`
❒ ${prefix}ytmp3 \`\`\`link\`\`\`
❒ ${prefix}ytmp4 \`\`\`link\`\`\`
❒ ${prefix}igdl \`\`\`link\`\`\`
❒ ${prefix}fbdl \`\`\`link\`\`\`
❒ ${prefix}twt \`\`\`link\`\`\`
    `
}

exports.menuText = (prefix) => {
    return `
*── 「 TEXT MAKER 」 ──*
❒ ${prefix}retro
    `
}

exports.menuPremi = (prefix) => {
    return `
*── 「 PREMIUM 」 ──*
Halo premium users ヽ(・∀・)ﾉ!
❒ ${prefix}tiktok
❒ ${prefix}play
❒ ${prefix}joox
❒ ${prefix}rexdl
`
}

exports.menuSticker = (prefix) => {
    return `
*── 「 STICKER 」 ──*
❒ ${prefix}stiker/stiker/s
❒ ${prefix}nimestick
❒ ${prefix}patrik
❒ ${prefix}gura
❒ ${prefix}doge
❒ ${prefix}bucinstick
❒ ${prefix}ttp \`\`\`text\`\`\`
❒ ${prefix}sfire
❒ ${prefix}toimg
❒ ${prefix}togif
❒ ${prefix}take 
    `
}

exports.menuWeeaboo = (prefix) => {
    return `
*── 「 WEEABOO 」 ──*
❒ ${prefix}waifu
❒ ${prefix}neko
❒ ${prefix}slap
❒ ${prefix}pat
❒ ${prefix}baka
❒ ${prefix}hug
❒ ${prefix}kiss
❒ ${prefix}manga \`\`\`query\`\`\`
❒ ${prefix}anime \`\`\`query\`\`\`
❒ ${prefix}wait
❒ ${prefix}megumin
❒ ${prefix}shinobu
    `
}

exports.menuFun = (prefix) => {
    return `
*── 「 FUN FEATURE 」 ──*
❒ ${prefix}darkjoke
❒ ${prefix}memeindo
❒ ${prefix}ganteng @tag
❒ ${prefix}cantik @tag
❒ ${prefix}jadian
❒ ${prefix}hobby
❒ ${prefix}tod
❒ ${prefix}family100
❒ ${prefix}tebakgambar
❒ ${prefix}fml
❒ ${prefix}meme
❒ ${prefix}joke
❒ ${prefix}quotes
    `
}

exports.menuImage = (prefix) => {
    return `
*── 「 EFFECT AND MANIPULATION 」 ──*
❒ ${prefix}treshold
❒ ${prefix}sepia
❒ ${prefix}brightness
❒ ${prefix}invertgrey
❒ ${prefix}invert
❒ ${prefix}greyscale
❒ ${prefix}glass
❒ ${prefix}captcha
❒ ${prefix}blurpufy
❒ ${prefix}magic
❒ ${prefix}deep
❒ ${prefix}burik
❒ ${prefix}threats
❒ ${prefix}wated
❒ ${prefix}ytc
❒ ${prefix}phcomment
    `
}

exports.menuKerang = (prefix) => {
    return `
*── 「 KERANG 」 ──*
❒ ${prefix}apakah
❒ ${prefix}kapankah
❒ ${prefix}bisakah
❒ ${prefix}rate
    `
}

exports.menuModeration = (prefix) => {
    return `
*── 「 MODERATION GROUP 」 ──*
❒ ${prefix}hidetag
❒ ${prefix}kick
❒ ${prefix}add
❒ ${prefix}welcome enable/disable
❒ ${prefix}leveling enable/disable
❒ ${prefix}nsfw enable/disable
❒ ${prefix}del
❒ ${prefix}promote @tag
❒ ${prefix}demote @tag
❒ ${prefix}revoke
❒ ${prefix}setdesc
❒ ${prefix}group enable/disable
❒ ${prefix}setppgrup
❒ ${prefix}tagall
❒ ${prefix}antibadword enable/disable
❒ ${prefix}mute enable/disable
❒ ${prefix}antilink enable/disable
❒ ${prefix}antivo enable/disable
❒ ${prefix}autostiker enable/disable
❒ ${prefix}leveling enable/disable
   `
}


exports.menuNsfw = (prefix) => {
    return `
*── 「 NSFW 」 ──*
❒ ${prefix}lewd
❒ ${prefix}waifu18
❒ ${prefix}fetish
❒ ${prefix}lewdavatar
❒ ${prefix}femdom
    `
}

exports.menuOwner = (prefix) => {
    return `
*── 「 OWNER MENU 」 ──*
Halo Owner-sama ヽ(・∀・)ﾉ!
❒ ${prefix}sewa add/del waktu
❒ ${prefix}reset
❒ ${prefix}prem add/del
❒ ${prefix}ban add/del @tag
❒ ${prefix}unblock 6281
❒ ${prefix}self
❒ ${prefix}public
❒ ${prefix}clearall
❒ ${prefix}shutdown
❒ ${prefix}setprefix
❒ ${prefix}setname
❒ ${prefix}give @tag jumlahxp
❒ ${prefix}setstat
❒ ${prefix}bc
   `
}

exports.menuLeveling = (prefix) => {
    return `
*── 「 LEVELING 」 ──*
❒ ${prefix}level
❒ ${prefix}lb/leaderboard
❒ ${prefix}claim/klaim
❒ ${prefix}slot
❒ ${prefix}suit
    `
}

exports.menuPrimbon = (prefix) => {
    return `
*── 「 PRIMBON MENU 」 ──*
❒ ${prefix}artinama
❒ ${prefix}artimimpi
❒ ${prefix}partner nama|nama
    `
}

exports.menuPray = (prefix) => {
    return `
*── 「 PRAY 」 ──*
❒ ${prefix}asmaulhusna
❒ ${prefix}jadwalsholat
❒ ${prefix}niatsholat
    `
}

exports.menuMisc = (prefix) => {
    return `
*── 「 MEDIA AND MISC 」 ──*
❒ ${prefix}wiki \`\`\`quey\`\`\`
❒ ${prefix}ytsearch \`\`\`query\`\`\`
❒ ${prefix}igstalk
❒ ${prefix}resep
❒ ${prefix}githubstalk
❒ ${prefix}reddit 
❒ ${prefix}covid
❒ ${prefix}google
❒ ${prefix}translate
❒ ${prefix}tts
❒ ${prefix}asupan
❒ ${prefix}pinterest
❒ ${prefix}spamcall
❒ ${prefix}afk
❒ ${prefix}grupinfo
❒ ${prefix}linkgc
❒ ${prefix}uptopremium
❒ ${prefix}listban
❒ ${prefix}ceksewa
❒ ${prefix}cekpremium
    `
}

exports.menuBot = (prefix) => {
    return `
*── 「 BOT STAT 」 ──*
❒ ${prefix}owner
❒ ${prefix}bal
❒ ${prefix}sewabot
❒ ${prefix}status
❒ ${prefix}ping
❒ ${prefix}runtime
❒ ${prefix}tos
❒ ${prefix}tagme
❒ ${prefix}getpic
❒ ${prefix}leave
❒ ${prefix}buylimit
❒ ${prefix}buygamelimit
❒ ${prefix}botgrup
❒ ${prefix}rules
    `
}

exports.menuPrice = (owner, pushname) => {
    return `
*── 「 PRICE LIST 」 ──*
 
*Hai kak  ${pushname}*
*Harga Sewa Bot*
*15K/Group Selama 1 Bulan*

*Pembayaran Bisa Melalui Metode Pembayaran di Bawah:*
*OVO/Dana/Gopay = ${owner}*
*QRis yang dilampirkan*

*_note_*:
*Jika kalian ingin menjadi owner bot,bisa chat owner untuk price nya :D*
*wa.me/${owner} (Owner)*

    `
}

exports.UpToPremi = (ownerNumber, prefix) => {
    return `
*── 「 UPGRADE PREMIUM 」 ──*

*Tarif Premium User adalah 10K Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*

*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
*DANA = 085156897673*
*Qris pada gambar diatas*

*Info Lebih Lengkap Chat Owner, Ketik ${prefix}owner
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
085156897673 (DANA)


Terima kasih!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

Untuk melihat script yang bot gunakan,ketik ${prefix}sc
    `
}
