import {
  baseUrl,
  getdata,
  changeQuantity,
  removeItem,
} from "../getutility/utility.js";

document.getElementById("info").style.display = "none";
document.getElementById("plus").addEventListener("click", () => {
  document.getElementById("info").style.display = "block";
  document.getElementById("plus").innerText = "-";
  document.getElementById("plus").addEventListener("click", () => {
    document.getElementById("info").style.display = "none";
    document.getElementById("plus").innerText = "+";
  });
});

document.getElementById("info1").style.display = "none";
document.getElementById("plus1").addEventListener("click", () => {
  document.getElementById("info1").style.display = "block";
  document.getElementById("plus1").innerText = "-";
  document.getElementById("plus1").addEventListener("click", () => {
    document.getElementById("info1").style.display = "none";
    document.getElementById("plus1").innerText = "+";
  });
});

document.getElementById("info2").style.display = "none";
document.getElementById("plus2").addEventListener("click", () => {
  document.getElementById("info2").style.display = "block";
  document.getElementById("plus2").innerText = "-";
  document.getElementById("plus2").addEventListener("click", () => {
    document.getElementById("info2").style.display = "none";
    document.getElementById("plus2").innerText = "+";
  });
});

document.getElementById("info3").style.display = "none";
document.getElementById("plus3").addEventListener("click", () => {
  document.getElementById("info3").style.display = "block";
  document.getElementById("plus3").innerText = "-";
  document.getElementById("plus3").addEventListener("click", () => {
    document.getElementById("info3").style.display = "none";
    document.getElementById("plus3").innerText = "+";
  });
});

createProduct();

async function createProduct() {
  const id = localStorage.getItem("paticularProduct");
  const data = await getdata(`${baseUrl}/product/${id}`);
  const cart = JSON.parse(localStorage.getItem("cloneBag")) || [];
  // console.log(cart)
  const present = cart.filter(({ id: bag_id }) => {
    return id == bag_id;
  });
  // console.log(present)
  if (present.length > 0) {
    displayProduct(data, present[0].quantity);
  } else {
    displayProduct(data, 0);
  }
}

function displayProduct(
  { api_featured_image, brand, name, description, price, id },
  q
) {
  const div = document.getElementById("orderpage_maindiv");
  div.innerHTML = `<div id="img_div">
    <img src="${api_featured_image}"
        alt="">
</div>
<div id="right_div">
    <div id="star_div">
        <div>
            <h5>${brand}</h5>
            <h5>${name}</h5>
            <p>BEST SELLER</p>
        </div>
        <div><span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
    </div>
    <div>
        <p id="para"><span style="font-size: 20px;font-weight: bolder;margin-left: 20px;"> $${price} </span> 4 interest-free
            payments of $42.25 with <span style="font-weight: bolder;">Klarna.</span> <a>Learn More</a></p>
    </div>
    <div style="margin-left: 20px;">
        <p>${description}</p>
    </div>
    <div id="offer_div">
        <div>
            <img
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-814309023161-1_128x.jpg?v=1661353560" />
        </div>
        <div>
            <p>Free Gift With Purachase</p>
            <h4>Anniversary Celebration Gift($175 Value!)</h4>
            <h4>Free with any $200 + purchase</h4>
        </div>
    </div>
    <div id="cart_parent_div"> 
    <div id="cart_fav_add">
        <div id="add_to_cart" class="btn btn-primary"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
            <div style="margin-left: 15px;"><i class="fa-solid fa-bag-shopping"></i></div>
            <div>ADD TO CART</div>
            <div>$${price}</div>
        </div>
        <div id="button_div">
            <button id="minus_btn">-</button><button  id="count_btn">${q}</button><button id="plus_button">+</button>
        </div>
        <div><i class="fa-solid fa-heart-circle-plus fa-2x"></i></div>
    </div>
    <div id="shipping">
        <div> Shipping & Returns</div>
        <div id="iiii">i</div>
    </div>
</div>
</div>`;

  document.getElementById("add_to_cart").addEventListener("click",async () => {
    await changeQuantity(1, id);
    createBag();
    createProduct()
  });

  document.getElementById("minus_btn").addEventListener("click", () => {
    changeQuantity(-1, id);
    createProduct();
  });

  document.getElementById("plus_button").addEventListener("click", () => {
    changeQuantity(1, id);
    createProduct();
  });
}

async function addToCart(id) {
  const cartData = JSON.parse(localStorage.getItem("cloneBag")) || [];
  const present = cartData.filter(({ id: bag_id }, ind) => {
    // if(id===bag_id){
    //     return ind
    // }
    // return -1
    return id === bag_id;
  });
  // console.log(present)
  if (present.length > 0) {
    present[0].quantity += 1;
  } else {
    const data = await getdata(`${baseUrl}/product/${id}`);
    data.quantity = 1;
    cartData.push(data);
  }
  localStorage.setItem("cloneBag", JSON.stringify(cartData));
}

function createBag() {
  const cartData = JSON.parse(localStorage.getItem("cloneBag")) || [];
  const canvas = document.getElementById("sideBag");
//   console.log(canvas);
  canvas.innerText = "";
  let sum = 0;
  cartData.forEach(
    ({ api_featured_image, price, name, quantity, brand, id }) => {
      const bag_items = document.createElement("div");
      bag_items.setAttribute("id", "bag_items");

      const baby_bag = document.createElement("div");
      baby_bag.setAttribute("id", "baby_bag");
      baby_bag.innerHTML = `<div><img src="${api_featured_image}" id="bag_img"/></div>
    <div>
        <h6>${name}</h6>
        <p>${brand}</p>
        <p>$${price}</p>
    </div>`;

      const button_div = document.createElement("div");
      button_div.setAttribute("id", "button_div");

      const btn1 = document.createElement("button");
      btn1.innerText = `-`;
      btn1.addEventListener("click", () => {
        changeQuantity(-1, id);
        createBag();
      });

      const btn2 = document.createElement("button");
      btn2.innerText = quantity;

      const btn3 = document.createElement("button");
      btn3.innerText = `+`;
      btn3.addEventListener("click", () => {
        changeQuantity(1, id);
        createBag();
      });
      button_div.append(btn1, btn2, btn3);

      const linkBox = document.createElement("div")
        linkBox.setAttribute("class","linkBox")
        const link = document.createElement("button")
        link.addEventListener("click",()=>{removeItem(id)
        createBag()})
        link.innerHTML = `<span>Remove</span>`
        linkBox.append(link)

    const btnBox = document.createElement("div")
    btnBox.append(button_div,linkBox)

      bag_items.append(baby_bag, btnBox);
      canvas.append(bag_items);

      sum += parseInt(quantity)*parseFloat(price)
    }
  );
  const btn = document.querySelector("#bagBtn span")
  btn.innerText = `$${sum}`
  console.log(btn)
}
