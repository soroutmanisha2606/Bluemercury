import { baseUrl, getdata, patchData, deleteData } from "../getutility/utility.js";

createCart();

async function createCart() {
  const data = await getdata(`${baseUrl}/bag`);
  displayCart(data);
}

function displayCart(data){
    let sum = 0
    let q = 0
    const tbody = document.getElementById("cartBody")
    tbody.innerText = ""
    data.forEach(({name,description,price,quantity,api_featured_image,id}) => {
        const div1 = document.createElement("div")
        div1.setAttribute("class","bagItemDetails")

        const imageBox = document.createElement("div")
        imageBox.setAttribute("class","imagebox")
        const image = document.createElement("img")
        image.setAttribute("src",api_featured_image)
        imageBox.appendChild(image)

        const detailBox = document.createElement("div")
        detailBox.setAttribute("class","detailBox")
        const p1 = document.createElement("p")
        p1.innerText = name
        const p2 = document.createElement("p")
        p2.innerText = description.substr(0,100)+"..."
        detailBox.append(p1,p2)

        div1.append(imageBox,detailBox)

        const td2 = document.createElement("div")
        td2.innerHTML = `<p>$${price}</p>`

        const div3 = document.createElement("div")
        const btnBox = document.createElement("div")
        btnBox.setAttribute("class","btnBox")
        const dBtn = document.createElement("button")
        dBtn.addEventListener("click",()=>{changeQuantity(-1,id)})
        dBtn.innerHTML="-"
        const iBtn = document.createElement("button")
        iBtn.addEventListener("click",()=>{changeQuantity(1,id)})
        iBtn.innerText = "+"
        const quan = document.createElement("p")
        quan.innerText = quantity
        btnBox.append(dBtn,quan,iBtn)
        
        const linkBox = document.createElement("div")
        linkBox.setAttribute("class","linkBox")
        const link = document.createElement("button")
        link.addEventListener("click",()=>{removeItem(id)})
        link.innerHTML = `<span>Remove</span>`
        linkBox.append(link)

        div3.append(btnBox,linkBox)

        const td4 = document.createElement("div")
        // console.log(price,quantity)
        td4.innerHTML = `<p>$${parseFloat(price)*parseInt(quantity)}</p>`

        const tr = document.createElement("div")
        tr.append(div1,td2,div3,td4)

        tbody.append(tr)
        sum += parseFloat(price)*parseInt(quantity)
        q += parseInt(quantity)
    });
    document.querySelector("#chechking > div > p > span").innerText = `$${sum}`
    document.getElementById("totalnumber").innerText = q
    document.getElementById("cartnumber").innerText = q>1?"items":"item"
}

async function changeQuantity(i,id){
    const data = await getdata(`${baseUrl}/bag/${id}`);
    if(data.quantity+i===0){
        deleteData(`${baseUrl}/bag/${id}`)
    }
    else{
        data.quantity += i
        patchData(`${baseUrl}/bag/${id}`,JSON.stringify(data))
    }
    createCart()
}

async function removeItem(id){
    deleteData(`${baseUrl}/bag/${id}`)
}