const fs = require('fs');

// 這裡模擬你的運算或抓取外部 API
const newData = {
  lastUpdate: new Date().toLocaleString(),
  luckyNumber: Math.floor(Math.random() * 100),
  status: "Online"
};

// 將結果寫入 api/info.json
if (!fs.existsSync('./api')) fs.mkdirSync('./api');
fs.writeFileSync('./api/info.json', JSON.stringify(newData, null, 2));

console.log("資料已更新！");
Entercconst fs = require('fs');

// 這裡模擬你的運算或抓取外部 API
const newData = {
  lastUpdate: new Date().toLocaleString(),
  luckyNumber: Math.floor(Math.random() * 100),
  status: "Online"
};

// 將結果寫入 api/info.json
if (!fs.existsSync('./api')) fs.mkdirSync('./api');
fs.writeFileSync('./api/info.json', JSON.stringify(newData, null, 2));

console.log("資料已更新！");
Enter
