const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();

const prefix = "="

   client.on("message", message => {
 if (message.content === "=help") {
message.channel.send('**${prefix}q1 ➼ القرآن الكريم بصوت الشيخ ماهر المعيقلي
${prefix}q2 ➼ القران الكريم بصوت هزاع البلوشي
${prefix}q3 ➼ القرآن الكريم بصوت الشيخ ياسر الدوسري
${prefix}q4 ➼ القرآن الكريم بصوت الشيخ أحمد العجمي
${prefix}q5 ➼ القرآن الكريم بصوت الشيخ عبدالرحمن السديس
${prefix}stop  ➼  لإخرآج البوت من الروم
**')
   }
   });
   

   client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('=q1')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('=stop')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});


   client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('=q2')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=14JEJ0Cqq_M', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('=stop000')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});


   client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('=q3')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=WYT0pQne-7w', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('=stop000')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});


   client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('=q4')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=WYT0pQne-7w', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('=stop000')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});




   client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('=q5')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=a-JdEFdgBaU', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('=stop000')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});




   
   
   client.on('message', message => {
 if(message.content.startsWith(prefix + "1q")) {
message.member.voiceChannel.join();
}
});

client.on('message', message => {
 if(message.content.startsWith(prefix + "2q")) {
message.member.voiceChannel.join();
}
});


client.on('message', message => {
 if(message.content.startsWith(prefix + "3q")) {
message.member.voiceChannel.join();
}
});


client.on('message', message => {
 if(message.content.startsWith(prefix + "4q")) {
message.member.voiceChannel.join();
}
});

client.login(process.env.BOT_TOKEN)
