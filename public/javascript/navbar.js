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
    window.location.href="/store" ;
}


//wishlist page
wishlistButton.addEventListener("click",authenticateCheckWishlist);

async function authenticateCheckWishlist(){
    window.location.href="/favourites" ;
}

//cart page
cartButton.addEventListener("click",authenticateCheckCart);

async function authenticateCheckCart(){
let authenticate =await JSON.parse(localStorage.getItem("authenticate")) || [];
    window.location.href="/cart" ;

}

//newpage newPageButton
newPageButton.addEventListener("click",authenticateCheckNewpage);

async function authenticateCheckNewpage(){
    window.location.href="/newpage" ;
}



cartBtn.addEventListener("mouseover",authenticateCheckonHover);

async function authenticateCheckonHover(){


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

document.getElementById("signOut").addEventListener("click",function(){
  localStorage.removeItem("authenticate");
  window.location.href="/";
})


document.getElementById("homeLogo").addEventListener("click",function(){
  window.location.href="/";
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

document.getElementById("signOut").addEventListener("click",function(){
  localStorage.removeItem("currentUserName");
  localStorage.removeItem("cartItemLength");
  document.getElementById("cartIndicator").textContent = "0" ;
  document.getElementById("currentuser").style.display = "none";
document.getElementById("signInId").style.display = "block";
  document.getElementById("logoutDiv").submit();
})

const userNameIs = JSON.parse(localStorage.getItem("currentUserName"));
console.log('userNameIs:', userNameIs);

const cartItemLength = JSON.parse(localStorage.getItem("cartItemLength"));
document.getElementById("cartIndicator").textContent = cartItemLength;

if(userNameIs !== null){
  document.getElementById("currentuser").style.display = "block";
document.getElementById("signInId").style.display = "none";
document.getElementById("currentuser").textContent = userNameIs;
}