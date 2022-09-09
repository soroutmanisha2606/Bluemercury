import { baseUrl, getdata, changeQuantity } from "../getutility/utility.js";



function Start(){
    ProductsData();
}

Start();


async function ProductsData(){
    
    try{
        console.log("i am in");
       
        var data= await getdata(`${baseUrl}/product`);
        const sbrand = localStorage.getItem("cloneBrand")
        const scategory = localStorage.getItem("cloneCategory")
        const ssearchVal = localStorage.getItem("searchVal")
        if(sbrand){
            data = data.filter(({brand})=>{
                return brand ===sbrand
            })
        }

        if(scategory){
            data = data.filter(({category,product_type})=>{
                return category===scategory || scategory === product_type
            })
        }

        if(ssearchVal){
            data = data.filter(({brand,name,category,product_type})=>{
                return brand===ssearchVal || name===ssearchVal || category===ssearchVal || product_type===ssearchVal
              })
        }
        appendData(data);
        
    }
    catch(err){
        console.log("err",err);
    }
}




// Main VAR Do Not Change
let current_page=1;
let rows=12;
var card=document.getElementById("rc-3");
// Main VAR Do Not Change


// Append Data Main Source
async function  appendData(data){
    console.log("in append function");
   
    
   
    
    DispalyPAge(data,card,rows,current_page);
    



    var CategorySelect=document.getElementById("CategorySelect").addEventListener("click",function(){
        SortByProductsCategory(data,card,rows,current_page);
    })
    var brandSelect=document.getElementById("BrandSelect").addEventListener("click",function(){
        SortByProductsBrand_Type(data,card,rows,current_page);
    });
    var ProductSelect=document.getElementById("ProductSelect").addEventListener("click",function(){
        SortByProductsProduct_Type(data,card,rows,current_page);
    });
     
    var Brush_tools=document.getElementById("Brushes&Tools").addEventListener("click",function(){
        
        
        ProductsBrush_tools(data,card,rows,current_page);
    });
    
    var eyes=document.getElementById("Eyes").addEventListener("click",function(){
        
        ProductsEyes(data,card,rows,current_page);
    });
}

// When Click on Brush & Tools
function ProductsBrush_tools(data,card,rows,current_page){
    var Brushes=[];
    for(let i=0;i<data.length; i++){
        let elm=data[i];

        if(elm.product_type=="blush"){
            Brushes.push(data[i]);
             }
    }
    DispalyPAge(Brushes,card,rows,current_page);

}

// When Click on eyes option
function ProductsEyes(data,card,rows,current_page){
    var eyes=[];
    for(let i=0;i<data.length; i++){
        let elm=data[i];

        if(elm.product_type=="eyeshadow"){
            eyes.push(data[i]);
             }
    }
    DispalyPAge(eyes,card,rows,current_page);

}


// Sort By Price Filters Start
function SortPricelowTohigh(paginatedItems){
    var eitherSort = (paginatedItems = []) => {
        const sorter = (a, b) => {
           return +a.price - +b.price;
        };
        paginatedItems.sort(sorter);
     };
     eitherSort(paginatedItems);
    
     return paginatedItems;
}

function SortPricehighTolow(paginatedItems){
    var eitherSort = (paginatedItems = []) => {
        const sorter = (a, b) => {
           return +b.price - +a.price;
        };
        paginatedItems.sort(sorter);
     };
     eitherSort(paginatedItems);
    //  console.log(paginatedItems);
     return paginatedItems;
}
// Sort By Price Filters End



// Sort By category
function SortByProductsCategory(data,card,rows,current_page){
   
        
        var CategoryValue=document.getElementById("CategorySelect").value;
        // console.log(CategoryValue);
        var CategoryBaseDatapencil=[];
        var CategoryBaseDataliquid=[];
        var CategoryBaseDataconcealer=[];
        var CategoryBaseDatalipstick=[];
    
        
        for(let i=0; i<data.length; i++){
            let elm=data[i];

            if(elm.category=="pencil"){
                CategoryBaseDatapencil.push(data[i]);
               }
             if(elm.category=="liquid"){
                CategoryBaseDataliquid.push(data[i]);
            }
             if(elm.category=="concealer"){
                CategoryBaseDataconcealer.push(data[i]);
            }
            if(elm.category=="lipstick"){
                CategoryBaseDatalipstick.push(data[i]);
            }
           }
        //    console.log("Pencil Cat Data",CategoryBaseDatapencil);
           
        //    DispalyPAge(CategoryBaseDatapencil,card,rows,current_page);
        if(CategoryValue=="pencil"){
            
            DispalyPAge(CategoryBaseDatapencil,card,rows,current_page);
           }
        else if(CategoryValue=="liquid"){
          
            DispalyPAge(CategoryBaseDataliquid,card,rows,current_page);
        }
        else if(CategoryValue=="concealer"){
           
            DispalyPAge(CategoryBaseDataconcealer,card,rows,current_page);
        }
        else if(CategoryValue=="lipstick"){
           
            DispalyPAge(CategoryBaseDatalipstick,card,rows,current_page);
        }
        
}


