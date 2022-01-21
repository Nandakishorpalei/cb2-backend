function cartMiddle(){
    return `
    <div id="bottomMiddle">
                    <label id="container1" class="container"><p id="ship" class="radioName">SHIP</p>

                        <p class="radioContent"><span class="red">Purchase now and we'll ship when it's available.</span> <br>
                            Shipping: <span class="underLine">Standard</span><br>
                            Arrives: <span class="underLine red">This item is currently on backorder.</span></p>
                        <input type="radio" checked="checked" name="radio">
                        <span class="checkmark"></span>
                      </label>
                      <label id="container2" class="container"><p class="radioName">FREE PICKUP</p>
                        <p class="radioContent"><span class="underLine">Select location</span></p>
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                      </label>
                </div>`
}




// cartData globally declared

// cart page display setting
let zeroContainer = document.getElementById("zeroCartContainer");
let cartContainer = document.getElementById("cartContainer");
let cartCarousel = document.getElementById("carouselExampleControls");
let rightContainer = document.getElementById("rightCartContainer");

// let user;
function allProduct(items){
    const dataObj = JSON.parse(items);
    console.log('dataObj:', dataObj)
    let data = dataObj.cart;
    let user = dataObj.userId;
    document.getElementById("cartIndicator").textContent = data.length;
    localStorage.setItem("cartItemLength",JSON.stringify(data.length));
    console.log(data,user);
    cartDataSetting(data); 
}


async function cartDataSetting(cartData){
    try{

  
    console.log('cartData:', cartData)

  let cartLength = cartData.length;

document.getElementById("cartCount").textContent=`(${cartLength} item)`;


if(cartData.length == 0){

    zeroContainer.style.display="flex";
    cartContainer.style.display="none";
    cartCarousel.style.display="none";
    rightContainer.style.display="none";
} 
else{
    zeroContainer.style.display="none";
    cartContainer.style.display="flex";
    cartCarousel.style.display="block";
    rightContainer.style.display="block";
}
    displayCartProducts(cartData);


}
catch(error){

}
finally{
    console.log("cart page designed");
}
}


// show cart products

let finalValue = 0;
let merchandisePrice = 120;

