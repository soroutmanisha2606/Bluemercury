import { baseUrl, getdata } from "../getutility/utility.js"



document.getElementById("submit").addEventListener("click",async ()=>{
    const form = document.querySelector("#loginForm>form")
    const {email,password} = form
    // console.log(email.value,firstName.value,lastName.value,password.value)
    if(email.value==="" || password.value===""){
        alert("All fields required.")
    }
    else{
        const data = await getdata(`${baseUrl}/user`)
        const present = data.filter(({email:demail})=>{
            return demail===email.value
        })
        // console.log(present)
        if(present.length===1){
            localStorage.setItem("blueCloneUser",JSON.stringify(present[0]))
            location = "index.html"
        }
        else{
            alert("Invalid Credentails")
        }
    }
})