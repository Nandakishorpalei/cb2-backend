let data;
function allProduct(items){
   
    data = JSON.parse(items);
    console.log(data)
    Display_Favourite_product(data); 
}


//  display_favourite_product(data);


 function  Display_Favourite_product(data) {

    document.getElementById("Favorite_products").innerHTML = null;
     data.forEach(function(element,index){
  
  let item = element.productId;   

  let boss_div = document.createElement("div");
  boss_div.id = "Favorite_products_div";

  let boss_div1 = document.createElement("div");
  boss_div1.id = "Favorite_products_div_1";

  let boss_div2 = document.createElement("div");
  boss_div2.id = "Favorite_products_div_2" ;

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");

  let p1 = document.createElement("p");
  p1.innerText = item.name;
  p1.id = "favourite_p_name";

  let p2 = document.createElement("p");
  p2.innerText = "SKU: Id " + item.id;

  let a1 = document.createElement("a")
  a1.href = "#";
  a1.innerText = "ADD TO ADDITIONAL LIST";
  
   let boss_div1_img = document.createElement("img");
   boss_div1_img.src = item.img2;

 //   ---------------------------------
  
 let btn1 = document.createElement("button");
 btn1.innerText = "REMOVE" ;
 btn1.id = "button_remove" ;
 btn1.addEventListener("click",function(){

   remove_data(index,data)
 })

 let p3 = document.createElement("p");
 p3.innerText = "$ " + item.price + ".00";

 let btn2 = document.createElement("button");
  btn2.innerText = "ADD TO CART";
  btn2.id = "button_addtocart";
   btn2.addEventListener("click" , ()=>{
    let productArray = JSON.parse(localStorage.getItem("cbCartItem")) || [];
 let data = {
  count:1,
  total:item.price,
  img1:item.img1,
  name:item.name,
  catagory:item.catagory,
 }


 productArray.push(data);
       localStorage.setItem("cbCartItem" , JSON.stringify(productArray));
       window.location.href="cart.html";
   })

  let a2 = document.createElement("a");
  a2.href = "#";
  a2.innerText = "ADD TO REGISTRY";

  let hr = document.createElement("hr");


  div2.append(p1 , p2 , a1);
  div1.append(boss_div1_img);
  boss_div1.append(div1,div2);
  boss_div2.append(btn1,p3,btn2 , a2);
  boss_div.append(boss_div1,boss_div2);
  document.getElementById("Favorite_products").append(boss_div,hr);

 }) ;
    
 }

 function remove_data(index,data){
   data.splice(index,1);
   console.log(index,data);
   Display_Favourite_product(data)
  localStorage.setItem('cbWishlistItem', JSON.stringify(data));
}