async function displayCartProducts(products){

try{

let cartItems = products.length;
document.getElementById("cartCount").textContent=`(${cartItems} item)`;

// price calculate
let merchandiseValue = document.getElementById("merchandiseValue");
let shippingValue = document.getElementById("shippingValue");
let taxValue = document.getElementById("taxValue");
let totalEstValue = document.getElementById("totalEstValue");

if(cartItems != 0){
    shippingValue.textContent = "$120.00";
    taxValue.textContent = "$00.00";
}else{
    shippingValue.textContent = "0.00";
taxValue.textContent = "0.00";
}




let cartProductContainer = document.getElementById("cartProductContainer");
cartProductContainer.innerHTML=null;

products.forEach((element,index) => {
   console.log(element)
   let totalItemValue = 0;
        //create productContainer 
    let cartProductDetail = document.createElement("div");
    cartProductDetail.setAttribute("id","cartProductDetail");
   
    // product top section
    let cartProductTopSection = document.createElement("div");
    cartProductTopSection.setAttribute("id","cartProductTopSection");


   
    // product top left
    let topLeft = document.createElement("div");
    topLeft.setAttribute("id","topLeft");
    let productName = document.createElement("h5");
    productName.setAttribute("id","productName");
    productName.textContent=element.name;
 
    let sku = document.createElement("p");
    sku.setAttribute("id","sku");
    let skuRandom = Math.floor(Math.random()*10000)+10000;
    sku.textContent=`sku${skuRandom}`

    topLeft.append(productName,sku);

//     //product top middle
    let topMiddle = document.createElement("div");
    topMiddle.setAttribute("id","topMiddle");
    let quantity = document.createElement("input");
    quantity.setAttribute("id","quantity");
    quantity.defaultValue= element.count;

    quantity.setAttribute("type","number");
    let update = document.createElement("button");
    update.textContent = "update";
    update.setAttribute("id","update");
    update.textContent="update";
    
    //count update 
    let itemQuantity = +quantity.value;
    quantity.onchange = updateCount;

    function updateCount(){
        itemQuantity = quantity.value;
    
    }

    update.onclick = updateDatabase;

    function updateDatabase(){
    document.getElementById("productUpdateId").value = products[index]._id;
    document.getElementById("productCount").value = itemQuantity;
    document.getElementById("cartItemupdate").submit();
    }

     totalItemValue = element.total;
  console.log(itemQuantity);

    finalValue += ((Number(totalItemValue))*(Number(itemQuantity)));
    console.log('finalValue:', finalValue)
   
    merchandiseValue.textContent = `$${finalValue.toFixed(2)}`;
    if(products.length != 0){
    totalEstValue.textContent = `$${(finalValue + 120).toFixed(2)}`;
}
    update.addEventListener("click",function(){

    if(itemQuantity == 0){
        products.splice(index,1);
        localStorage.setItem("cbCartItem",JSON.stringify(products));
    }
    
    let updatedCart = JSON.parse(localStorage.getItem("cbCartItem"));

    if(updatedCart.length == 0){
        
        zeroContainer.style.display="flex";
        cartContainer.style.display="none";
        cartCarousel.style.display="none";
        rightContainer.style.display="none";
    } 
    else{
        zeroContainer.style.display="none";
        cartContainer.style.display="flex";
        cartCarousel.style.display="block";
        rightContainer.style.display="block";
    }
  finalValue = 0;


        //update product count 

        let updatedArr = [];
        products.forEach((el,currentIndex)=>{
            if(index == currentIndex){
                let data = {
                    count:Number(itemQuantity),
                    total:el.total,
                    img1:el.img1,
                    name:el.name,
                    catagory:el.catagory,
                   }
                   updatedArr.push(data);

            }else{
                updatedArr.push(el);
            }
           
        })
       

        localStorage.setItem("cbCartItem" , JSON.stringify(updatedArr));
        let productsArray = JSON.parse(localStorage.getItem("cbCartItem"));

        finalValue = 0;

        displayCartProducts(productsArray)

    })


    topMiddle.append(quantity,update);


        // //product top right
    let topRight = document.createElement("div");
    topRight.setAttribute("id","topRight");
    let price = document.createElement("price");
    price.setAttribute("id","price");
    price.textContent = `$${(Number(element.total)*Number(itemQuantity))}.00`;
    topRight.append(price);


    //     //product Bottom section
    let cartProductBottomSection = document.createElement("div");
    cartProductBottomSection.setAttribute("id","cartProductBottomSection");

//     //product bottom left
    let bottomLeft = document.createElement("div");
    bottomLeft.setAttribute("id","bottomLeft");
    let productImage = document.createElement("img");
    productImage.setAttribute("id","productImage");
    productImage.src = element.img1;
    bottomLeft.append(productImage);

    //product bottom middle 
    let bottomMiddle = document.createElement("div");
    bottomMiddle.setAttribute("id","bottomMiddle");
    bottomMiddle.innerHTML = cartMiddle();

    
   // product bottom right
    let bottomRight = document.createElement("div");
    bottomRight.setAttribute("id","bottomRight");
    bottomRight.style.width="200px";

    let cross = document.createElement("div");
    cross.setAttribute("class","bottomRightDiv");
    let crossImage = document.createElement("img");
    crossImage.setAttribute("id","imgCross");
    crossImage.src = "https://cdn-icons-png.flaticon.com/512/748/748122.png";
    let crossContent = document.createElement("p");
    crossContent.textContent="Remove";

    cross.append(crossImage,crossContent);

    cross.addEventListener("click",function(){
        console.log("currently clicked",products[index]);
         document.getElementById("productDeleteId").value = products[index]._id;
        document.getElementById("cartItemDelete").submit();
    })

    let download = document.createElement("div");
    download.setAttribute("class","bottomRightDiv");
    let downloadImage = document.createElement("img");
    downloadImage.setAttribute("id","imgDownload");
    downloadImage.src = "https://cdn-icons-png.flaticon.com/512/318/318168.png";
    let downloadContent = document.createElement("p");
    downloadContent.textContent="Save for later";

    download.append(downloadImage,downloadContent);

    bottomRight.append(cross,download);

    let hr = document.createElement("hr");


    cartProductTopSection.append(topLeft,topMiddle,topRight);

    cartProductBottomSection.append(bottomLeft,bottomMiddle,bottomRight)

    cartProductDetail.append(cartProductTopSection,hr,cartProductBottomSection);

    cartProductContainer.append(cartProductDetail);
});
}
catch(error){
 console.log('error:', error)
}
finally{
    console.log("cart data appended");
}

}




let couponApplied = false;

document.getElementById("applyButton").addEventListener("click",function(){
  let inputPromo =  document.getElementById("promoCode").value;

   if(inputPromo == "Masai30"){

    let updatedValue = ((finalValue * 70 )/100) + 120;

    document.getElementById("totalEstValue").textContent = `$${updatedValue.toFixed(2)}`;



    let taxValue = document.getElementById("taxValue");
    taxValue.textContent = ((finalValue * 30 )/100).toFixed(2);

    let totalCost = {
        price:updatedValue.toFixed(2),
        discount:((finalValue * 30 )/100).toFixed(2),
        merchandisePrice:finalValue
    }
    localStorage.setItem("cartValue",JSON.stringify(totalCost));
    couponApplied = true;

   }else{
    alert("Invalid Promo code");
   }
})

document.getElementById("checkOutButton").addEventListener("click",function(){
    
    if(!couponApplied){
        let totalCost = {
            price:finalValue + 120,
            discount:0,
            merchandisePrice:finalValue
        }
        localStorage.setItem("cartValue",JSON.stringify(totalCost));
    } 
        
        const dataFromLocalStorage = JSON.parse(localStorage.getItem("cartValue"));
            console.log('dataFromLocalStorage:', dataFromLocalStorage);

            document.getElementById("totalMerchandisePrice").value = dataFromLocalStorage.merchandisePrice;
            document.getElementById("discountPrice").value = dataFromLocalStorage.discount;
            document.getElementById("totalPrice").value = dataFromLocalStorage.price;

            document.getElementById("cartItemSend").submit();
            
})
