const customerInfo = `<div id="contactBox">
<p>Contact information</p>
<div class="bo">
    <label for="">Email</label><br>
    <input type="email" name="" id="email">
</div>
<div>
    <input type="checkBox"> <span class="checkBoxtext">Email me with new and offers</span>
</div>
</div>
<div id="shipping">
<p>Shipping address</p>
<form>
    <div class="bo">
        <label for="">COUNTRY</label><br>
        <select name="" id="country">
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="England">England</option>
            <option value="Russia">Russia</option>
            <option value="Japan">Japan</option>
        </select>
    </div>
    <div id="name">
        <div class="bo">
            <label for="">FIRST NAME</label><br>
            <input type="text" name="" id="firstName">
        </div>
        <div class="bo">
            <label for="">LAST NAME</label><br>
            <input type="text" name="" id="lastName">
        </div>
    </div>
    <div class="bo">
        <label for="">ADDRESS</label><br>
        <input type="text" name="" id="address">
    </div>
    <div class="bo">
        <label for="">APARTMENT, SUITE, ETC.(OPTIONAL)</label><br>
        <input type="text" name="" id="apartment">
    </div>
    <div id="add">
        <div class="bo">
            <label for="">CITY</label><br>
            <input type="text" name="" id="city">
        </div>
        <div class="bo">
            <label for="">STATE</label><br>
            <select id="state">
                <option value="West Bengal">West Bengal</option>
                <option value="Bihar">Bihar</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Punjab">Punjab</option>
                <option value="Assam">Assam</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
        </div>
        <div class="bo">
            <label for="">ZIP CODE</label><br>
            <input type="text" name="" id="zipCode">
        </div>
    </div>
    <div>
        <input type="checkBox"> <span class="checkBoxtext">Save this information for the next time</span>
    </div>
    <p>By continuing, you agree to Bluemercury's <span>Privacy Practices.</span></p>
    <div id="navigate">
        <div> &#60; <a href="bag.html">RETURN TO CART</a></div>
        <div>
            <button id="customerInfoBtn">CONTINUE TO SHIPPING METHOD</button>
        </div>
    </div>
</form>
</div>`;
let shipment_charge = 7;
let dis = 0;
createform();
createCart();
function createform() {
  document.getElementById("dynamicCheckOut").innerHTML = customerInfo;
  document.getElementById("na1").style.fontWeight = "bold";
  document.getElementById("na2").style.fontWeight = "normal";
  document.getElementById("na3").style.fontWeight = "normal";

  document.getElementById("customerInfoBtn").addEventListener("click", () => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const form = document.querySelector("#shipping>form");
    const {
      country,
      firstName,
      lastName,
      address,
      apartment,
      city,
      state,
      zipCode,
    } = form;
    if (
      email === "" ||
      country.value === "" ||
      firstName.value === "" ||
      lastName.value === "" ||
      address.value === "" ||
      city.value === "" ||
      state.value === "" ||
      zipCode.value === ""
    ) {
      alert("All fields are required.");
    } else {
      createshipment(
        email,
        apartment.value,
        address.value,
        city.value,
        state.value,
        country.value
      );
    }
  });
}

