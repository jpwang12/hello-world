// Define the attributes string
let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";

let pieces = attributes.split(";");

/**
 *
 * @param {string} input 
 * @param {boolean} returnErrors
 * @returns {boolean|array} 
 */
function validateNonNegInt(input, returnErrors = false) {
  let errors = [];

  if (Number(input) != input) errors.push('Not a number!');
  if (input < 0) errors.push('Negative value!');
  if (parseInt(input) != input) errors.push('Not an integer!');

  return returnErrors ? errors : (errors.length === 0);
}


for (let i = 0; i < pieces.length; i++) {
  let validationResult = validateNonNegInt(pieces[i], true);
  console.log(`Validation result for element "${pieces[i]}": ${validationResult}`);
}

function checkIt(item, index) {
   item = item.replace(/<|>/g, '');
   console.log(item);
  console.log(`part ${index} is ${(validateNonNegInt(item) ? 'a' : 'not a')} quantity`);
}
pieces.forEach(checkIt);