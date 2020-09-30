//Variables 

// api
const unsplash = "https://source.unsplash.com/random";
let responseURL = "";

const getImage = document.querySelector(".getImage");
const imgCtn = document.querySelector(".img-ctn");
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

// function getNewImage() {
//    try {
//       fetch(unsplash)
//          .then((response) => {
//             responseURL = response.url;
//             imgCtn.innerHTML = `<img src="${responseURL}">`;
//          })
//    } catch (e) {
//       console.log(e);
//       warningFailAPI.style.display = "block";
//       setTimeout(warningfailAPIHide, 5000);
//    }
// }

function getNewImage() {
   
      fetch(unsplash)
         .then((response) => {
            responseURL = response.url;
            imgCtn.innerHTML = `<img src="${responseURL}">`;
         })
         .catch((response) => {
            warningFailAPI.style.display = "block";
            setTimeout(warningfailAPIHide, 5000);
            response;
         })
   
}



// function getNewImagePromise() {
// return new Promise((resolve, reject) => { 
//    fetch(unsplash);

//    if(response.url != ""){
//       responseURL = response.url;
//       resolve(imgCtn.innerHTML = `<img src="${responseURL}">`);
//    } else{
//       reject({warningFailAPI.style.display = "block"
//       setTimeout(warningfailAPIHide, 5000)}
//    }
// }



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
      // getNewImage();
      // disableButton();
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














