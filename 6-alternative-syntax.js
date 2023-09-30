module.exports.items = ["item1", "item2"];
const person = {
  name: "bob",
};

module.exports.singlePerson = person;
//set up property (singlePerson) on object (module.exports)
//then set property equal to person object
//We can do this because module.exports is an object - therefore we are setting up a property on that object and set it equal to an array
