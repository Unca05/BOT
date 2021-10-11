const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '공지해줘') {
    msg.reply('기본 할 일(프로필 바꾸기, 소개글 쓰기) 등은 모두 해줘. 반말 써도 되니까 반말 쓰고. 채팅 기본 매너는 지키자.');
  }

  if (msg.content === '넌 누구야?') {
    msg.reply('기본 안내해주는 루브봇이라고 해.');
  }

  if (msg.content === '주의사항') {
    msg.reply('채팅은 주제 맞는 채널에서 하자. 무트, 도용하면 바로 강퇴니까 그렇게 알고.');
  }

  if (msg.content === '장르언급') {
    msg.reply('그림, 유튜브 채널, 게임 등등 다 언급 가능한데, 논란있는 것들은 언급금지야.(EX- 프나펑 스카이, 일베 등)');
  }

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  const convertEmoji = (who) => {
    if(who === "가위"){
      return "가위";
    }
    else if(who === "바위"){
      return "바위";
    }
    else if(who === "보"){
      return "보";
    }
  }
  
    if(msg.content === "가위" || msg.content === "바위" || msg.content === "보") {
      const human = msg.content;
      const list = ["가위", "바위", "보"];
      const random = Math.floor(Math.random() * 3);
      const bot = list[random];
      let winner = "";
  
      if(human === bot) {
        winner = "비김";
      }
      else {
        human === "가위" ? (winner = bot === "바위" ? "나" : "너") : "";
        human === "바위" ? (winner = bot === "보" ? "나" : "너") : "";
        human === "보" ? (winner = bot === "가위" ? "나" : "너") : "";
      }
  
      const result =
  `
  너 : ${convertEmoji(human)} vs 나 : ${convertEmoji(bot)}
  ${winner === "비김" ? "비겼네." : winner + "의 승리네."}
  `
      msg.reply(result);
    }

});

client.login('ODk3MTE3NTExNTA4NzAxMTk0.YWQ_yg.C492RQ_xGu79o4ZkhTcJ4QzwaGE');