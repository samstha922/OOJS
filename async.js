// //  HTTP request: make request from another server API endpoints;
// // play with API using JSONAPI placeholder app
const request = new XMLHttpRequest();
// check the ready states; acc. to MDN guide 0: unsent, 1: opened, 2: header received; 3: loading ,4: done
request.addEventListener('readystatechange',()=>{
    console.log(request,request.readyState);
    if (request.readyState == 4){
        // fetch all the response data
        console.log(request.responseText);
    }
});
// create request
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// send request
request.send();


// const getRequest = (callback) => {
//     // xmlhttprequest built in to js
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange',()=>{
//         // console.log(request);
//         if(request.readyState === 4 && request.status == 200 ){
//             // console.log(request.responseText)
//             callback(undefined, request.responseText)
//         }
//         else if(request. readyState === 4){
//             // console.log('No data found')
//             callback('couldn\'t fetch data', undefined)
//         }
//     })
//     //setting up request parameters 
//     request.open('GET','https://jsonplaceholder.typicode.com/posts');
//     // send the request
//     request.send();
// }

// getRequest((err,data)=>{
//     if (err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
    
// });