// Sort By PRODUCT TYPE
function SortByProductsProduct_Type(data,card,rows,current_page){
   
    
    var CategoryValue=document.getElementById("ProductSelect").value;
    
    // console.log(CategoryValue);
    var ProductBaseDataBlush=[];
    var ProductBaseDataBronzer=[];
    var ProductBaseDataEyebrow=[];
    var ProductBaseDataEyeliner=[];
    var ProductBaseDataEyeshadow=[];
    var ProductBaseDataFoundation=[];
    var ProductBaseDataLipliner=[];
    var ProductBaseDataMascara=[];
    var ProductBaseDataLipstick=[];
    
    for(let i=0; i<data.length; i++){
        let elm=data[i];

        if(elm.product_type=="blush"){
            ProductBaseDataBlush.push(data[i]);
            
           }
         if(elm.product_type=="bronzer"){
            ProductBaseDataBronzer.push(data[i]);
        }
         if(elm.product_type=="eyebrow"){
            ProductBaseDataEyebrow.push(data[i]);
        }
        if(elm.product_type=="eyeliner"){
            ProductBaseDataEyeliner.push(data[i]);
        }
        if(elm.product_type=="eyeshadow"){
            ProductBaseDataEyeshadow.push(data[i]);
        }
        if(elm.product_type=="foundation"){
            ProductBaseDataFoundation.push(data[i]);
        }
        if(elm.product_type=="lip_liner"){
            ProductBaseDataLipliner.push(data[i]);
        }
        if(elm.product_type=="lipstick"){
            ProductBaseDataLipstick.push(data[i]);
        }
        if(elm.product_type=="mascara"){
            ProductBaseDataMascara.push(data[i]);
        }
       }
    //    console.log("Pencil Cat Data",CategoryBaseDatapencil);
       
    //    DispalyPAge(CategoryBaseDatapencil,card,rows,current_page);
    if(CategoryValue=="Blush"){
        
        DispalyPAge(ProductBaseDataBlush,card,rows,current_page);
       }
    else if(CategoryValue=="Bronzer"){
        
        DispalyPAge(ProductBaseDataBronzer,card,rows,current_page);
    }
    else if(CategoryValue=="Eyebrow"){
       
        DispalyPAge(ProductBaseDataEyebrow,card,rows,current_page);
    }
    else if(CategoryValue=="Eyeliner"){
        
        DispalyPAge(ProductBaseDataEyeliner,card,rows,current_page);
    }
    else if(CategoryValue=="Eyeshadow"){
        
        DispalyPAge(ProductBaseDataEyeshadow,card,rows,current_page);
    }
    else if(CategoryValue=="Lip liner"){
        
        DispalyPAge(ProductBaseDataLipliner,card,rows,current_page);
    }
    else if(CategoryValue=="Foundation"){
       
        DispalyPAge(ProductBaseDataFoundation,card,rows,current_page);
    }
    else if(CategoryValue=="Lipstick"){
      
        DispalyPAge(ProductBaseDataLipstick,card,rows,current_page);
    }
    else if(CategoryValue=="Mascara"){
       
        DispalyPAge(ProductBaseDataMascara,card,rows,current_page);
    }
}

// Sort By Brand Type
function SortByProductsBrand_Type(data,card,rows,current_page){
   
    
    var CategoryValue=document.getElementById("BrandSelect").value;
    // console.log(CategoryValue);
    var BrandBaseDatamaybelline=[];
    var BrandBaseDatamilani=[];
    var BrandBaseDatasmashbox=[];
    var BrandBaseDatastila=[];
    var BrandBaseDatasuncoat=[];
    var BrandBaseDatacargocosmetics=[];
    var BrandBaseDatamisa=[];
    var BrandBaseDatanyx=[];
    
    for(let i=0; i<data.length; i++){
        let elm=data[i];

        if(elm.brand=="maybelline"){
            BrandBaseDatamaybelline.push(data[i]);
           }
         if(elm.brand=="milani"){
            BrandBaseDatamilani.push(data[i]);
        }
         if(elm.brand=="smashbox"){
            BrandBaseDatasmashbox.push(data[i]);
        }
        if(elm.brand=="stila"){
            BrandBaseDatastila.push(data[i]);
        }
        if(elm.brand=="suncoat"){
            BrandBaseDatasuncoat.push(data[i]);
        }
        if(elm.brand=="cargo cosmetics"){
            BrandBaseDatacargocosmetics.push(data[i]);
        }
        if(elm.brand=="misa"){
            BrandBaseDatamisa.push(data[i]);
        }
        if(elm.brand=="nyx"){
            BrandBaseDatanyx.push(data[i]);
        }
       }
    //    console.log("Pencil Cat Data",CategoryBaseDatapencil);
       
    //    DispalyPAge(CategoryBaseDatapencil,card,rows,current_page);
    if(CategoryValue=="maybelline"){
       
        DispalyPAge(BrandBaseDatamaybelline,card,rows,current_page);
       }
    else if(CategoryValue=="milani"){
       
        DispalyPAge(BrandBaseDatamilani,card,rows,current_page);
    }
    else if(CategoryValue=="smashbox"){
        
        DispalyPAge(BrandBaseDatasmashbox,card,rows,current_page);
    }
    else if(CategoryValue=="stila"){
        
        DispalyPAge(BrandBaseDatastila,card,rows,current_page);
    }
    else if(CategoryValue=="suncoat"){
        
        DispalyPAge(BrandBaseDatasuncoat,card,rows,current_page);
    }
    else if(CategoryValue=="cargo cosmetics"){
      
        DispalyPAge(BrandBaseDatacargocosmetics,card,rows,current_page);
    }
    else if(CategoryValue=="misa"){
       
        DispalyPAge(BrandBaseDatamisa,card,rows,current_page);
    }
    else if(CategoryValue=="nyx"){
        
        DispalyPAge(BrandBaseDatanyx,card,rows,current_page);
    }
}





