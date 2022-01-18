function radar(){

    return ` <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
         <style>
    
         /* radar section */
    
    #radarDiv{
        width:98vw;
        overflow-x: scroll;
        margin-top:60px;
    }
    #radarDiv::-webkit-scrollbar {
        display: none;
    }
    #radarSection{
        display: flex;
        margin-left:30px;
    }
    .radarItem{
        height:550px;
        padding:10px;
        margin:5px;
        font-family : "Lineto Brown Sub" ,"Lineto Brown Light Sub", Verdana, sans-serif;
        color:black;
        font-size:12.5px;
    }
    .radarItem img{
        width:335px;
    }
     #radarTextDiv{
        height:30px;
        margin-left:15px;
        width:90%;
        margin-left:55px;
        margin-bottom:14px;
    }
    #radarText{
        font-size:150%;
        position:absolute;
        font-family : "Lineto Brown Sub" ,"Lineto Brown Light Sub", Verdana, sans-serif;
    }
    #radarTextDiv hr{
        position:absolute;
        width:80%;
        margin:14px 0 0 210px;
        background-color:black;
    }
    h3{
        padding-left:5px;
        opacity:0.8;
        font-size:20px;
    }
    p{
        margin-top:20px;
    }
    a{
        color:black;
        font-weight:200;
    }
    
         </style>
     </head>
     <body>
    
     
    
        <div id="radarTextDiv">
            <span id="radarText">ON OUR RADAR</span>
            <hr>
        </div>
    
        <div id="radarSection">
            <div class="radarItem">
                <img src="landingImages/home_bt_1.jfif" alt="">
                <h3>SO GOOD THEY ALREADY SOLD OUT ONE-DON'T LET THEM GET AWAY AGAIN</h3>
                <p><a href="">SHOP BACK IN STOCK</a></p>
            </div>
            <div class="radarItem">
                <img src="landingImages/home_bt_2.jfif" alt="">
                <h3>HOW TO CREATE FANTASTICAL HOLIDAY FLORALS WITH STYLIST DAVID ANGER</h3>
                <p><a href="">READ & SHOP</a></p>
            </div>
            <div class="radarItem">
                <img src="landingImages/home_bt_3.jfif" alt="">
                <h3>MAKE DESIGN MAGIC HAPPEN WITH OUR FREE DESIGN SERVICES</h3>
                <p><a href="">LEARN MORE</a></p>
            </div>
            <div class="radarItem">
                <img src="landingImages/home_bt_4.jfif" alt="">
                <h3>CB2 IN YOUR SPACE: PHOTO BY @CONVIVALPRODUCTION</h3>
                <p><a href="">SEE ALL #MYCB2</a></p>
            </div>
        </div>
    
    
         
    </body>
    </html>
    `
    }
    
    export default radar;