function createshipment(email, apartment, address, city, state, country) {
  document.getElementById("dynamicCheckOut").innerHTML = `<div id="contactBox">
    <p>Contact information</p>
    <div id="shipssss">
        <div class="shippingDetails">
            <div>Contact</div>
            <div id="shippingEmail">${email}</div>
            <div><button id="change">CHANGE</button></div>
        </div>
        <hr>
        <div class="shippingDetails">
            <div>Ship to</div>
            <div id="shippingAddress">
               ${apartment}, ${address}, ${city}, ${state}, ${country}</div>
            <div><button id="change">CHANGE</button></div>
        </div>
    </div>
    
    </div>
    <div id="shipping">
    <p>Shipping address</p>
    <p id="soffer">JOIN OUR LOYALTY PROGRAM FOR FREE SHIPPING! LEARN MORE</p>
    <div id="shipOptions">
        <div class="shippingOptions">
            <div><input type="radio" name="sOptions" value="7" id="7" checked>
                <label for="7">Ground Shipping (3-7 days)</label>
            </div>
            <div><span>$7.00</span></div>
        </div>
        <div class="shippingOptions">
            <div><input type="radio" name="sOptions" value="10" id="10" >
                <label for="10">	Two-Day Shipping (Excludes PO Box or APO/FPO)</label>
            </div>
            <div><span>$10.00</span></div>
        </div>
        <div class="shippingOptions">
            <div><input type="radio" name="sOptions" value="20" id="20">
                <label for="20">Overnight Shipping (Excludes PO Box or APO/FPO)</label>
            </div>
            <div><span>$20.00</span></div>
        </div>
    </div>
    <div id="navigateShip">
        <div> &#60; <a href="bag.html">RETURN TO CART</a></div>
        <div>
            <button id="shippingBtn">CONTINUE TO PAYMENT</button>
        </div>
    </div>
    </div>`;
  document.getElementById("na1").style.fontWeight = "normal";
  document.getElementById("na2").style.fontWeight = "bold";
  document.getElementById("na3").style.fontWeight = "normal";

  document.querySelectorAll("#change").forEach((ele) => {
    ele.addEventListener("click", () => {
      createform();
    });
  });

  document.getElementsByName("sOptions").forEach((ele) => {
    ele.onclick = () => {
      shipment_charge = parseInt(ele.value);
      calculatetotal();
    };
  });

  document.getElementById("shippingBtn").addEventListener("click", () => {
    createPayment(
      email,
      apartment,
      address,
      city,
      state,
      country,
      shipment_charge
    );
  });
}

