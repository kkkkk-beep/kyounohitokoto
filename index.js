const quotes = [
  "成功の反対は失敗ではなく、挑戦しないことだ。",
  "笑顔は最強の武器。",
  "小さな一歩が、大きな変化を生む。",
  "今日という日は、残りの人生の最初の日。",
  "今この瞬間を大切に。",
  "継続は力なり。",
  "夢は見るものではなく、叶えるもの。",
  "焦らず、腐らず、諦めず。",
  "自分を信じることが第一歩。",
  "挑戦しなければ、何も始まらない。"
];

document.getElementById("quoteButton").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
});
