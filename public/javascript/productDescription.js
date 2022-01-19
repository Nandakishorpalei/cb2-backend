// // import footer & append
// import footer from "./components/footer.js";
// let footerDiv = document.getElementById("footerDiv");
// footerDiv.innerHTML = footer();

// // add below line in head section for footer style

// //navbar Import section start

// import navbar from "./components/navbarImport.js";
// let navbarDiv = document.getElementById("navbarDiv");
// navbarDiv.innerHTML = navbar();

// var script = document.createElement("script");
// script.src = "navbar.js";
// document.head.appendChild(script);

let sampleData;


function allProduct(items){
   
  sampleData = JSON.parse(items);
  //console.log(sampleData)
  //cartDataSetting(sampleData); 
  appendData(sampleData);
}

//console.log("sampleData:", sampleData);

let type = document.getElementById("type");

document.getElementById("first").addEventListener("click", () => {
  type.innerHTML = `<strong>MATERIAL:</strong> Down-alternative insert`;
});

document.getElementById("second").addEventListener("click", () => {
  type.innerHTML = `<strong>MATERIAL:</strong> feather-down insert`;
});

//   checkbox script =======================>

document.getElementById("onlyOne").addEventListener("click", (checkbox) => {
  let checkboxes = document.getElementsByName("rewardcheck");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
});



let leftBox = document.getElementById("leftBox");
let middlebox = document.getElementById("middleBox");
let rightBox = document.getElementById("rightBoxContent");
let body = document.querySelector("body");

const appendData = (sampleData) => {
  console.log(sampleData[0])
  const img1 = sampleData[0].img1;
  const img2 = sampleData[0].img2;
  const img3 = sampleData[0].img3; 
  const img4 = sampleData[0].img4;
  const name = sampleData[0].name; 
  const catagory = sampleData[0].catagory;
  const price = sampleData[0].price; 
  console.log("catagory:", catagory);
  console.log("name:", name);
  // for leftBox section
  let lImg1 = document.createElement("img");
  lImg1.src = img1;

  let lImg2 = document.createElement("img");
  lImg2.src = img2;

  let lImg3 = document.createElement("img");
  lImg3.src = img3;

  let lImg4 = document.createElement("img");
  lImg4.src = img4;

  leftBox.append(lImg1, lImg2, lImg3, lImg4);

  //     for middleBox section
  let mImg1 = document.createElement("img");
  mImg1.src = img1;

  let mImg2 = document.createElement("img");
  mImg2.src = img2;

  let mImg3 = document.createElement("img");
  mImg3.src = img3;

  let mImg4 = document.createElement("img");
  mImg4.src = img4;

  middlebox.append(mImg1, mImg2, mImg3, mImg4);

  // for rightBox section

  let rightTitle = document.getElementById("name");
  rightTitle.innerHTML = name;

  let rightPrice = document.getElementById("price");
  rightPrice.innerHTML = `$${price}`;

  let dragTitle = document.getElementById("dragTitle");
  dragTitle.innerHTML = name;

  let cat = document.getElementById("category");
  cat.innerHTML = catagory;

  //   product count script ===================>

  let btn = document.getElementById("addToCartBtn");
  btn.addEventListener("click", () => {
    addDragDetail({ price, img1, name, catagory }, count);
  });

  //setting default attribute to disabled of minus button
  document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

  let count = 1;

  document.querySelector(".plus-btn").addEventListener("click", () => {
    count = document.getElementById("quantity").value;

    count++;

    document.getElementById("quantity").value = count;

    if (count > 1) {
      document.querySelector(".minus-btn").removeAttribute("disabled");
      document.querySelector(".minus-btn").classList.remove("disabled");
    }
    countFunction({ price }, count);
  });

  document.querySelector(".minus-btn").addEventListener("click", () => {
    count = document.getElementById("quantity").value;

    count--;

    document.getElementById("quantity").value = count;

    if (count == 1) {
      document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
    }
    countFunction({ price }, count);
  });

  // addDragDetail({ price }, count);
};


let newCount;
function countFunction(price, count) {
  newCount = count;
}

// script for dragdown cartdetail box

function addDragDetail({ price, img1, name, catagory }, count) {
  if (newCount !== undefined) {
    count = newCount;
  }

  console.log("count:", count);
  console.log("price:", price);
  let cartDiv = document.getElementById("cartDiv2");
  cartDiv.style.display = "block";
  cartDiv.style.transition = "5s";

  let remove = document.getElementById("remove");
  remove.addEventListener("click", () => {
    cartDiv.style.display = "none";
  });

  let itemAdded = document.getElementById("itemAdded");
  itemAdded.innerHTML = `<span><i class="fas fa-check"></i></span> ${count} item added to your cart`;

  let imgBox = document.getElementById("leftImgBox");
  let img2 = document.createElement("img");
  img2.src = img1;
  console.log("img1:", img1);
  img2.style.width = "100%";

  imgBox.append(img2);

  let rightP1 = document.getElementById("rightP1");
  rightP1.innerHTML = `<strong>Your Cart: ${count} items</strong>`;

  let total = price;
  let valueToShow = price * count;
  let subTotal1 = document.getElementById("subTotal1");
  subTotal1.innerText = `$${valueToShow}`;

  let subTotal2 = document.getElementById("subTotal2");
  subTotal2.innerHTML = `<strong>$${valueToShow}</strong>`;

  let iconTitle = document.getElementById("iconTitle");
  iconTitle.innerHTML = `${name}`;

  let productArray = JSON.parse(localStorage.getItem("cbCartItem")) || [];

  let desData = {
    count,
    total,
    img1,
    name,
    catagory,
  };
productArray.push(desData);
  localStorage.setItem("cbCartItem", JSON.stringify(productArray));
}

// script for dragdown

// let detailOne = document.getElementsByClassName("detailOne");
let hiddenBox1 = document.getElementById("hiddenBox1");

function showBtn() {
  hiddenBox1.style.display = "block";
  hiddenBox1.style.maxHeight = "fit-content";
  hiddenBox1.style.transition = "all 0.5s ease";
  //     hiddenBox1.style.backfaceVisibility = "hidden";
  //     hiddenBox1.style.willChange = "maxHeight";
}

function hiddenBtn() {
  hiddenBox1.style.display = "none";
  hiddenBox1.style.transition = "all 0.5s ease";
}

let hiddenBox2 = document.getElementById("hiddenBox2");

function showBtn2() {
  hiddenBox2.style.display = "block";
  hiddenBox2.style.maxHeight = "fit-content";
  hiddenBox2.style.transition = "all 0.5s ease";
  //     hiddenBox2.style.backfaceVisibility = "hidden";
  //     hiddenBox2.style.willChange = "maxHeight";
}

function hiddenBtn2() {
  hiddenBox2.style.display = "none";
  hiddenBox2.style.transition = "all 0.5s ease";
}

let hiddenBox3 = document.getElementById("hiddenBox3");

function showBtn3() {
  hiddenBox3.style.display = "block";
  hiddenBox3.style.maxHeight = "fit-content";
  hiddenBox3.style.transition = "all 0.5s ease";
  //     hiddenBox3.style.backfaceVisibility = "hidden";
  //     hiddenBox3
  style.willChange = "maxHeight";
}

function hiddenBtn3() {
  hiddenBox3.style.display = "none";
  hiddenBox3.style.transition = "all 0.5s ease";
}

// showCartData();
// btn.addEventListener("click", showCartData);
