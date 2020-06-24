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


// Email validation

submit.addEventListener("click", () => {

   emailValue = email.value;

   if (emailValue.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)){
      
      // rightCtn.innerHTML = `<a href="${responseURL}"><img src="${responseURL}"> <br> <p>${emailValue}</p></a>`;
      // localStorage.setItem(emailValue, responseURL);
      // let p = document.createElement("div");
      // p = `<a href="${responseURL}"><img src="${responseURL}"> <br> <p>${emailValue}</p></a>`;
      // rightCtn.appendChild(p);
      // rightCtn.innerHTML = `<a href="${responseURL}"><img src="${responseURL}"> <br> <p>${emailValue}</p></a>`;

      let linkNew = document.createElement("a");
      linkNew.innerHTML = `<img src="${responseURL}" <br> <p>${emailValue}</p>`;
      rightCtn.appendChild(linkNew);
      fetch(unsplash)
      .then((response) => {
         responseURL = response.url;
         imgCtn.innerHTML = `<img src="${responseURL}">`;
      })
   } else {
      alert("Please enter a valid email");
   }
});


// 

getImage.addEventListener("click", () => {

   fetch(unsplash)
   .then((response) => {
      responseURL = response.url;
      imgCtn.innerHTML = `<img src="${responseURL}">`;
   })
});













 
