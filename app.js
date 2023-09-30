// npm - global command, comes with node
// npm --verions

// local dependency - use it in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file that stores important information about our project/package
// There are 3 ways to create package.json
// 1) manual approach (create package.json in the route, creat properties etc)
// 2) npm init (step by step; press enter to skip)
// 3) npm init -y (everything by default)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
