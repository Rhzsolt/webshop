/*C reate
  R ead
  U pdate
  D elete*/


var state = {
    products: [
        {
            id: uuidv4(),
            name: 'Teszt termék 1',
            price: 2500,
            isInStock: true,
        },

        {
            id: uuidv4(),
            name: 'Teszt termék 2',
            price: 4500,
            isInStock: true,
        },
        {
            id: uuidv4(),
            name: 'Teszt termék 3',
            price: 6500,
            isInStock: true,
        }
    ]

}


function productes() {

    var produ = '';

    for (var prod of state.products) {
        produ += `<div class = "card p-5 ${prod.isInStock ? '' : 'bg-danger'}">
             <p>${prod.name}</p><br>
              <p>${prod.price}</p>
         <button class ="btn btn-danger float-right delete-product"
          data-productid="${prod.id}">Törlés</button>
            </div>`
    };

    document.getElementById('product-list-component').innerHTML = produ;


    /*-------------*/

    for (var deleteBtn of document.querySelectorAll('.delete-product')) {

        deleteBtn.onclick = function (event) {
            var id = event.target.dataset.productid;
            var foundIndex;

            for (var i = 0; i < state.products.length; i++) {

                if (state.products[i].id === id) { foundIndex = i; break; }
            }


            state.products.splice(foundIndex, 1);

            productes();
        }
    }


}

document.getElementById('create-product').onsubmit = function (event) {
    event.preventDefault();
    var name = event.target.elements.name.value;


    var price = Number(event.target.elements.price.value);
    var stock = event.target.elements.isInStock.checked;


    state.products.push({
        id: uuidv4(),
        name: name,
        price: price,
        isInStock: stock,
    });
    productes()
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}




window.onload = productes()
