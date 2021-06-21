/*C reate
  R ead
  U pdate
  D elete*/


var state = {
  products: [
    {
      id: uuidv4(),
      name: 'alma',
      price: 150,
      isInBox: true,
    },

    {
      id: uuidv4(),
      name: 'körte',
      price: 250,
      isInBox: true,
    },

    {
      id: uuidv4(),
      name: 'nari',
      price: 350,
      isInBox: true,
    },
  ],
  editedId: ''

}

function renderEditProduct() {
  var foundProduct;
  
  for (var product of state.products) {
    if (product.id === state.editedId) {
      foundProduct = product;
      break;
      }

  }
  var editFormHTML = `
  <h3>Termék szerkesztése</h3>
    <form id="update-product" class="p-5">
            <label class="w-100">
              Név:
              <input class="form-control" type="text" name="name" value ="${foundProduct.name}">
            </label>
            <label class="w-100">
              Kor:
              <input class="form-control" type="number" name="price" value ="${foundProduct.price}">
            </label>
            <label class="w-100">
             Otthon van?
              <input class="form-control" type="checkbox" name="isInBox"${foundProduct.isInBox ? 'checked': ''}> 
            </label>
            <button class="btn btn-primary" type="submit">Küldés</button>
        </form>
  `
  document.getElementById("edit-product").innerHTML = editFormHTML;
}

function renderState() {

  productHTML = '';

  for (prod of state.products) {

    productHTML +=
      `
    <div class =' card p-5 floatright delete ${prod.isInBox ? '' : 'bg-warning'}'>

      ${prod.name},
      ${prod.price},
      <button class='bg-warning edit-product mb-2' data-productid='${prod.id}'>SZERKESZTŐ</button>
      <button class='bg-danger törölő' data-productid='${prod.id}'>TÖRÖLŐ</button>
    </div>`


  }

  document.getElementById("product-list-component").innerHTML = productHTML;



  for (var editBtn of document.querySelectorAll('.edit-product')) {

    editBtn.onclick = function (event) {
      var id = event.target.dataset.productid;
      /* state változás után*/
      state.editedId = id;
      renderEditProduct();

    }
  }

  for (dleteBtn of document.querySelectorAll('.törölő')) {
    dleteBtn.onclick = function (event) {
      var delet;
      var trl = event.target.dataset.productid

      for (var i = 0; i < state.products.length; i++) {

        if (state.products[i].id === trl) { trl = delet; break; }
      }
      state.products.splice(delet, 1);
      renderState();

    }

  }




}

document.getElementById("create-product").onsubmit = function (event) {

  event.preventDefault();

  var name = event.target.elements.name.value;
  var price = Number(event.target.elements.price.value);
  var isIn = event.target.elements.isInBox.checked;

  state.products.push({
    id: uuidv4(),
    name: name,
    price: price,
    isInBox: isIn,
  })
  renderState();
}


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
window.onload = renderState();