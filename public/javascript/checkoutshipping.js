document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  nexttopayment();
});

function nexttopayment() {
  let name = document.getElementById("shipping_input_name_first").value;
  let last_n = document.getElementById("shipping_input_name_last").value;
  let addre = document.getElementById("shipping_street_address").value;
  let zip = document.getElementById("shipping_input_name_zip").value;
  let city = document.getElementById("shipping_input_name_city").value;
  let mobile = document.getElementById("shipping_phoneno_phone").value;

  let data = {
    first: name,
    last: last_n,
    address: addre,
    zip_code: zip,
    city_name: city,
    phone: mobile,
  };

  localStorage.setItem("CheckoutAddress", JSON.stringify(data));

  window.location.href = "payment.html";
  alert("Address Saved");
}

async function total() {
  let checkoutData = await JSON.parse(localStorage.getItem("cartValue"));

  let put = document.getElementById("Sipping_Merchandice_price");
  let total = document.getElementById("Shipping_Order_last_total");
  let Discount = document.getElementById("discount");

  let allTotal = Number(checkoutData.merchandisePrice);

  put.textContent = `$${allTotal.toFixed(2)}`;
  discount.textContent = `$${checkoutData.discount}`;
  total.textContent = `$${checkoutData.price}`;
}
total();
