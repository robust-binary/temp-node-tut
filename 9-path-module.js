const path = require("path");
//require the node module called path and assign to variable called path

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

//accessing the base name
const base = path.basename(filePath);
console.log(base);

//accessing an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
