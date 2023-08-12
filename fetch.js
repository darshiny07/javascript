url=("https://jsonplaceholder.typicode.com/posts")


// // // get method
function getMethod(){
    fetch(url,{
        method: 'GET',
        headers:{
            "content-type": "application/json"
        }
    })
    .then((res)=> (res.json()))
    .then((data)=>console.log(data))
    .catch((error)=> console.log(error));
}
    getMethod()

    // post method
    
function postMethod(){
    let given={
      
    "userId": 55,
    "id": 99,
    "title": "be gratefull",
    "body": "something fishey"
    }

fetch("https://jsonplaceholder.typicode.com/posts ",{
    method:'POST',
    body:JSON.stringify(given),
    headers:{
        "content-type": "application/json"
    }
})
.then((res)=>(res.json()))
.then((data)=>console.log(data))
.catch((error)=> console.log(error));
}
postMethod()



// function deleteMethod(){
//     fetch(url,"/15",{
//         method: 'DELETE',
//         headers:{
//             "content-type": "application/json"
//         }
//     })
//     .then((res)=> (res.json()))
//     .then((data)=>console.log())
//     .catch((error)=> console.log(error));
// }
//     deleteMethod()
//     getMethod()

