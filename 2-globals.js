//GLOBALS! - NO WINDOW!!
//with broswer JS, have access to window where we can get querySelector...
//Node: no window as there is no browser
//Node: has global variables - this means they can be accessed anywhere in your application - there will always be access to those variables no matter how complicated, or nested, the application gets.

//There are lots of global variables - below are some common ones:

// __dirname - path to current directory
// __filename - filename
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - (is very useful) - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

//we also have access to the console globally
//Therefore, like vanilla JS, we have access to setInterval() and setTimeout()
setInterval(() => {
  console.log("hello world");
}, 1000);
