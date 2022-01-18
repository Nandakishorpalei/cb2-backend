
let select = document.getElementById("MainStore_Select_State");
select.onchange= changeimg;

function changeimg(){
    let main = document.getElementById("MainStore_Select_State").value;
    let img = document.getElementById("MainStore_Images_img");
    let name = document.getElementById("MainStore_Address_name");
    let cap = document.getElementById("MainStore_Address_cap");
    let desh = document.getElementById("MainStore_Address_desh")

    if(main==="Uttarakhand"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-71-01/$web_store_location_individual_xs$/211216074235/store-location-71-01.jpg";
       name.textContent=main;
       cap.textContent="Dehradun";
       desh.textContent="INDIA";
    }
    if(main==="Andhra Pradesh"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-53-01/$web_store_location_individual_xs$/211216074235/store-location-53-01.jpg";
       name.textContent=main;
       cap.textContent="Amaravati";
       desh.textContent="INDIA";
    }
    if(main==="Arunachal Pradesh"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-55-01/$web_store_location_individual_xs$/211216074235/store-location-55-01.jpg";
       name.textContent=main;
       cap.textContent="Itanagar";
       desh.textContent="INDIA";
    }
    if(main==="Assam"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-73-01/$web_store_location_individual_xs$/211216074757/store-location-73-01.jpg";
       name.textContent=main;
       cap.textContent="Dispur";
       desh.textContent="INDIA";
    }
    if(main==="Bihar"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-69-01/$web_store_location_individual_xs$/211216074757/store-location-69-01.jpg";
       name.textContent=main;
       cap.textContent="Patna";
       desh.textContent="INDIA";
    }
    if(main==="Chhattisgarh"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-64-01/$web_store_location_individual_xs$/211216074757/store-location-64-01.jpg";
       name.textContent=main;
       cap.textContent="Raipur";
       desh.textContent="INDIA";
    }
    if(main==="Goa"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-56-01/$web_store_location_individual_xs$/211216074236/store-location-56-01.jpg";
       name.textContent=main;
       cap.textContent="Panji";
       desh.textContent="INDIA";
    }
    if(main==="Gujarat"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-74-01/$web_store_location_individual_xs$/211216074236/store-location-74-01.jpg";
       name.textContent=main;
       cap.textContent="Gandhinagar";
       desh.textContent="INDIA";
    }
    if(main==="Delhi"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-118-01/$web_store_location_individual_xs$/211216075320/store-location-118-01.jpg";
       name.textContent=main;
       cap.textContent="Greater Noida";
       desh.textContent="INDIA";
    }
    if(main==="Haryana"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-123-01/$web_store_location_individual_xs$/211216074757/store-location-123-01.jpg";
       name.textContent=main;
       cap.textContent="Chandigarh";
       desh.textContent="INDIA";
    }
    if(main==="Himachal Pradesh"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-67-01/$web_store_location_individual_xs$/211216074213/store-location-67-01.jpg";
       name.textContent=main;
       cap.textContent="Shimla";
       desh.textContent="INDIA";
    }
    if(main==="Jharkhand"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-66-01/$web_store_location_individual_xs$/211216074236/store-location-66-01.jpg";
       name.textContent=main;
       cap.textContent="Ranchi";
       desh.textContent="INDIA";
    }
    if(main==="Karnataka"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-70-01/$web_store_location_individual_xs$/211216074757/store-location-70-01.jpg";
       name.textContent=main;
       cap.textContent="Bengaluru";
       desh.textContent="INDIA";
    }
    if(main==="Kerala"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-51-01/$web_store_location_individual_xs$/211216074757/store-location-51-01.jpg";
       name.textContent=main;
       cap.textContent="Thiruvananthapuram";
       desh.textContent="INDIA";
    }
    if(main==="Madhya Pradesh"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-65-01/$web_store_location_individual_xs$/211216074757/store-location-65-01.jpg";
       name.textContent=main;
       cap.textContent="Bhopal";
       desh.textContent="INDIA";
    }
    if(main==="Maharashtra"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-54-01/$web_store_location_individual_xs$/211216074949/store-location-54-01.jpg";
       name.textContent=main;
       cap.textContent="Mumbai";
       desh.textContent="INDIA";
    }
    if(main==="Punjab"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-68-01/$web_store_location_individual_xs$/211216074236/store-location-68-01.jpg";
       name.textContent=main;
       cap.textContent="Chandigarh";
       desh.textContent="INDIA";
    }
    if(main==="Rajasthan"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-58-01/$web_store_location_individual_xs$/211216074757/store-location-58-01.jpg";
       name.textContent=main;
       cap.textContent="Jaipur";
       desh.textContent="INDIA";
    }
    if(main==="Uttar Pradesh"){
         img.src="https://cb2.scene7.com/is/image/CB2/store-location-59-01/$web_store_location_individual_xs$/211216074236/store-location-59-01.jpg";
       name.textContent=main;
       cap.textContent="Lucknow";
       desh.textContent="INDIA";
    }

}