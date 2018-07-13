// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBdLsFyaoHGE_foZ01InEPGdOv2aDLcQVQ",
    authDomain: "mydiary-53717.firebaseapp.com",
    databaseURL: "https://mydiary-53717.firebaseio.com",
    projectId: "mydiary-53717",
    storageBucket: "mydiary-53717.appspot.com",
    messagingSenderId: "1094135733111"
  };
  firebase.initializeApp(config);


function signUpOrIn() {
    if((event.target.id || event.srcElement.id) == "sign_in_display") {
        document.getElementById("sign_in_form").style.visibility = "visible";
        document.getElementById("sign_up_form").style.visibility = "collapse";
    }else if((event.target.id || event.srcElement.id) == "sign_up_display") {
        document.getElementById("sign_in_form").style.visibility = "collapse";
        document.getElementById("sign_up_form").style.visibility = "visible";
    }
}

function signUp() {
    let email = document.getElementById("sign_up_email");
    let password = document.getElementById("sign_up_password");
    
    if(email !== null && email !== '' && password !== null && password !== '') {
        alert("User registered!");
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert(errorMessage);
          });
          alert("User registered!");
    }
}