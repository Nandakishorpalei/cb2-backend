let cartLength = 0;
function setName(data){
    data = JSON.parse(data);
    const currentUser = data.currentUser;
    cartLength = data.cartLength;
    console.log('cartLength:', cartLength)
 console.log('currentUser:', currentUser)
 if(currentUser != "Not found"){
  const userName = currentUser.toUpperCase();

  localStorage.setItem("currentUserName",JSON.stringify(userName));

  const cartItemLength = JSON.parse(localStorage.getItem("cartItemLength"));
  console.log('cartItemLength:', cartItemLength)
  if(cartItemLength === null){
    localStorage.setItem("cartItemLength",JSON.stringify(cartLength));

    document.getElementById("cartIndicator").textContent = cartItemLength;
  }


  const userNameIs = JSON.parse(localStorage.getItem("currentUserName"));
  
console.log('userNameIs:', userNameIs);

if(userNameIs !== null){
document.getElementById("currentuser").style.display = "block";
document.getElementById("signInId").style.display = "none";
document.getElementById("currentuser").textContent = userNameIs;
}
}
}



