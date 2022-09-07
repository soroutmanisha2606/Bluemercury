import { baseUrl, getdata, postData } from "../getutility/utility.js"



document.getElementById("submit").addEventListener("click",async ()=>{
    const form = document.querySelector("#createForm>form")
    const {email,firstName,lastName,password} = form
    // console.log(email.value,firstName.value,lastName.value,password.value)
    if(email.value==="" || firstName.value==="" || lastName.value==="" || password.value===""){
        alert("All fields required.")
    }
    else{
        const data = await getdata(`${baseUrl}/user`)
        const present = data.filter(({email:demail})=>{
            return demail===email.value
        })
        // console.log(present)
        if(present.length>0){
            alert("Email already exist.")
        }
        else{
            const user = {
                email: email.value,
                firstName: firstName.value,
                lastName: lastName.value,
                password: password.value
            }
            console.log(user)
            const res = await postData(`${baseUrl}/user`,JSON.stringify(user))
            location = "login.html"
        }
    }
})