function createPayment(
  email,
  apartment,
  address,
  city,
  state,
  country,
  shipment_charge
) {
  document.getElementById("dynamicCheckOut").innerHTML = `<div id="contactBox">
    <p>Contact information</p>
    <div id="shipssss">
      <div class="shippingDetails">
        <div>Contact</div>
        <div id="shippingEmail">${email}</div>
        <div><button id="change">CHANGE</button></div>
      </div>
      <hr />
      <div class="shippingDetails">
        <div>Ship to</div>
        <div id="shippingAddress">
        ${apartment}, ${address}, ${city}, ${state}, ${country}
        </div>
        <div><button id="change">CHANGE</button></div>
      </div>
      <hr />
      <div class="shippingDetails">
        <div>Method</div>
        <div id="shippingAddress">
        ${
          shipment_charge == 7
            ? "Ground Shipping (3-7 days)"
            : shipment_charge == 10
            ? "Two-Day Shipping (Excludes PO Box or APO/FPO)"
            : "Overnight Shipping (Excludes PO Box or APO/FPO)"
        }  
        </div>
        <div><button id="change1">CHANGE</button></div>
      </div>
    </div>
    <p id="paymentPolicies">
      By continuing, you agree to Bluemercury's Privacy Practices.
    </p>
  </div>
  <div id="paymentBox">
    <p>Payment method</p>
    <p>All transactions are secure and encrypted.</p>

    <div id="paymentOptions">
      <div class="PaymentOption">
        <div>
          <input type="radio" name="pOptions" id="c" checked />
          <label for="c">CREDIT CARD</label>
        </div>
      </div>
      <div id="creditCard" class="subOptions">
        <form>
          <div class="po">
            <label for="">CARD NUMBER</label><br />
            <input type="number" name="" id="cardNumber" />
          </div>
          <div class="po">
            <label for="">Name on Card</label><br />
            <input type="text" name="" id="nameOnCard" />
          </div>
          <div id="cardDates">
            <div class="po">
              <label for="">EXPIRATION DATE(MM/YY)</label><br />
              <input type="date" name="" id="expiryDate" />
            </div>
            <div class="po">
              <label for="">Security Code</label><br />
              <input type="number" name="" id="securityCode" />
            </div>
          </div>
        </form>
      </div>

      <div class="PaymentOption">
        <div>
          <input type="radio" name="pOptions" id="p" />
          <label for="p"
            ><img
              src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/paypal@2x-768388b0667bef1aa9a7cf02fa1cc2184c2915a90d4cdd62dde223f74f2acbfc.png"
              alt=""
          /></label>
        </div>
      </div>
      <div id="imageCard1" class="subOptions">
        <p>
          After clicking “Complete order”, you will be redirected to
          PayPal to complete your purchase securely.
        </p>
      </div>

      <div class="PaymentOption">
        <div>
          <input type="radio" name="pOptions" id="k"/>
          <label for="k">KLARNA - FLEXIBLE PAYMENTS</label>
        </div>
      </div>
      <div id="imageCard2" class="subOptions">
        <p>
          After clicking “Complete order”, you will be redirected to
          Klarna - Flexible payments to complete your purchase
          securely.
        </p>
      </div>
    </div>
  </div>

  <div id="billingBox">
    <p>Billing address</p>
    <div id="billing">
      <div>
        <div class="billOptions">
          <input type="radio" name="bOptions" id="s" checked/>
          <label for="s">Same as shipping address</label>
        </div>
      </div>
      <div>
        <div class="billOptions">
          <input type="radio" name="bOptions" id="d"/>
          <label for="d">Use a different billing address</label>
        </div>
      </div>
      <div id="diff">
        <form>
          <div class="billo">
            <label for="">COUNTRY</label><br />
            <select name="" id="country">
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="England">England</option>
              <option value="Russia">Russia</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div id="name">
            <div class="billo">
              <label for="">FIRST NAME</label><br />
              <input type="text" name="" id="firstName" />
            </div>
            <div class="billo">
              <label for="">LAST NAME</label><br />
              <input type="text" name="" id="lastName" />
            </div>
          </div>
          <div class="billo">
            <label for="">ADDRESS</label><br />
            <input type="text" name="" id="address" />
          </div>
          <div class="billo">
            <label for="">APARTMENT, SUITE, ETC.(OPTIONAL)</label
            ><br />
            <input type="text" name="" id="apartment" />
          </div>
          <div id="add">
            <div class="billo">
              <label for="">CITY</label><br />
              <input type="text" name="" id="city" />
            </div>
            <div class="billo">
              <label for="">STATE</label><br />
              <select id="state">
                <option value="West Bengal">West Bengal</option>
                <option value="Bihar">Bihar</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Punjab">Punjab</option>
                <option value="Assam">Assam</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>
            <div class="billo">
              <label for="">ZIP CODE</label><br />
              <input type="text" name="" id="email" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div id="navigate">
    <div>&#60; <a href="bag.html">RETURN TO CART</a></div>
    <div>
      <button id="CompleteBtn">COMPLETE ORDER</button>
    </div>
  </div>`;

  document.getElementById("na1").style.fontWeight = "normal";
  document.getElementById("na2").style.fontWeight = "normal";
  document.getElementById("na3").style.fontWeight = "bold";

  document.querySelectorAll("#change").forEach((ele) => {
    ele.addEventListener("click", () => {
      createform();
    });
  });

  document.getElementById("change1").addEventListener("click", () => {
    createshipment(email, apartment, address, city, state, country);
  });

  document.getElementsByName("pOptions").forEach((ele) => {
    const c = document.getElementById("creditCard");
    const p = document.getElementById("imageCard1");
    const k = document.getElementById("imageCard2");
    ele.onclick = () => {
      // console.log(ele)
      if (ele.id === "p") {
        p.style.display = "flex";
        c.style.display = "none";
        k.style.display = "none";
      } else if (ele.id === "k") {
        p.style.display = "none";
        c.style.display = "none";
        k.style.display = "flex";
      } else {
        p.style.display = "none";
        c.style.display = "block";
        k.style.display = "none";
      }
    };
  });

  document.getElementsByName("bOptions").forEach((ele) => {
    const d = document.getElementById("diff");
    ele.onclick = () => {
      // console.log(ele)
      if (ele.id === "d") {
        d.style.display = "block";
      } else {
        d.style.display = "none";
      }
    };
  });
  document.getElementById("CompleteBtn").addEventListener("click", () => {
    const c = document.getElementById("c");
    const d = document.getElementById("d");
    const cd = c.checked ? checkCard() : true;
    const dc = d.checked ? checkAddress() : true;

    if (cd && dc) {
      alert("We received your Order.");
      location = "index.html";
    }
  });
}

