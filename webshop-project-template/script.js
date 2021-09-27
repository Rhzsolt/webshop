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
var state = {
  products: [{
    id: uuidv4(),
    name: 'Trappista',
    price: 1500,
    isInStock: false,

  },

  {
    id: uuidv4(),
    name: 'Edami',
    price: 2500,
    isInStock: false,
  },

  {
    id: uuidv4(),
    name: 'Gouda',
    price: 3500,
    isInStock: true,
  },],
  editedId: ''

};

function renderEditProduct() {
  if(state.editedId === ''){
    document.getElementById("edit-product").innerHTML = '';
    return;
  }
  var foundProduct;

  for (var product of state.products) {

    if (product.id === state.editedId) {
      foundProduct = product;
      break;

    }

  }
  var editFormHTML = `
    <h3>Termék szerkesztés</h3>
    <form id="update-product" class="p-5">
    <label class="w-100">
    Név:
    <input class="form-control" type="text" name="name" value= "${foundProduct.name}">
    </label>
    <label class="w-100">
    Ára:
    <input class="form-control" type="number" name="price" value ="${foundProduct.price}">
    </label>
    <label class="w-100">
   Elérhető?
    <input class="form-control" type="checkbox" name="isInStock"  ${foundProduct.isInStock ? 'checked' : ''}> 
    </label>
    <button class="btn btn-primary" type="submit">Küldés</button>
   </form>
  `;
  document.getElementById("edit-product").innerHTML = editFormHTML;

  document.getElementById("update-product").onsubmit = function (event) {

    event.preventDefault();

    var price = event.target.elements.price.value;
    var name = event.target.elements.name.value;
    var isInStock = event.target.elements.isInStock.checked;

    var joid;
    for (var i = 0; i < state.products.length; i++) {
      if (state.products[i].id === state.editedId) { joid = i; break; }
    }
    state.products[joid] = {
      id: state.editedId,
      name: name,
      price: price,
      isInStock: isInStock,
    };
    state.editedId ='';
    renderProducts();
    renderEditProduct();
  }

}

function renderProducts() {

  var productHTML = '';

  for (var product of state.products) {

    productHTML += `

   <div class ="card m-2 p-2 ${product.isInStock ? '' : 'bg-primary'}">
   <p>${product.name}</p>
   <p>${product.price}</p> 

   <button class = "btn btn-warning float right edit-product mb-2" data-trl ="${product.id}">Szerkesztés</button>
 
   <button class = "btn btn-danger float right button-trl" data-trl ="${product.id}">Törlő</button>
   </div>
   `;
  }

  document.getElementById("product-list-component").innerHTML = productHTML;

  for (var editbtn of document.querySelectorAll('.edit-product')) {
    editbtn.onclick = function (event) {
      var btnid = event.target.dataset.trl;
      state.editedId = btnid;
      renderEditProduct();

    }
  }


  for (var tbtn of document.querySelectorAll('.button-trl')) {

    tbtn.onclick = function (event) {

      var btnid = event.target.dataset.trl;
      console.log(btnid)

      var joid;
      for (var i = 0; i < state.products.length; i++) {

        if (state.products[i].id === btnid) { joid = i; break; }
      } 

      
      renderProducts();
    }


  }
}


document.getElementById("create-product").onsubmit = function (event) {
  event.preventDefault();

  var price = event.target.elements.price.value;
  var name = event.target.elements.name.value;
  var isInStock = event.target.elements.isInStock.checked;

  state.products.push({
    id: uuidv4(),
    name: name,
    price: price,
    isInStock: isInStock
  });

  renderProducts();

}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

window.onload = renderProducts();