// Dispaly Data On Page
async function DispalyPAge(items,wrapper,rows,page){
    wrapper.innerHTML="";
    page--;

    let Start=rows * page;
    let end=Start+rows;

    let paginatedItems=items.slice(Start,end);
   

    cardDataADD(paginatedItems);


// Sorting Part End

    document.getElementById("sortBy").addEventListener("click",function(){
 
        var sortBy=document.getElementById("sortBy").value;
        //  console.log(sortBy);
         if(sortBy=="Price, Low to High"){
            
            let sortData=SortPricelowTohigh(paginatedItems);
            cardDataADD(sortData);
          }
    
          if(sortBy=="Price, High to Low"){
           
            let sortData=SortPricehighTolow(paginatedItems);
            cardDataADD(sortData);
          }

          if(sortBy=="New Arrivals"){
           
            let sortData=paginatedItems;
            cardDataADD(sortData);
          }
    })
   
// Sorting Part End


// Showing Total Items
var shoeTotalres=document.getElementById("shoeTotalres");
shoeTotalres.innerText=`Total Result :${items.length}`;

// Pagination Function Calling

var pagination_element=document.getElementById("PaginationPart");
    setupPagination(items,pagination_element,rows);

    

function cardDataADD(paginatedItems){
    let childString=``;
    for(let i=0; i<paginatedItems.length; i++){
        let elm=paginatedItems[i];
        // Object.entries(elm.price);
        const div = document.createElement("div")
        div.setAttribute("class","rc3-card")
        div.innerHTML = `<div class="rc3-card-d1"  >
        <img src=${elm.api_featured_image} class="rc3-img" alt=""> 
        </div>
        <div class="rc3-card-d2">
        <span id="p1name">${elm.name}</span><br>
        <span id="p2type">${elm.product_type}</span><br>
        <p id="p3price">Price:-$${elm.price}</p><br>
        </div>
        <button class="button-87" role="button" id="addTocartbtn" >Add to cart</button>`
         
        div.addEventListener("click",()=>{
            console.log(elm.id)
            localStorage.setItem("paticularProduct",elm.id)
            location = "paticularProduct.html"
        })

        // childString +=`<div class="rc3-card" id = ${elm.id}>
        //     <div class="rc3-card-d1"  >
        //     <img src=${elm.api_featured_image} class="rc3-img" alt=""> 
        //     </div>
        //     <div class="rc3-card-d2">
        //     <span id="p1name">${elm.name}</span><br>
        //     <span id="p2type">${elm.product_type}</span><br>
        //     <p id="p3price">Price:-$${elm.price}</p><br>
        //     </div>
            
        //     <button class="button-87" role="button" id="addTocartbtn" >Add to cart</button>
        //     </div>
        //     `

            // wrapper.innerHTML=childString;
            wrapper.append(div)
             
           
    }

    
}
    

   


//    Storing name id in local storage after click on button

    let btns = document.getElementsByClassName("button-87");

    for (var i = 0; i < btns.length; i++) {
        let elm=paginatedItems[i];
        btns[i].addEventListener("click", function () {
			console.log("clicked");
                changeQuantity(1,elm.id)
        });
    }



}

// Pagination function Part 
async function setupPagination(items,wrapper,rows_per_page){
    wrapper.innerHTML="";
    let page_count=Math.ceil(items.length / rows_per_page);
    for(let i=1; i<page_count +1; i++){
        let btn=PaginationButton(i,items);
        wrapper.appendChild(btn);
    }
}


function PaginationButton(page,items){
   
    
    let button=document.createElement("button");
    button.innerText=page;
     
    if(current_page==page) button.classList.add('active');

    button.addEventListener("click",function(){
        current_page=page;
        DispalyPAge(items,card,rows,current_page);
        
        let current_btn=document.querySelector("#PaginationPart button.active");
        current_btn.classList.remove('active');
        button.classList.add('active');
        
    })
    return button;
}


// Dispaly Data for Multipel Filter
 
