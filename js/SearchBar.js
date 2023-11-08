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