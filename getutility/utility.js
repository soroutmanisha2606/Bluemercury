const baseUrl = `http://localhost:3000`

async function getdata(url){
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
}

async function postData(url,datas){
    try {
        const res = await fetch(url,{
            method: 'POST',
            body:datas,
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await res.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function deleteData(url){
    try {
        const res = await fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        // console.log(res)
        const data = await res.json()
        // console.log(data)
        return data 
    } catch (error) {
        console.log(error)
    }
}

async function patchData(url,datas){
    try {

        const res = await fetch(url,{
            method: 'PATCH',
            body:datas,
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await res.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}


async function changeQuantity(i,id){
    const data = JSON.parse(localStorage.getItem("cloneBag")) || []
    let index 
    const present = data.filter(({id : bag_id},ind)=>{
        if(id===bag_id){
            index = ind
            return true
        }
        return false
    })
    if(present.length>0){
        if(present[0].quantity+i===0){
            data.splice(index,1)
        }
        else{
            present[0].quantity +=i
        }
    }
    else{
        const product = await getdata(`${baseUrl}/product/${id}`)
        product.quantity = 1
        data.push(product)
    }
    localStorage.setItem("cloneBag",JSON.stringify(data))
}

async function removeItem(id){
    const data = JSON.parse(localStorage.getItem("cloneBag")) || []
    let index 
    const present = data.filter(({id : bag_id},ind)=>{
        if(id===bag_id){
            index = ind
            return true
        }
        return false
    })
    data.splice(index,1)
    localStorage.setItem("cloneBag",JSON.stringify(data))
}

export {baseUrl, getdata, postData, deleteData, patchData, changeQuantity, removeItem}