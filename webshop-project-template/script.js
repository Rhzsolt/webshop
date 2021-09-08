/*C reate
  R ead
  U pdate
  D elete*/


/* Product
Create
Read
Update
Delete*/


/*read*/
var state ={
  products:[{
      name:'Trappista',
      price:1500,
      isInStock:false,
  
  },

  {
      name:'Edami',
      price:2500,
      isInStock:false,
  },

  {
      name:'Gouda',
      price:3500,
      isInStock:true,
  },]
}

function renderProducts() {
 var productHTML = '';

for ( var product of state.products){

  productHTML +=`
  <div class ="card m-2 p-2 ${product.isInStock ? '' : 'bg-danger'}">
 <p>${product.name}</p>
 <p>${product.price}</p> 
 </div>
  `;
}

document.getElementById("product-list-component").innerHTML = productHTML;

}
window.onload = renderProducts();

document.getElementById("create-product").onsubmit = function (event) {
  event.preventDefault();

  var price=event.target.elements.price.value;
  var name = event.target.elements.name.value;
  var isInStock = event.target.elements.isInStock.checked;

state.products.push({
  name:name,
  price:price,
  isInStock:isInStock});

  renderProducts();

}
 
