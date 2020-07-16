// function validateForm() {
//     let x = document.forms["myForm"]["email"].value;
//     if (x == "") {
//       alert("Email cannot be blank");
//       return false;
//     } else{
//         return true;
//     }
// }

// function validate() {
//     if( document.myForm.email.value == ""){ // Use null, work out how.
//         window.alert("Please provide your email address.")
//         document.myForm.email.focus();
//         return false;
//     } if(document.myForm.email.value.incudes("@")){


//     } else {
//         return true;
//     }
// }

// function validateEmail() {
//     let emailID = document.myForm.email.value;
//     atpos = emailID.indexOf("@");
//     dotpos = emailID.lastIndexOf(".");

//     if (atpos < 1 || ( dotpos - atpos < 2 )) {
//        alert("Please enter correct email ID")
//        document.myForm.email.focus() ;
//        return false;
//     }
//     return( true );
//  }
// submit.onClick = function() {

//    let emailValue = email.value;

//    console.log("true");
//    if (emailValue.match("/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/")){
//       console.log("true");
//    }
// }


//Variables 

// api
const unsplash = "https://source.unsplash.com/random";
const getImage = document.querySelector(".getImage");
const imgCtn = document.querySelector(".img-ctn");
let responseURL = "";
const rightCtn = document.querySelector(".right-ctn");





// Email validation
const submit = document.querySelector('.submit');
const email = document.querySelector(".input");
let emailValue = "";
const warning = document.querySelector(".warning");
const warningFailAPI = document.querySelector(".warning2");

//functions

function warningHide() {
   warning.style.display = "none";
}

function warningFailAPIHide() {
   warningFailAPI.style.display = "none";
}

function getNewImage() {
   try {
      fetch(unsplash)
         .then((response) => {
            responseURL = response.url;
            imgCtn.innerHTML = `<img src="${responseURL}">`;
         })
   } catch (e) {
      console.log(e);
      warningFailAPI.style.display = "block";
      setTimeout(warningfailAPIHide, 5000);
   }
}

function disableButton() {
   submit.disabled = true;
}

function enableButton() {
   submit.disabled = false;
}



// Email validation

submit.addEventListener("click", () => {

   if(responseURL == ""){
      alert("Please click Get New Image");
   } else{
   emailValue = email.value;

   if (emailValue.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)) {
      let linkNew = document.createElement("a");
      linkNew.innerHTML = `<img src="${responseURL}" <br> <p>${emailValue}</p>`;
      rightCtn.appendChild(linkNew);
      getNewImage();
      disableButton();
   } else {
      warning.style.display = "block";
      setTimeout(warningHide, 5000)
   }
}});


// Get new image

getImage.addEventListener("click", () => {
   getNewImage();
   enableButton();
});














