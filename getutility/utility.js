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

export {baseUrl, getdata, postData, deleteData, patchData}