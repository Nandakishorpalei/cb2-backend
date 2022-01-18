
document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    register()
});

async function register(){
let desc = (Math.floor(Math.random()*1000000)).toString();

    let registeredData = {
    name : document.getElementById('fullName').value,
   email :document.getElementById('email').value,
   password :document.getElementById('password').value,
   username :document.getElementById('username').value,
   mobile :document.getElementById('phone').value,
   description:desc
    }

    registeredData = JSON.stringify(registeredData);
    console.log('data:', registeredData)

    let registerApi = "https://masai-api-mocker.herokuapp.com/auth/register";

   let response = await fetch(registerApi,{
        method:"POST",

        body:registeredData,
        headers:{
            "Content-Type":"application/json"
        },

    });

    let data = await response.json();
    console.log('data:', data)

    if(data.error===false){
        window.location.href="login.html";
    }
}