window.addEventListener("resize", resized);
resized();
sethover();

const offersList = ["Free Gifts With Purchase. Browse Now >","20% Off EltaMD >","20% Off M-61 SPF >","Free Shipping for BlueRewards Members"]
let offerInd = -1
setInterval(()=>{
  offerInd = (offerInd+1)%4
  document.querySelector("#offer>div").innerText = offersList[offerInd] 
},3000)

window.addEventListener("scroll", () => {
  const w = window.outerWidth;
  // console.log(w)
  if (w > 1024) {
    // console.log(document.documentElement.scrollTop || document.body.scrollTop);
    if (document.documentElement.scrollTop || document.body.scrollTop >= 160) {
      //   console.log(1);
      document.querySelector("nav").innerHTML = `<div id="stickymain">
            <div id="Sheading">
                <div><a href=""><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182" alt=""></a></div>
            </div>
            <div id="Snavigation"><div>
            <div class="routesHoverbox">
              <a href=""><span class="routesHover" id="navShop">SHOP</span></a>
            </div>
            <div class="routesHoverbox">
              <a href=""><span class="routesHover" id="navNew">NEW!</span></a>
            </div>
            <div class="routesHoverbox">
              <a href=""><span class="routesHover" id="navBrand">BRANDS</span></a>
            </div>
            <div class="routesHoverbox">
              <a href=""><span class="routesHover" id="navExplore">EXPLORE</span></a>
            </div>
            <div class="routesHoverbox">
              <a href=""><span class="routesHover" id="navEvent">EVENTS</span></a>
            </div>
            <div class="routesHoverbox">
              <a href=""><span class="routesHover" id="navAwards">BLUEREWARDS</span></a>
            </div>
            <div class="routesHoverbox">
              <a href=""
                ><span class="routesHover" id="navReboot"> ROUTINE REBOOT</span></a
              >
            </div>
          </div></div>
            <div id="Soption">
                <div><a href=""><i class="fa fa-map-marker"></i></a></div>
                <div><a href=""><i class="fa fa-heart-o"></i></i></a></div>
            <div><a href=""><i class="fa fa-search"></i></a></div>
            <div><a href=""><i class="fa fa-user-circle-o"></i></a></div>
            <div><a href=""><i class="fa fa-shopping-bag"></i></a></div>
            </div>
        </div>
        <div id="hoverEffectBetween">ab</div>`;
    } else {
      //   console.log(2);
      resized();
    }
    
  } else {
    const nav = document.getElementById("navigations2");
    // console.log(document.documentElement.scrollTop || document.body.scrollTop);
    if (document.documentElement.scrollTop || document.body.scrollTop >= 100) {
      //   console.log(3);
      nav?.classList.add("sticky");
    } else {
      //   console.log(4);
      resized();
    }
  }
  sethover();
  //   console.log(document.documentElement.scrollTop || document.body.scrollTop)
});

function resized() {
  // console.log(2)
  const w = window.outerWidth;
  // console.log(w)
  document.querySelector("nav").innerHTML = `${
    w > 1024
      ? `<div id="navigations">
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
  <div class="routesHoverbox">
    <a href=""><span class="routesHover" id="navShop">SHOP</span></a>
  </div>
  <div class="routesHoverbox">
    <a href=""><span class="routesHover" id="navNew">NEW!</span></a>
  </div>
  <div class="routesHoverbox">
    <a href=""><span class="routesHover" id="navBrand">BRANDS</span></a>
  </div>
  <div class="routesHoverbox">
    <a href=""><span class="routesHover" id="navExplore">EXPLORE</span></a>
  </div>
  <div class="routesHoverbox">
    <a href=""><span class="routesHover" id="navEvent">EVENTS</span></a>
  </div>
  <div class="routesHoverbox">
    <a href=""><span class="routesHover" id="navAwards">BLUEREWARDS</span></a>
  </div>
  <div class="routesHoverbox">
    <a href=""
      ><span class="routesHover" id="navReboot"> ROUTINE REBOOT</span></a
    >
  </div>
</div>
  </div>
<div id="hoverEffect"></div>
  `
      : w > 768
      ? `<div id="navigations2">
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
</div>`
      : `<div id="navigations2">
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
</div>`
  }<div id="offer">
<div></div>
</div>`;
sethover()
}

