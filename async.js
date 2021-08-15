// // //  HTTP request: make request from another server API endpoints;
// // // play with API using JSONAPI placeholder app
// const request = new XMLHttpRequest();
// // // check the ready states; acc. to MDN guide 0: unsent, 1: opened, 2: header received; 3: loading ,4: done
// request.addEventListener('readystatechange',()=>{
//     // console.log(request,request.readyState);
//     if (request.readyState == 4 && request.status == 200){
//         // fetch all the response data
//         console.log(request.responseText);
//     }else if(request.readyState === 4){
//         console.log('Couldn\'t fetch data');
//     }
// });
// // create request
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// // send request
// request.send();

// const { reject } = require("async");

// // API request without callback function
// const getToDos= ()=>{
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange',()=>{
//         // console.log(request,request.readyState);
//         if (request.readyState == 4 && request.status == 200){
//             // fetch all the response data
//             console.log(request.responseText);
//         }else if(request.readyState === 4){
//             console.log('Couldn\'t fetch data');
//         }
//     });
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
//     request.send();
// }

// // make request manually 
// getToDos();
// getToDos();


// // Callback fxns
// const getRequest = (callback) => {
//     // xmlhttprequest built in to js
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange',()=>{
//         // console.log(request);
//         if(request.readyState === 4 && request.status == 200 ){
//             // console.log(request.responseText)

//             // convert JSON string to JS objects
//             const data = JSON.parse(request.responseText)

//             callback(undefined, data)
//         }
//         else if(request. readyState === 4){
//             // console.log('No data found')
//             callback('couldn\'t fetch data', undefined)
//         }
//     })
//     //setting up request parameters 
//     request.open('GET','https://jsonplaceholder.typicode.com/possts');
    
//     // // local json file
//     // request.open('GET','data.json');  

//     // send the request 
//     request.send();
// }

// // check if callback blocks the code
// console.log(1);
// console.log(2);

// // convention is we pass error first and then data later
// getRequest((err,data)=>{
//     console.log('callback fired');
//     if (err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
    
// });

// console.log(3);
// console.log(4);

// // // callback hell
// const getToDos = (resource, callback)=>{
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState == 4 && request.status == 200 ){
//             const data = JSON.parse(request.responseText)
//             callback(undefined, data)
//         }else if(request.readyState === 4){
//             callback('couldn\'t fetch data', undefined)
//         }
//     })

//     request.open('GET', resource);
//     request.send();
// }

// // ----nested callbacks ; solution is using promises
// getToDos('json/data1.json',(err,data)=>{
//     console.log(data)
//     getToDos('json/data2.json',(err,data)=>{
//         console.log(data);
//         getToDos('json/data3.json',(err,data)=>{
//             console.log(data);
//         })
//     })
// })


// // -----promise example
// const getToDos = (resource, callback)=>{
//     return new Promise((resolve,reject)=>{

//         const request = new XMLHttpRequest();
    
//         request.addEventListener('readystatechange',()=>{
//             if(request.readyState == 4 && request.status == 200 ){
//                 const data = JSON.parse(request.responseText)
//                 resolve(data);
//             }else if(request.readyState === 4){
//                 reject('error getting the data');
//             }
//         })
//         request.open('GET', resource);
//         request.send();
//     })
// }

// // getToDos('json/data1.json').then(data=>{
// //     console.log('promise resolved', data);
// // }).catch(err=>{
// //     console.log('promise rejected', err);
// // })

// // -----chaining promises

// getToDos('json/data1.json').then(data=>{
//     console.log('promise resolved', data);
//     return getToDos('json/data2.json');
// }).then(data=>{
//     console.log('promise 2 resolved', data)
//     return getToDos('json/data3.json');
// }).then(data =>{
//     console.log('promise 3 resolved', data);
// }).catch(err=>{
//     console.log('promise rejected:', err);
// })


// // ----FETCH API
// fetch('todos/data1.json').then((response)=>{
//     console.log('resolved',response);
//     return responseText.JSON();
// }).then(data => {
//     console.log(data);
// }).catch((err)=>{
//     console.log('rejected',err);
// })


// // ---ASYNC AWAIT
getTodos = async()=>{
    const response = await fetch('json/dstssa1.json')
    if (response.status !== 200){
        // custom error message that we made
        throw new Error('Page not found');
    }
    const data = await response.json();
    return data;
}

getTodos()
    .then(data => console.log('resolved',data))
    .catch(err => console.log('rejected:'+ err));