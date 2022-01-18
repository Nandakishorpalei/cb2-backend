function navbar(){
   return ` <!DOCTYPE html>
<html>
<html lang="en">    
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE-edge" />
    <meta name="viewport" content="width-device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="navbar.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="landing.css">
    <link rel="icon" href="landingImages/cbicon.ico">
    <title></title>
 
</head>

<body> 
    <div id="navBar">
        <!-- header bar -->
        <div id="discountBar">           
                <p>IT'S NOT TOO LATE.</p>
                <p>2-DAY PREMIUM DELIVERY: 12/19, 10AM PT </p>
                <p>|</p>
                <p>DECEMBER MARKDOWNS UP TO 60% OFF</p>
                <p>|</p>
                <p>BUY A $100 E-GIFT CARD, GET $20</p>
                <p>|</p>
                <p>FAST & FREE CURBSIDE PICKUP</p>
                <p><u>SEE ALL OFFERS (6)</u></p>     
        </div>


        <!-- navbar main container -->
        <div id="mainNav">

            <!-- menu and search div -->

            <div id="menusearch">
                <div id="menuBtn"><span class="material-icons" id="menuicon">menu</span></div>

                <div id="searchbox">
                    <span><img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt=""></span>
                    <input type="text" id="" placeholder="Search">
                </div>
            </div>

            <!-- log div -->

            <div id="cb2logo">
                <img id="homeLogo" src="https://www.stpaulcollection.com/wp-content/uploads/2018/11/st-paul-collection-amenities-cb2.png" alt="">
            </div>


            <!-- options div -->

            <div id="options">
                <span id="locationButton"><a><img id="locationBtn" src="https://cdn-icons-png.flaticon.com/512/1216/1216844.png"></a></span>
                <span><a href="login.html"><img id="profileBtn" src="https://cdn-icons-png.flaticon.com/512/747/747376.png"></a></span>
                <span id="wishlistButton"><a><img id="wishBtn" src="https://cdn-icons-png.flaticon.com/512/126/126471.png"></a></span>
                <span id="cartButton"><a>
                    <p id="cartIndicator">0</p>
                    <img id="cartBtn" src="landingImages/cartIcon.png"></a></span>
            </div>
        </div>
    </div>

    <div id="sidebar">
        <div id="sidebarList">
            <p id="newPageButton"><a>NEW</a></p>
            <p>FURNITURE</p>
            <p>HOLIDAY</p>
            <p>GIFTS</p>
            <p>DECOR & MIRRORS</p>
            <p>LIGHTING</p>
            <p>PILLOWS & THROWS</p>
            <p>RUGS</p>
            <p>KITCHEN & DINING</p>
            <p>BEDDING & BATH</p>
            <p>OUTDOOR</p>
            <p>SALE & OFFERS</p>
            <p>KRAVITZ DESIGN</p>
            <p>__</p>
            <p>COLLABORATIONS</p>
            <p>IDEAS & INPISRATIONS</p>
            <p>FREE DESIGN SERVICES</p>
            <p>TRADE PROGRAM</p>
        </div>
    </div>
    <div id="accDetails">
        <p><a href="login.html">SIGN IN</a></p>
        <p>ORDER TRACKING</p>
        <p>SCHEDULE DELIVERY</p>
        <p id="signOut">SIGN OUT</p>
    </div>
    <div id="wishDetails"></div>
    <div id="cartDetails">
        <div id="itemDiv">
            <p>ARE YOU MISSING ITEMS<br>
                IN YOUR CART?</p>
        </div>
        <div id="gotoCart">
            <a href="cart.html">
                <p>VIEW CART</p>
            </a>
        </div>
    </div>


    
    <!-- div for phone -->
    <div id="phoneNav">
     <div id="mainNavPhone">
         <div id="menuBtnPhone"><span class="material-icons" style="margin-top:5px;" id="menuicon">menu</span></div>
         <div id="searchIconPhone"><img class="paddingTop" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt=""></div>
         <div id="cb2logoPhone">
             <img src="https://www.stpaulcollection.com/wp-content/uploads/2018/11/st-paul-collection-amenities-cb2.png" alt="">
         </div>
         <div id="wishIconPhone">
             <span ><a href="favorites.html"><img class="paddingTop" id="wishBtnPhone" src="https://cdn-icons-png.flaticon.com/512/126/126471.png"></a></span>
         </div>
 
         <div id="cartIconPhone">
             <span ><a href="cart.html">
                 <p id="cartIndicatorPhone" style="margin-top:5px;">0</p>
                 <img class="paddingTop" id="cartBtnPhone" src="landingImages/cartIcon.png"></a></span>
         </div>
     </div>
    
 
     <div id="phoneDiscountBar">         
         
         <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
             <div class="carousel-inner">
 
               <div class="carousel-item active">
                 <p>IT'S NOT TOO LATE.</p>
               </div>
 
               <div class="carousel-item">
                 <p>2-DAY PREMIUM DELIVERY: 12/19, 10AM PT </p>
               </div>
 
               <div class="carousel-item">
                 <p>NOW MARKDOWNS UP TO 60% OFF</p>
               </div>
 
               <div class="carousel-item">
                 <p>BUY A $100 E-GIFT CARD, GET $20</p>
               </div>
 
             </div>
           </div>
 
 </div>
 
 
 </div>

    
</body>    
</html>
`
}

export default navbar;