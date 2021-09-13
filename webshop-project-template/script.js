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
    id:uuidv4(),
      name:'Trappista',
      price:1500,
      isInStock:false,
  
  },

  {id:uuidv4(),
      name:'Edami',
      price:2500,
      isInStock:false,
  },

  {id:uuidv4(),
      name:'Gouda',
      price:3500,
      isInStock:true,
  },]
}

function renderProducts() {
 var productHTML = '';

for ( var product of state.products){

  productHTML +=`
  <div class ="card m-2 p-2 ${product.isInStock ? '' : 'bg-primary'}">
 <p>${product.name}</p>
 <p>${product.price}</p> 
 <button class = "btn btn-danger float right button-trl" data-trl ="${product.id}">Törlő</button>
 </div>
  `;
}

document.getElementById("product-list-component").innerHTML = productHTML;
 
for( var tbtn of document.querySelectorAll('.button-trl')){

  tbtn.onclick =function(event){

    var btn = event.target.dataset.trl;
    

 var joid;
  for(var i=0; i<state.products.length;i++){

    
    if( state.products[i].id === btn ){ joid = i;break;}
  }

state.products.splice(joid,1);
renderProducts();
  }
  
 
}
}


document.getElementById("create-product").onsubmit = function (event) {
  event.preventDefault();

  var price=event.target.elements.price.value;
  var name = event.target.elements.name.value;
  var isInStock = event.target.elements.isInStock.checked;

state.products.push({
  id:uuidv4(),
  name:name,
  price:price,
  isInStock:isInStock});

  renderProducts();

}
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
 
window.onload = renderProducts();