function checkCard() {
  event.preventDefault();
  const form = document.querySelector("#creditCard>form");
  const { cardNumber, nameOnCard, expiryDate, securityCode } = form;

  if (
    cardNumber.value === "" ||
    nameOnCard.value === "" ||
    expiryDate.value === "" ||
    securityCode.value === " "
  ) {
    alert("All fields Required for the Credit Card Details");
    return false;
  } else if (cardNumber.value.length !== 16) {
    alert("Invalid Card Number.");
    return false;
  }
  const d = new Date();
  const d1 = new Date(expiryDate.value);
  if (d.getTime() > d1.getTime()) {
    alert("Your Card has been Expired.");
    return false;
  }
  return true;
}

function checkAddress() {
  {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const form = document.querySelector("#diff>form");
    const {
      country,
      firstName,
      lastName,
      address,
      apartment,
      city,
      state,
      zipCode,
    } = form;
    if (
      email === "" ||
      country.value === "" ||
      firstName.value === "" ||
      lastName.value === "" ||
      address.value === "" ||
      city.value === "" ||
      state.value === "" ||
      zipCode.value === ""
    ) {
      alert("All fields are required.");
      return false;
    } else {
      return true;
    }
  }
}

function createCart() {
  const data = JSON.parse(localStorage.getItem("cloneBag")) || [];
  displayCart(data);
}

function displayCart(data) {
  // console.log(data)
  const div = document.getElementById("cartItems");
  data.forEach(({ api_featured_image, name, brand, price, quantity }) => {
    div.innerHTML += `<div class="cartItem">
        <div class="itemD">
            <div id="image">
                <img src="${api_featured_image}" alt="">
            </div>

            <div>
                <p>${name}</p>
                <p>${brand}</p>
            </div>
        </div>

        <div class="itemPrice">
            <p>$${parseInt(quantity) * parseFloat(price)}</p>
        </div>
    </div>`;
  });
  calculatetotal();
}

function calculatetotal() {
  const data = JSON.parse(localStorage.getItem("cloneBag")) || [];
  let sum = 0;
  data.forEach(({ price, quantity }) => {
    sum += parseInt(quantity) * parseFloat(price);
  });
  const div = document.getElementById("priceDistribution");
  div.innerHTML = `<div>
    <p>SubTotal</p>
    <p>$${sum}</p>
  </div>
  <div>
    <p>Shipping</p>
    <p>$${shipment_charge}</p>
  </div>
  <div>
    <p>Taxes</p>
    <p>$${(sum / 100) * 18}</p>
  </div>
  <div>
    <p>Discount</p>
    <p>$${(dis / 100) * sum}</p>
  </div>`;

  const div2 = document.getElementById("totalCost");
  div2.innerHTML = `<p>Total</p>
  <p>USD <span>$${
    sum + shipment_charge + (sum / 100) * 18 - (dis / 100) * sum
  }</span></p>`;
}

document.getElementById("coupon").addEventListener("click", () => {
  const val = document.getElementById("promoCode").value;
  if (val === "bluemercury") {
    dis = 30
    calculatetotal();
  }
});
