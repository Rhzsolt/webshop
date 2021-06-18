/*C reate
  R ead
  U pdate
  D elete*/


var state = {
  product: [

    {
      id: uuidv4(),
      name: 'Bogi',
      age: 18,
      atHome: true,
    },
    {
      id: uuidv4(),
      name: 'Zsolt',
      age: 53,
      atHome: true,
    },
    {
      id: uuidv4(),
      name: 'Marta',
      age: 53,
      atHome: true,
    }


  ]
}

function Family() {

  var gyujt = '';

  for (fam of state.product) {

    gyujt += `<div class ="card p-5 ${fam.atHome ? '' : 'bg-warning'}">
    
    ${fam.name}
    ${fam.age}
    <button class=' btn btn-danger törles' data-ides='${fam.id}'>TÖRÖLŐ</button>
    </div>`};
document.getElementById("product-list-component").innerHTML = gyujt;

  for (delbtn of document.querySelectorAll('.törles')) {
    

    delbtn.onclick = function (event) {
      var idek = event.target.dataset.ides;
      var tal;

      for (var i = 0; i < state.product.length; i++) {
        if (state.product[i].id === idek) { tal = i; break; }
      }
      state.product.splice(tal, 1);

      Family();

    }
  }

  
}
document.getElementById("create-product").onsubmit = function(event){
  event.preventDefault()

var name = event.target.elements.name.value;
var age =Number(event.target.elements.age.value);
var otth = event .target.elements.atHome.checked;

state.product.push({
  id:uuidv4(),
  name:name,
  age:age,
  atHome:otth,
})
Family();
}







function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
window.onload = Family();