function sethover() {
  const d = document.getElementsByClassName("routesHover");
  for (let i = 0; i < d.length; i++) {
    d[i].addEventListener("mouseover", (e) => {
      const hover = document.getElementById("hoverEffect")?document.getElementById("hoverEffect"):document.getElementById("hoverEffectBetween");
      hover.style.display = "block";
      hover.addEventListener("mouseleave", () => {
        hover.style.display = "none";
      });
      // console.log(hover)
      if(e.target.id==="navNew"){
        hover.innerHTML = `<div id="hover3">
        <div id="menu">
          <p>BY CATEGORY</p>
          <p>Shop All</p>
          <p>Skincare</p>
          <p>Makeup</p>
          <p>Hair</p>
          <p>Bath & Body</p>
          <p>Fragrance</p>
          <p>Tools & Accessories</p>
          <p>Wellness</p>
          <p>Gifts</p>
          <p>Wedding Essentials</p>
        </div>
        <div id="image1">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/zitsticka_navigation_303x303.jpg?v=1659549528"
              alt=""
            />
          </div>
          <p>New Brand Alert: Zit stikca</p>
          <p>Treat and prevent all kinds of breakouts</p>
        </div>
        <div id="image1">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/l_avant_new_303x303.jpg?v=1661870182"
              alt=""
            />
          </div>
          <p>L'Avant Collection is Here!</p>
          <p>Plant-based cleaning products that look chic on your shelf</p>
        </div>
      </div>`
      }
      else if(e.target.id==="navExplore"){
        hover.innerHTML = `<div id="hover3">
        <div id="menu">
          <p>FEATURED</p>
          <p>Beauty Alfresco</p>
          <p>Wedding Essentials</p>
          <p>#ShowUsYouBag</p>
          <p>The Fouders Series</p>
          <p>Blue Notes</p>
          <p>Buying Guides</p>
          <p>Conscious Beauty</p>
          <p>MORE</p>
        </div>
        <div id="image1">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Wedding_Season_1x1_Blue_Mercury_2208_Alford_7031_303x303.jpg?v=1660140149"
              alt=""
            />
          </div>
          <p>Wedding Season Essentials</p>
          <p>Must-have products for bridal part and guests!</p>
        </div>
        <div id="image1">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615"
              alt=""
            />
          </div>
          <p>Routine Reboot</p>
          <p>Explore all beauty routines</p>
        </div>
      </div>`
      }
      else if(e.target.id==="navEvent"){
        hover.innerHTML = `<div id="hover2Images">
        <div id="image1">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/masterclass-bluemercury_303x303_8b06250d-4cc8-431d-8217-688769352c79_303x303.webp?v=1659551087"
              alt=""
            />
          </div>
          <p>Bluemercury Presents: #Masterclass</p>
          <p>Join us for live virtual shopping events!</p>
        </div>
        <div id="image1">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/store_events_navigation_303x303.jpg?v=1661983491"
              alt=""
            />
          </div>
          <p>Join Us in Store!</p>
          <p>Find exclusive events happening in your neighborhood</p>
        </div>
      </div>`
      }
      else if(e.target.id==="navAwards"){
        hover.innerHTML =  `<div id="hover2">
        <div id="menu">
          <p>MY ACCOUNT</p>
          <p>Account Overview</p>
          <p>My Purchase</p>
          <p>My BlueRewards</p>
          <p>My Wishlist</p>
          <p>Details + Preferences</p>
        </div>
        <div id="image1">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluerewards_2_303x303.jpg?v=1635345372"
              alt=""
            />
          </div>
          <p>Earn $10 for every $250/p></p>
          <p>Free to Join Learn More!</p>
        </div>
      </div>`
      }
      else if(e.target.id==="navReboot"){
        hover.innerHTML =  `<div id="hover3">
        <div id="image1">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615"
              alt=""
            />
          </div>
          <p>Shop All Routines</p>
          <p></p>
        </div>
        <div id="image1">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/extend_your_summer_glow_2_303x303.jpg?v=1659102162"
              alt=""
            />
          </div>
          <p>The "Extend Your Summer Glow" Routine</p>
          <p>Ward off dullness and boost your glow from head to toe</p>
        </div>
        <div id="menu">
          <p>BY ROUTINE</p>
          <p>Shop All</p>
          <p>Back to School</p>
          <p>Extend Your Summer Glow</p>
          <p>Get Rid of Summer Sun Damage</p>
          <p>Hydration Head-to-Toe</p>
          <p>#IwokeUpLikeThis</p>
          <p>Out the Door in Fove</p>
        </div>
      </div>`
      }
      else if(e.target.id==="navBrand"){
        hover.innerHTML = `<div id="hover3">
        <div id="menu">
          <p>SHOP ALL BRANDS</p>
        </div>
        <div id="menu">
            <p>BEST SELLER</p>
            <p>Augustinus Bader</p>
            <p>Chantecaille</p>
            <p>diptyque</p>
            <p>Dr.Barbara Strum</p>
            <p>Dyson</p>
            <p>La Mer</p>
            <p>Lune + Aster</p>
            <p>M-61</p>
            <p>Nars</p>
            <p>Olaplex</p>
            <p>Oribe</p>
            <p>SkinCeuticals</p>
            <p>Supergoop!</p>
            <p>TOM FORD</p>
            <p>Trish McEvoy</p>
            <p>VIRTUE</p>
          </div>
          <div id="menu">
            <p>#NEWATBLUE</p>
            <p>BalmLabs</p>
            <p>Boucleme</p>
            <p>EltaMD</p>
            <p>Holy Curls</p>
            <p>L'AVANT</p>
            <p>Lake & Skye</p>
            <p>NETTE</p>
            <p>PCA Skin</p>
            <p>SANA Jardin</p>
            <p>Sisley-Paris</p>
            <p>Sunday ll Sunday</p>
            <p>The Laundress</p>
            <p>The Maker</p>
            <p>vVARDIS</p>
            <p>ZitSticka</p>
          </div>
        <div id="image1">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/elta_md_nav_303x303.jpg?v=1656446190"
              alt=""
            />
          </div>
          <p>New Brand Alert: Zit stikca</p>
          <p>Treat and prevent all kinds of breakouts</p>
        </div>
      </div>`
      }
      else if(e.target.id==="navShop"){
        hover.innerHTML = `<div id="mainShop">
        <div id="staticShop">
            <div>
                <p class="hoverCategory">MAKEUP</p>
                <p>&#x3e;</p>
            </div>
            <div>
                <p class="hoverCategory">SKIN CARE</p>
                <p>&#x3e;</p>
            </div>
            <div>
                <p class="hoverCategory">HAIR</p>
                <p>&#x3e;</p>
            </div>
            <div>
                <p class="hoverCategory">BATH & ACCESSORIES</p>
                <p>&#x3e;</p>
            </div>
            <div>
                <p class="hoverCategory">HOME & LIFESTYLE</p>
                <p>&#x3e;</p>
            </div>
            <div>
                <p class="hoverCategory">SUN CARE</p>
                <p>&#x3e;</p>
            </div>
            <div>
                <p class="hoverCategory">MEN</p>
                <p>&#x3e;</p>
            </div>
            <div>
                <p class="hoverCategory">GIFTS</p>
                <p>&#x3e;</p>
            </div>
            <div>
                <p class="hoverCategory">BEST SELLERS</p>
                <p>&#x3e;</p>
            </div>
            <div>
                <p class="hoverCategory">WELLNESS</p>
                <p>&#x3e;</p>
            </div>
        </div>
        <div id="contentShop">
              <div id="menu">
                <p>BY CATEGORY</p>
                <P class="shopCategory">Shop All</P>
                <p class="shopCategory">Blush</p>
                <p class="shopCategory">Bronzer</p>
                <p class="shopCategory">Eyebrow</p>
                <p class="shopCategory">Eyeliner</p>
                <p class="shopCategory">Eye Shadow</p>
                <p class="shopCategory">Foundation</p>
                <p class="shopCategory">Lip liner</p>
                <p class="shopCategory">Lipstick</p>
                <p class="shopCategory">Mascara</p>
                <p class="shopCategory">Nail Polish</p>
              </div>
              <div id="menu">
                <p>BY BRAND</p>
                <p class="shopBrand">Almay</p>
                <p class="shopBrand">Alva</p>
                <p class="shopBrand">Anna of his own</p>
                <p class="shopBrand">Annabelle</p>
                <p class="shopBrand">Benefit</p>
                <p class="shopBrand">Boosh</p>
                <p class="shopBrand">Burt's bees</p>
                <p class="shopBrand">Butter london</p>
                <p class="shopBrand">C'est moi</p>
                <p class="shopBrand">Cargo cosmetics</p>
                <p class="shopBrand">China glaze</p>
                <p class="shopBrand">Clinical</p>
                <p class="shopBrand">Coastal classic creation</p>
                <p class="shopBrand">Colourpop</p>
                <p></p>
              </div>
              <div id="image1">
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Sisley_Mascara_1x1_Blue_Mercury_2208_IL3424_1_303x303.jpg?v=1661281522"
                    alt=""
                  />
                </div>
                <p>Sisley-Paris So volume Masacar</p>
                <p>Curls and defines the lashes from root to tip</p>
              </div>
      
        </div>
    </div>`
      const brand = document.getElementsByClassName("shopBrand")
      const category = document.getElementsByClassName("shopCategory")
      for(let i=0;i<brand.length;i++){
        brand[i].addEventListener("click",(e)=>{
          // console.log(e.target.innerText)
          localStorage.setItem("cloneBrand",e.target.innerText.toLowerCase())
          localStorage.removeItem("cloneCategory")
        })
      }

      for(let i=0;i<category.length;i++){
        category[i].addEventListener("click",(e)=>{
          // console.log(e.target.innerText)
          localStorage.setItem("cloneCategory",e.target.innerText.toLowerCase())
          localStorage.removeItem("cloneBrand")
        })
      }
  }
    });
  }
}

