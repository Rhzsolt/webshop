/*C reate
  R ead
  U pdate
  D elete*/


var state = {

  product: [
    { id:uuidv4(),
      name:'kenyer',
      price: 450,
      isInStock: true,
    },

    { id:uuidv4(),
      name: 'tej',
      price: 350,
      isInStock: true,
    },

    { id:uuidv4(),
      name: 'vaj',
      price: 800,
      isInStock: true,
    },
  ]
}



function renderProduct(){

productHTML = '';

for( var prod of state.product){


  productHTML += `<div class ='card p-5 m-2 ${prod.isInStock ? '' : 'bg-warning'}'>
  ${prod.name},
  ${prod.price},
 <button class ='btn btn-danger delete' data-idname='${prod.id}'>TÖRLŐ</button>
  
  </div>`
}
document.getElementById("product-list-component").innerHTML=productHTML;

for( var delbtn of document.querySelectorAll('.delete')){

  delbtn.onclick = function(event){
    var id = event.target.dataset.idname;
    var törlés;
    for(var i =0;i<state.product.length;i++){

    if( state.product[i].id === id){ törlés = i;break;}
    }

    state.product.splice(törlés,1)

    renderProduct();

  }
}
    
  
}

document.getElementById("create-product").onsubmit = function(event){
  event.preventDefault();

var name =event.target.elements.name.value;
var price= Number(event.target.elements.price.value);
var stock=event.target.elements.isInStock.checked;

state.product.push({
  id:uuidv4(),
  name:name,
  price:price,
  isInStock:stock,
})
renderProduct();

}



function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}




window.onload =renderProduct();