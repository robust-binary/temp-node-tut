//Modules

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-syntax");
//now, instead of assigning the mind-grenade to a variable, we are just going to require it
require("./7-mind-grenade");

sayHi("Christine");
sayHi(names.malcom);
sayHi(names.melvin);

//However, wouldn't it make more sense for the names to be separate and for the function to be separate too or for future functions that maybe created
//it would make more sence for these to be in separate files which can then be accessed all through out the application - it would allow for smaller files and more structure to our application
//This is what Modules allows us to do
