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
            isInStock: false,
        }
    ]
}



function renderFunction() {
    productsHTML = '';

    for (prod of state.products) {

        productsHTML += `<div class = "card p-5 m-2">
    ${prod.name},
    ${prod.price},
    <button class ="btn btn-danger delete-products" data-productsid="${prod.id}">Törlés</button>

    </div>`
    }

    document.getElementById("product-list-component").innerHTML = productsHTML

    for (var deleteBtn of document.querySelectorAll('.delete-products')) {

        deleteBtn.onclick = function (event) {

            var id = event.target.dataset.productsid;
            var foundIndex;

            for (var i = 0; i < state.products.length; i++) {

                if (state.products[i].id === id) { foundIndex = i; break; }
            }

            state.products.splice(foundIndex, 1);

            renderFunction();
        }

    }

}

document.getElementById("create-product").onsubmit = function (event) {

    event.preventDefault();
    var name = event.target.elements.name.value;
    var pice = event.target.elements.price.value;
    var stock = event.target.elements.isInStock.checked;


    state.products.push({
        id: uuidv4(),
        name: name,
        price: pice,
        isInStock: stock,
    }
    )
    renderFunction()
};





window.onload = renderFunction;





function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
