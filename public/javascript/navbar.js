//Menu button hover functionality for sidebar

let x = 1;
let menuBtn = document.getElementById("menuBtn");
let sidebar = document.getElementById("sidebar");
let menuicon = document.getElementById("menuicon");

menuBtn.addEventListener("click", () => {
if (x === 1) {
  sidebar.style.left = "0";
  menuicon.innerText = "close";
  x += 1;
} else {
  sidebar.style.left = "-350px";
  menuicon.innerText = "menu";
  x -= 1;
}
});

//location button functionality
locationBtn.addEventListener("mouseover", () =>{
  locationBtn.style.borderBottom = "4px solid black";

  accDetails.style.display = "none";
  profileBtn.style.borderBottom = "none";

  cartDetails.style.display = "none";
  cartBtn.style.borderBottom = "none";
})
locationBtn.addEventListener("mouseleave", () =>{
  locationBtn.style.borderBottom = "none";
})


//Profile button hover functionality

let profileBtn = document.getElementById("profileBtn");
let accDetails = document.getElementById("accDetails");

profileBtn.addEventListener("mouseover", () =>{
    accDetails.style.display = "flex";
    profileBtn.style.borderBottom = "4px solid black";
})

accDetails.addEventListener("mouseenter", () =>{
  accDetails.style.display = "flex";
  profileBtn.style.borderBottom = "4px solid black";  
  
  cartDetails.style.display = "none";
  cartBtn.style.borderBottom = "none";
})

accDetails.addEventListener("mouseleave", () =>{
  accDetails.style.display = "none";
  profileBtn.style.borderBottom = "none";
})

//wishlist button hover functionality
wishBtn.addEventListener("mouseover", () =>{
  wishBtn.style.borderBottom = "4px solid black";

  accDetails.style.display = "none";
  profileBtn.style.borderBottom = "none";

  cartDetails.style.display = "none";
  cartBtn.style.borderBottom = "none";
})
wishBtn.addEventListener("mouseleave", () =>{
  wishBtn.style.borderBottom = "none";
})


// //cart button functionality
// let cartBtn = document.getElementById("cartBtn");
// let cartDetails = document.getElementById("cartDetails");

// cartBtn.addEventListener("mouseover", () =>{
//   cartDetails.style.display = "flex";
//   cartBtn.style.borderBottom = "4px solid black";

//   accDetails.style.display = "none";
//   profileBtn.style.borderBottom = "none";
// })

// cartDetails.addEventListener("mouseenter", () =>{
//   cartDetails.style.display = "flex";
//   cartBtn.style.borderBottom = "4px solid black";    
// })

// cartDetails.addEventListener("mouseleave", () =>{
//   cartDetails.style.display = "none";
//   cartBtn.style.borderBottom = "none";
// })


//authentication system

let locationButton = document.getElementById("locationButton");
let wishlistButton = document.getElementById("wishlistButton");
let cartButton = document.getElementById("cartButton");
let newPageButton = document.getElementById("newPageButton");

//location page
locationButton.addEventListener("click",authenticateCheckLocation);

async function authenticateCheckLocation(){
let authenticate =await JSON.parse(localStorage.getItem("authenticate")) || [];
let userAuthenticated = authenticate.authenticated;
 console.log(authenticate.authenticated)

if(userAuthenticated){
    window.location.href="storelocation.html" ;
}
else{
alert("unauthorize user");
window.location.href="login.html";
}
}


//wishlist page
wishlistButton.addEventListener("click",authenticateCheckWishlist);

async function authenticateCheckWishlist(){
let authenticate =await JSON.parse(localStorage.getItem("authenticate")) || [];
let userAuthenticated = authenticate.authenticated;
 console.log(authenticate.authenticated)

if(userAuthenticated){
    window.location.href="favorites.html" ;
}
else{
alert("unauthorize user");
window.location.href="login.html";
}
}

//cart page
cartButton.addEventListener("click",authenticateCheckCart);

async function authenticateCheckCart(){
let authenticate =await JSON.parse(localStorage.getItem("authenticate")) || [];
let userAuthenticated = authenticate.authenticated;
 console.log(authenticate.authenticated)

if(userAuthenticated){
    window.location.href="cart.html" ;
}
else{
alert("unauthorize user");
window.location.href="login.html";
}
}

//newpage newPageButton
newPageButton.addEventListener("click",authenticateCheckNewpage);

async function authenticateCheckNewpage(){
let authenticate =await JSON.parse(localStorage.getItem("authenticate")) || [];
let userAuthenticated = authenticate.authenticated;
 console.log(authenticate.authenticated)

if(userAuthenticated){
    window.location.href="newpage.html" ;
}
else{
alert("unauthorize user");
window.location.href="login.html";
}
}



cartBtn.addEventListener("mouseover",authenticateCheckonHover);

async function authenticateCheckonHover(){
  let authenticate =await JSON.parse(localStorage.getItem("authenticate")) || [];
  let userAuthenticated = authenticate.authenticated;
   console.log(authenticate.authenticated)
  
  if(userAuthenticated){

//cart button functionality
let cartBtn = document.getElementById("cartBtn");
let cartDetails = document.getElementById("cartDetails");

cartBtn.addEventListener("mouseover", () =>{
  cartDetails.style.display = "flex";
  cartBtn.style.borderBottom = "4px solid black";

  accDetails.style.display = "none";
  profileBtn.style.borderBottom = "none";
})

cartDetails.addEventListener("mouseenter", () =>{
  cartDetails.style.display = "flex";
  cartBtn.style.borderBottom = "4px solid black";    
})

cartDetails.addEventListener("mouseleave", () =>{
  cartDetails.style.display = "none";
  cartBtn.style.borderBottom = "none";
})
  }
}

document.getElementById("signOut").addEventListener("click",function(){
  localStorage.removeItem("authenticate");
  window.location.href="index.html";
})


document.getElementById("homeLogo").addEventListener("click",function(){
  window.location.href="index.html";
});



//phone menu

menuBtnPhone.addEventListener("click", () => {
  if (x === 1) {
    sidebar.style.left = "0";
    menuicon.innerText = "close";
    x += 1;
  } else {
    sidebar.style.left = "-350px";
    menuicon.innerText = "menu";
    x -= 1;
  }
  });


//navbar cart item count
let cartData = JSON.parse(localStorage.getItem("cbCartItem")) || [];
console.log('cartData:', cartData)

let cartItemCount = cartData.length;

document.getElementById("cartIndicator").textContent= cartItemCount;
