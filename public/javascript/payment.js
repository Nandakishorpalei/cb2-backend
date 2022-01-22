
function savedaddress(paymentPageData){

let userName = document.getElementById("userName");
let cityName = document.getElementById("city");
let zipCode = document.getElementById("zip");
let address = document.getElementById("address");

    // console.log(paymentPageData)

    paymentPageData = JSON.parse(paymentPageData);

    const userAddress = paymentPageData.address;
    console.log('userAddress:', userAddress)
    const userPaymentDetails = paymentPageData.paymentDetails;
    console.log('userPaymentDetails:', userPaymentDetails)

    userName.textContent = `${userAddress.firstName} ${userAddress.lastName}`;
    zipCode.textContent =  userAddress.zipcode;
    address.textContent = userAddress.street;
    cityName.textContent =  userAddress.city;

    let put = document.getElementById("Sipping_Merchandice_price");
    let total = document.getElementById("Shipping_Order_last_total");
    let discount = document.getElementById("discount");

    put.textContent = `$${userPaymentDetails.merchandisePrice}`;
    total.textContent = `$${userPaymentDetails.totalPrice}`;
    discount.textContent = `$${userPaymentDetails.discount}`;
}
