// Define the attributes string
let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";

let pieces = attributes.split(";");


function isNonNegInt(q, returnErrors = false) {
  let errors = [];

  if (Number(q) != q) errors.push('Not a number!');
  if (q < 0) errors.push('Negative value!');
  if (parseInt(q) != q) errors.push('Not an integer!');

  return returnErrors ? errors : (errors.length === 0);
}


for (let i = 0; i < pieces.length; i++) {
  let isValid = isNonNegInt(pieces[i], true);
  console.log(`Errors for element "${pieces[i]}": ${isValid}`);
}