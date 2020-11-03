//Variables 

// api
var unsplash = "https://source.unsplash.com/650x600/";
var responseURL = "";

var getImage = document.querySelector(".getImage");
var imgCtn = document.querySelector(".img-ctn");
var rightCtn = document.querySelector(".right-ctn");
var rightCtnP = document.querySelector(".linknew p");
var emails = [];


// Email validation
var submit = document.querySelector('.submit');
var email = document.querySelector(".input");
var emailValue = "";
var warning = document.querySelector(".warning");
var warningFailAPI = document.querySelector(".warning2");

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

// function getNewImage() {
   
//       fetch(unsplash)
//          .then((response) => {
//             responseURL = response.url;
//             imgCtn.innerHTML = `<img src="${responseURL}">`;
//          })
//          .catch((response) => {
//             warningFailAPI.style.display = "block";
//             setTimeout(warningfailAPIHide, 5000);
//             response;
//          })
   
// }



function getNewImage() {
   console.log('hello');
   $.ajax({
      url: unsplash,
      cache: false,
      xhrFields: { responseType: "blob" },
      success: function (data) {
         console.log('hello 2');
         var url = window.URL.createObjectURL(data);
         responseURL = url;
         imgCtn.innerHTML = "<img src = '" + url + "'>";
      },
   });
}








function disableButton() {
   submit.disabled = true;
}

function enableButton() {
   submit.disabled = false;
}



// Email validation

submit.addEventListener("click", function () {

   if(responseURL == ""){
      alert("Please click Get New Image");
   } else{
   emailValue = email.value;

   if (emailValue.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)) {
      // if(!emails.includes(emailValue)){
      // emails.push(emailValue);
      if(!emails.indexOf(emailValue)){
         emails.push(emailValue);
      }
      var linkNew = document.createElement("a");
      rightCtnP = "1";
      if(rightCtnP.value === emailValue){
         linkNew.innerHTML = "<img src=\"" + responseURL + "\">";
      } else{
         linkNew.innerHTML = "<p> \"" + emailValue + "\" </p> <br> <img src= \"" + responseURL + "\">";
      }
      rightCtn.appendChild(linkNew);
      // getNewImage();
      disableButton();
   } else {
      warning.style.display = "block";
      setTimeout(warningHide, 5000)
   }
}});


// Get new image

getImage.addEventListener("click", function () {
   getNewImage();
   enableButton();
});














