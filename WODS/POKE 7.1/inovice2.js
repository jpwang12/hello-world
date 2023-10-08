// Product Data and Calculating extended-prices
let item1 = 'Gillette Sensor 3 Razor';
let quantity1 = 2;
let price1 = 6.87;
let extended_price1 = quantity1 * price1 ;

let item2 = 'Barbasol Shaving Cream';
let quantity2 = 1;
let price2 = 3.06;
let extended_price2 = quantity2 * price2 ; 

let item3 = 'Nautica Cologne';
let quantity3 = 1;
let price3 = 12.99;
let extended_price3 = quantity3 * price3 ; 

let item4 = 'Rubbing Alcohol';
let quantity4 = 3;
let price4 = 5.63;
let extended_price4 = quantity4 * price4 ;

let item5 = 'Colgate Classic Toothbrush';
let quantity5 = 8;
let price5 = 10.84;
let extended_price5 = quantity5 * price5 ;

// Calculate subtotal
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 ;

// Calculate sales tax
let taxRate = 0.0575 ; //5.75%
let taxAmount = taxRate * subtotal ; 

// Calculate total
let total = subtotal + taxAmount ;

//Populate the table rows using DOM manipulation
let table = document.getElementById('invoiceTable');

//Create a new row for each item
let row = table.insertRow();
row.insertCell(0).innerHTML = `${item1}`;
row.insertCell(1).innerHTML = `${quantity1}`;
row.insertCell(2).innerHTML = `$`+`${price1}`;
row.insertCell(3).innerHTML = `$`+`${extended_price1}`;

//Create a new row for each item
row = table.insertRow();
row.insertCell(0).innerHTML = `${item2}`;
row.insertCell(1).innerHTML = `${quantity2}`;
row.insertCell(2).innerHTML = `$`+`${price2}`;
row.insertCell(3).innerHTML = `$`+`${extended_price2}`;

//Create a new row for each item
row = table.insertRow();
row.insertCell(0).innerHTML = `${item3}`;
row.insertCell(1).innerHTML = `${quantity3}`;
row.insertCell(2).innerHTML = `$`+`${price3}`;
row.insertCell(3).innerHTML = `$`+`${extended_price3}`;

//Create a new row for each item
row = table.insertRow();
row.insertCell(0).innerHTML = `${item4}`;
row.insertCell(1).innerHTML = `${quantity4}`;
row.insertCell(2).innerHTML = `$`+`${price4}`;
row.insertCell(3).innerHTML = `$`+`${extended_price4}`;

//Create a new row for each item
row = table.insertRow();
row.insertCell(0).innerHTML = `${item5}`;
row.insertCell(1).innerHTML = `${quantity5}`;
row.insertCell(2).innerHTML = `$`+`${price5}`;
row.insertCell(3).innerHTML = `$`+`${extended_price5}`;

//Set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);

// Calculate shipping based on sub-total
let shippingCharge = 0;

if (subtotal <= 50) {
    shippingCharge = 2;
} else if (subtotal <= 100) {
    shippingCharge = 5;
} else {
    shippingCharge = subtotal * 0.05; // 5% of the subtotal
}

// Calculate total including shipping
total = subtotal + taxAmount + shippingCharge;

// Set the total cell in bold
document.getElementById('total_cell').innerHTML = `$${total.toFixed(2)}`;


// Set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' +shippingCharge.toFixed(2);