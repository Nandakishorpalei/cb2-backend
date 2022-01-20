document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  nexttopayment();
});

function nexttopayment() {

  document.getElementById("main_shipping_left").submit();
}


function allProduct(product){
  product = JSON.parse(product);
  console.log(product);
  let put = document.getElementById("Sipping_Merchandice_price");
  let total = document.getElementById("Shipping_Order_last_total");
  let discount = document.getElementById("discount");
  
  put.textContent = `$ ${product[0].merchandisePrice.toFixed(2)}`;
  total.textContent = `$ ${product[0].totalPrice.toFixed(2)}`;
  discount.textContent = `$ ${product[0].discount.toFixed(2)}`;

}