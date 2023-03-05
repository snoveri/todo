const quotes = [
  {
    quotes: "오늘 느끼는 고통이 내일 느낄 힘이다.",
    author: "Unknown0",
  },
  {
    quotes: "추측하는 것 보다 알아내는 것이 더 현명하다.",
    author: "Unknown1",
  },
  {
    quotes: "삶은 우연히 좋아지는 것이 아니라 변화에 의해 좋아진다.",
    author: "Unknown2",
  },
  {
    quotes: "닭의 목을 비틀어도 새벽은 온다.",
    author: "Unknown3",
  },
  {
    quotes: "시작은 미약하였으나 끝은 창대하리라.",
    author: "Unknown4",
  },
  {
    quotes: "이것 또한 지나가리라.",
    author: "Unknown5",
  },
  {
    quotes: "죄를 미워하지 말되 사람을 미워하라.",
    author: "Unknown6",
  },
  {
    quotes: "보다 먼 곳으로.",
    author: "Unknown7",
  },
  {
    quotes:
      "배우면서 생각하지 않으면 이득이 없고, 생각하되 배움이 없으면 위험하다.",
    author: "Unknown8",
  },
  {
    quotes: "아는 것이 힘이다.",
    author: "Unknown9",
  },
];

const quote1 = document.querySelector("#quotes div:first-child");
const author = document.querySelector("#quotes div:last-child");

const Randomquote = quotes[Math.floor(Math.random() * quotes.length)];

quote1.innerText = Randomquote.quotes;
author.innerText = Randomquote.author;
