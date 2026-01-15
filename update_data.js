const fs = require('fs');

// 1. 读取旧数据
let rawData = fs.readFileSync('./api/info.json');
let dataList = JSON.parse(rawData); 

// 2. 准备新数据
const newItem = {
  id: Date.now(),
  time: new Date().toLocaleString(),
  value: "这是每30分钟抓取的一条新资料"
};

// 3. 追加到数组中
dataList.push(newItem);

// 4. 写回文件
fs.writeFileSync('./api/info.json', JSON.stringify(dataList, null, 2));
