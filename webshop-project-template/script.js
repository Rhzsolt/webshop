/*C reate
  R ead
  U pdate
  D elete*/


var state = {
products :[
{
    name:'Teszt termék 1',
    price: 2500,
    isInStock: true, 
},

{
    name:'Teszt termék 2',
    price: 4500,
    isInStock: true, 
},
{
    name:'Teszt termék 3',
    price: 6500,
    isInStock: false, 
}
]
}
/*
var productsList = '';
 
for( var prod of state.products){
    productsList = productsList +`<div class =" card p-5 m-2 ">
    ${prod.name}<br>
    ${prod.price}
    </div>
    
    `;
}

document.getElementById('product-list-component').innerHTML = productsList;
EZ SAJÁT UA MINT AZ ALSÓ DE AZ FGV BE VAN SZERKESZTVE*/

function renderProducts(){

var productsHTML = '';
for( var product of state.products){
    productsHTML +=`<div class =" card p-5 m-2 ${product.isInStock ? '' : 'bg-danger'}">
    <p>${product.name}</p><br>
    <p>${product.price}</p>
    </div>
    `;}


document.getElementById('product-list-component').innerHTML = productsHTML;
}

window.onload = renderProducts;