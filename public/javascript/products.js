
//product add section


let productData;


function allProduct(items){
   
    productData = JSON.parse(items);
    console.log(productData)
    displayItem(productData);
}




//product sort

//sort items

let selectedFilter;
let buttonContent = document.getElementById("containerSortButton");

buttonContent.addEventListener("click",function(){
    document.getElementById("dropdownList").style.display="block";
})

 document.getElementById("sequence").addEventListener("click",function(){
    selectedFilter= this.value;
       buttonContent.textContent = selectedFilter;
       sortByPrice(selectedFilter)
       document.getElementById("dropdownList").style.display="none";
 });

 document.getElementById("priceLowToHigh1").addEventListener("click",function(){
    selectedFilter= this.value;
       buttonContent.textContent = selectedFilter;
       sortByPrice(selectedFilter)
       document.getElementById("dropdownList").style.display="none";
});

document.getElementById("priceHighToLow2").addEventListener("click",function(){
    selectedFilter= this.value;
     buttonContent.textContent = selectedFilter;
     sortByPrice(selectedFilter)
     document.getElementById("dropdownList").style.display="none";
});

document.getElementById("newestFirst3").addEventListener("click",function(){
    selectedFilter= this.value;
   buttonContent.textContent = selectedFilter;
   sortByPrice(selectedFilter)
   document.getElementById("dropdownList").style.display="none";
});

function sortByPrice(selectedOption){

   if(selectedOption == "price, Low To High"){
     productData = productData.sort(function (a,b){
         if(a.price > b.price) return 1;
         if(a.price < b.price) return -1;
         return 0;
     })
   }
  
   if(selectedOption == "price, High To Low"){
    productData = productData.sort(function (a,b){
        if(a.price > b.price) return -1;
        if(a.price < b.price) return 1;
        return 0;
    })
  }
  
  if(selectedOption == "new"){
    productData = JSON.parse(localStorage.getItem("cbProductData"))
    productData = productData.reverse();
  }
  
  
  if(selectedOption == "Most Relevant"){
    let productNormal = JSON.parse(localStorage.getItem("cbProductData"))
    productData = productNormal;
  }
  
  displayItem(productData);
  }
  



//filter section

//filter by category
let filterItem;
filterByCategory();

let decor = false;
let furniture = false;
let bedding = false;
let kitchen = false;
let holiday =false;


function filterByCategory(){
document.getElementById("Decor").addEventListener("click",function(){
    if(decor){
            let productNormal = JSON.parse(localStorage.getItem("cbProductData"))
            decor = false;
            displayItem(productNormal)            
    }else{
        filterItem = this.value;
        decor = true;
        filterProductsCategory(filterItem);
    }
    
})
document.getElementById("Furniture").addEventListener("click",function(){
    if(furniture){
        let productNormal = JSON.parse(localStorage.getItem("cbProductData"))
        furniture = false;
        displayItem(productNormal)            
}else{
    filterItem = this.value;
    furniture = true;
    filterProductsCategory(filterItem);
}
})
document.getElementById("Bedding").addEventListener("click",function(){
    if(bedding){
        let productNormal = JSON.parse(localStorage.getItem("cbProductData"))
        bedding = false;
        displayItem(productNormal)            
}else{
    filterItem = this.value;
    bedding = true;
    filterProductsCategory(filterItem);
}
})
document.getElementById("Kitchen").addEventListener("click",function(){
    if(kitchen){
        let productNormal = JSON.parse(localStorage.getItem("cbProductData"))
        kitchen = false;
        displayItem(productNormal)            
}else{
    filterItem = this.value;
    kitchen = true;
    filterProductsCategory(filterItem);
}
})
document.getElementById("Holiday").addEventListener("click",function(){
    if(holiday){
        let productNormal = JSON.parse(localStorage.getItem("cbProductData"))
        holiday = false;
        displayItem(productNormal)            
}else{
    filterItem = this.value;
    holiday = true;
    filterProductsCategory(filterItem);
}
})

function filterProductsCategory(filterItem){
   let filteredData = productData.filter(item=>{
       if(item.catagory == filterItem){
           return item;
       }
   })
   displayItem(filteredData)
}

}
//filter by price

