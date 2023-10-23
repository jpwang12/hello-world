// Define the attributes string
let attributes = "<name>;<age>;<major>";

let parts = attributes.split(";");

let name = parts[0].slice(1, -1);  
let age = parts[1].slice(1, -1); 
let major = parts[2].slice(1, -1); 


console.log("Name:", name);
console.log("Age:", age);
console.log("Major:", major);