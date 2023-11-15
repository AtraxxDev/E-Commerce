async function obtenerDatosLocales() {
  let response = await fetch("json/API.json");
  console.log(response);
  let data = await response.json();
  console.log(data);


  let $subject = document.querySelector("#info-shida");
  let Materias = "";

  data.Materias.forEach(function (el) {
    Materias += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card" style="width: 36rem;">          
          <div class="card-body">
            <h2 class="card-title">${el.Producto}</h2>
            <p class="card-text">${el.Precio}</p>
            <p class="card-text">${el.Imagen}</p>
            <p class="card-text">${el.Descripción}</p>
          </div>
        </div>
      </div>
    `;
  });

  $subject.innerHTML = Materias;
}

obtenerDatosLocales();

firebase.initializeApp(config);
var firestore = firebase.firestore();
var docRef = firestore.collection("indian");
var showat2 = document.querySelector("#pastComments2");
var loadbutton = document.querySelector("#loadButton");
var inputTextField = document.querySelector("#latestHotDogStatus");

loadbutton.addEventListener("click",function(){
    docRef.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const myData = doc.data();
        if(myData.dname == inputTextField.value){
        showat2.innerHTML += myData.dname + " " + myData.dno + myData.no + inputTextField.innerHTML == " ";
        }                  

      });
    }).catch(function(error){
    console.log("error: "+error);
  });
});