let filterByPriceValue;
filterbyPrice
function filterbyPrice(){
document.getElementById("twenty").addEventListener("click",function(){
    filterByPriceValue = +this.value;
    filterProductsPrice(filterByPriceValue);
})
document.getElementById("fifty").addEventListener("click",function(){
    filterByPriceValue = +this.value;
    filterProductsPrice(filterByPriceValue);
})
document.getElementById("hundred").addEventListener("click",function(){
    filterByPriceValue = +this.value;
    filterProductsPrice(filterByPriceValue);
})
document.getElementById("fiveHundred").addEventListener("click",function(){
    filterByPriceValue = +this.value;
    filterProductsPrice(filterByPriceValue);
})
document.getElementById("thousand").addEventListener("click",function(){
    filterByPriceValue = +this.value;
    filterProductsPrice(filterByPriceValue);
})

function filterProductsPrice(filterByPriceValue){
    let filteredData = productData.filter(item=>{
        if(filterByPriceValue <= 20){
            if(item.price <= 20){
                return item;
            }
        }

        if(filterByPriceValue > 20 && filterByPriceValue <= 50 ){
            if(item.price > 20 && item.price <= 50){
                return item;
            }
        }

        if(filterByPriceValue > 50 && filterByPriceValue <= 100 ){
            if(item.price > 50 && item.price <= 100){
                return item;
            }
        }

        if(filterByPriceValue > 100 && filterByPriceValue <= 500 ){
            if(item.price > 100 && item.price <= 500){
                return item;
            }
        }

        if(filterByPriceValue > 500 && filterByPriceValue <= 1000 ){
            if(item.price > 500 && item.price <= 1000){
                return item;
            }
        }
    })
    displayItem(filteredData);
}
}


//product display

function displayItem(productData){
    console.log("here")
    document.getElementById("totalItem").textContent=`${productData.length} ITEMS`;

    let productContainer = document.getElementById("productContainer");
    productContainer.innerHTML=null;

    productData.forEach((item,index)=>{
        var div = document.createElement("div");

        function addtoSelected(){
            localStorage.setItem("selectedData",JSON.stringify(item)); 
            window.location.href="productDescription.html";
         }

        var image = document.createElement("img");
        image.addEventListener("click",addtoSelected);
        image.src= `${item.img1}`;
        image.addEventListener("mouseover",function(){
            image.src= `${item.img2}`;
        })
        image.addEventListener("mouseout",function(){
            image.src= `${item.img1}`;
        })

        var bottomDiv = document.createElement("div");
        bottomDiv.setAttribute("id","bottomDiv");

        var name = document.createElement("p");
        name.setAttribute("id","productName");
        name.textContent=item.name;
        name.addEventListener("click",addtoSelected)

        var heart = document.createElement("p");
        heart.innerHTML='<i class="far fa-heart"></i>';
        heart.setAttribute("id","addToWishlist");
        heart.addEventListener("click",function(){
        heart.innerHTML='<i class="fas fa-heart"></i>';
        alert("Product Added to Wishlist");
        setTimeout(function(){
            heart.innerHTML='<i class="far fa-heart"></i>';  
        },2000)
        
        let wishlistItems = JSON.parse(localStorage.getItem("cbWishlistItem")) || [];
         let product = item;
        
        wishlistItems.push(product);

        localStorage.setItem("cbWishlistItem",JSON.stringify(wishlistItems));
        })

        var category = document.createElement("p");
        category.setAttribute("id","productCategory");
        category.textContent=item.catagory;
        category.addEventListener("click",addtoSelected);

        var price = document.createElement("p");
        price.setAttribute("id","productPrice");
        price.textContent=`$${item.price}`;
        price.addEventListener("click",addtoSelected);

        var ship = document.createElement("p");
        ship.setAttribute("id","productShip");
        ship.textContent = "ships free";
        ship.style.color="red";
        ship.addEventListener("click",addtoSelected);

        let priceHeart = document.createElement("p");
        priceHeart.setAttribute("id","priceHeart");
        priceHeart.append(category,heart);

        bottomDiv.append(name,priceHeart,price,ship)

        div.append(image,bottomDiv)
        
        productContainer.append(div);
    })
}








//additional page data
 
 let adselectedItem;
let adbuttonContent = document.getElementById("adContainerSortButton");

adbuttonContent.addEventListener("click",function(){
    document.querySelector("ul").style.display="block";
})

 document.getElementById("adsequence").addEventListener("click",function(){
    adselectedItem= this.value;
       adbuttonContent.innerHTML =`sort by price <span>${adselectedItem}</span>` ;
       sortByPrice(adselectedItem)
       document.querySelector("ul").style.display="none";
 });

 document.getElementById("adpriceLowToHigh1").addEventListener("click",function(){
    adselectedItem= this.value;
    adbuttonContent.innerHTML =`sort by price <span>${adselectedItem}</span>`;
       sortByPrice(adselectedItem)
       document.querySelector("ul").style.display="none";
});

document.getElementById("adpriceHighToLow2").addEventListener("click",function(){
    adselectedItem= this.value;
    adbuttonContent.innerHTML =`sort by price <span>${adselectedItem}</span>` ;
     sortByPrice(adselectedItem)
     document.querySelector("ul").style.display="none";
});

document.getElementById("adnewestFirst3").addEventListener("click",function(){
    adselectedItem= this.value;
    adbuttonContent.innerHTML =`sort by price <span>${adselectedItem}</span>` ;
   sortByPrice(adselectedItem)
   document.querySelector("ul").style.display="none";
});


