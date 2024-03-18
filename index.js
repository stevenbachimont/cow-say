
const informations = require('./informations');


   
    let string = `Hi, my name is ${informations.name} and I'm at ${informations.campus} Wild Campus`



const cowsay = require("cowsay");

console.log(cowsay.say({
    text: string, 
    e: "oO",
    T: "U"
}));

