window.addEventListener("resize",resized)
resized()
function resized(){
    // console.log(2)
    const w = window.outerWidth;
    // console.log(w)
    document.querySelector("nav").innerHTML = `${w>1024?`<div id="navigations">
    <div id="geoLocation">
        <div><a href=""><i class="fa fa-map-marker"></i><span>STORE & SPA LOCATOR</span></a></div>
    </div>
    <div id="navigate">
        <div><a href=""><i class="fa fa-heart-o"></i></i><span>WISHLIST</span></a></div>
        <div><a href=""><i class="fa fa-search"></i><span>SEARCH</span></a></div>
        <div><a href=""><i class="fa fa-user-circle-o"></i><span>SIGN IN/UP</span></a></div>
        <div><a href=""><i class="fa fa-shopping-bag"></i><span>BAG</span></a></div>
    </div>
  </div>

  <div id="heading">
    <div><a href=""><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182" alt=""></a></div>
  </div>

  <div id="routes">
    <div>
        <div><a href=""><span>SHOP</span></a></div>
        <div><a href=""><span>NEW!</span></a></div>
        <div><a href=""><span>BRANDS</span></a></div>
        <div><a href=""><span>EXPLORE</span></a></div>
        <div><a href=""><span>EVENTS</span></a></div>
        <div><a href=""><span>BLUEREWARDS</span></a></div>
        <div><a href=""><span>ROUTINE REBOOT</span></a></div>
    </div>
  </div>`:w>768?`<div id="navigations2">
  <div id="navigationOption"><button>
      <span class="glyphicon glyphicon-menu-hamburger"></span>
  </button></div>
  <div id="headingMedium"><div><a href=""><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182" alt=""></a></div></div>
  <div id="navigateMedium">
      <div><a href=""><i class="fa fa-heart-o"></i></i></a></div>
  <div><a href=""><i class="fa fa-search"></i></a></div>
  <div><a href=""><i class="fa fa-user-circle-o"></i></a></div>
  <div><a href=""><i class="fa fa-shopping-bag"></i></a></div>
  </div>
</div>`:`<div id="navigations2">
<div id="navigationOption"><button>
    <span class="glyphicon glyphicon-menu-hamburger"></span>
</button></div>
<div id="headingSmall"><div><a href=""><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182" alt=""></a></div></div>
<div id="navigateMedium">
    <div><a href=""><i class="fa fa-heart-o"></i></i></a></div>
<div><a href=""><i class="fa fa-shopping-bag"></i></a></div>
</div>
</div>
<div id="searchBar">
<input type="text" name="" id="search" placeholder="Search...">
<button><i class="fa fa-search"></i></button>
</div>`}<div id="offer">
<div>Free Gifts With Purchase. Browse Now ></div>
</div>`
}
