/*
Make a program that lists the product information. Products are found in the JSON data.
*/

// JSON form
var json = '[{"number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready"},' + '{"number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless"},' + '{"number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions"}]';

var products = JSON.parse(json);
// Parse the JSON text into Javascript objects (1 array, 3 'product' objects)


function listProducts() {
    
    var teksti = "";
    for (var i = 0; i < products.length; i++) {
        teksti += "<p>Number: "+ products[i].number +"<br>Name: "+ products[i].name +"<br>Price: "+ products[i].price.toFixed(2) +"<br>Description: "+ products[i].description + "</p>";
    }
    document.getElementById("productList").innerHTML = teksti;

}