// additional Sort section


let adhidenSort = true;
document.getElementById("adContainerSortButton").addEventListener("click",()=>{
  if(adhidenSort){
       document.querySelector("ul").style.display="block";
       adhidenSort =false;
       document.getElementById("plus1").innerHTML='<i class="fas fa-minus">';
    }
  else{
    document.querySelector("ul").style.display="none";
       adhidenSort =true;
       document.getElementById("plus1").innerHTML='<i class="fas fa-plus">';
  }
})


let adhidenCategory = true;
document.getElementById("categoryButton").addEventListener("click",()=>{
  if(adhidenCategory){
       document.getElementById("adDropdownListcategory").style.display="block";
       adhidenCategory =false;
       document.getElementById("plus2").innerHTML='<i class="fas fa-minus">';
    }
  else{
       document.getElementById("adDropdownListcategory").style.display="none";
       adhidenCategory =true;
       document.getElementById("plus2").innerHTML='<i class="fas fa-plus">';
  }
})

let adhidenColor = true;
document.getElementById("categoryColor").addEventListener("click",()=>{
    if(adhidenColor){
        document.getElementById("adDropdownListcolor").style.display="block";
        adhidenColor = false;
        document.getElementById("plus3").innerHTML='<i class="fas fa-minus">';
    }
    else{
        document.getElementById("adDropdownListcolor").style.display="none";
        adhidenColor = true;
        document.getElementById("plus3").innerHTML='<i class="fas fa-plus">';
    }
 })


 let adhidenMaterial = true;
 document.getElementById("categoryMaterial").addEventListener("click",()=>{
     if(adhidenMaterial){
        document.getElementById("adDropdownListmaterial").style.display="block";
        adhidenMaterial = false;
        document.getElementById("plus4").innerHTML='<i class="fas fa-minus">';
     }
     else{
        document.getElementById("adDropdownListmaterial").style.display="none";
        adhidenMaterial = true;
        document.getElementById("plus4").innerHTML='<i class="fas fa-plus">';
     }
    
 
 })


 let adhidenPrice = true;
 document.getElementById("categoryPrice").addEventListener("click",()=>{
     if(adhidenPrice){
        document.getElementById("adDropdownListprice").style.display="block";
        adhidenPrice = false;
        document.getElementById("plus5").innerHTML='<i class="fas fa-minus">';
     }
     else{
        document.getElementById("adDropdownListprice").style.display="none";
        adhidenPrice = true;
        document.getElementById("plus5").innerHTML='<i class="fas fa-plus">';
     }
 
 
 })


 let adhidenType = true;
 document.getElementById("categoryType").addEventListener("click",()=>{
     if(adhidenType){
        document.getElementById("adDropdownListtype").style.display="block";
        adhidenType = false;
        document.getElementById("plus6").innerHTML='<i class="fas fa-minus">';
     }
 else{
    document.getElementById("adDropdownListtype").style.display="none";
    adhidenType = true;
    document.getElementById("plus6").innerHTML='<i class="fas fa-plus">';
 }
 
 })


 let adhidenDesign = true;
 document.getElementById("categoryDesign").addEventListener("click",()=>{
     if(adhidenDesign){
        document.getElementById("adDropdownListdesign").style.display="block";
        adhidenDesign = false;
        document.getElementById("plus7").innerHTML='<i class="fas fa-minus">';
     }
     else{
        document.getElementById("adDropdownListdesign").style.display="none";
        adhidenDesign = true;
        document.getElementById("plus7").innerHTML='<i class="fas fa-plus">';
     }
    
 
 })


 let adhidenFabric = true;
 document.getElementById("categoryFabric").addEventListener("click",()=>{
     if(adhidenFabric){
        document.getElementById("adDropdownListFabric").style.display="block";
        adhidenFabric = false;
        document.getElementById("plus8").innerHTML='<i class="fas fa-minus">';
     }
else{
    document.getElementById("adDropdownListFabric").style.display="none";
    adhidenFabric = true;
    document.getElementById("plus8").innerHTML='<i class="fas fa-plus">';
}
 })

 
 document.getElementById("filterButton").addEventListener("click",function(){
     document.getElementById("additionalPageDiv").style.display="flex";
  document.getElementById("productPageContainer").style.opacity="0.3";
  document.getElementById("wholeContainer").style.opacity="0.3";
  document.getElementById("productContainer").style.opacity="0.3";

 });

 document.getElementById("closeAdditionalPage").addEventListener("click",function(){
    document.getElementById("additionalPageDiv").style.display="none";
    document.getElementById("productPageContainer").style.opacity="1";
    document.getElementById("wholeContainer").style.opacity="1";
    document.getElementById("productContainer").style.opacity="1";
 });

//  document.getElementById("menuicon").style.display="none";