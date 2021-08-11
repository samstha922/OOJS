// const pi = 3.14
// //  pi =20;
// console.log(pi);
// function calcArea(r){
//     // takes the local scope of pi value if u declare const here
//     const pi = 10
//     console.log(pi*r*r);
// }
// calcArea(5);

// var x =10;
// if(x>5){
//     //value of x will be 5 globally
//     // var x =5; 
     
//     let x=5;
//     // x = 6;
//     console.log('inside:'+x);
// }
// console.log('outside:'+x);

// var items = document.getElementsByTagName('li');
// // let solves the issues of var which will be declared globally as below: the value of x is always 4 below.
// // for (var x =0;x<items.length;x++){}

// for (let x =0;x<items.length;x++){
//     items[x].onclick = function(){
//         console.log(x);
//     }
// } 

// var num1 = [1,2,3];
// // spread operator spreads the data into individual components
// var num2=[...num1, 4,5,6];
// console.log(num2)
// function adddNum1(a,b,c){
//     console.log(a+b+c);
// }
// adddNum1(...num1);

// // //------------------------------------------------------
// a way to define method without fxn name 
// var somefxn = function(x){
//     return(`some function with ${x}`);
// }
// smf = somefxn(5);
// console.log(smf);

// // same thing as above with arrow fxn in deprecated form
// var Arrowfxn = y => {return(`arrow fxn with ${y}`)};
// afn = Arrowfxn(6);
// console.log(afn);


// // //------------------------------------------
window.onload=function(){
    
//     // // //backticks renders the data the way it is 
//     // let name = 'ream';     
//     // var temp = `My name is ${name} and age is ${5+3}`;
//     // console.log(temp);
//     // function chops(x){
//     //     window.setInterval(function (){
//     //         if(x>0){
//     //             // overriding the 'name' variable
//     //             // let name="Sam" 
//     //             console.log(`${name} has been chopped ${x} times`);
//     //             x--;
//     //         }
//     //     },1000);
//     // }
//     // chops(5);

//     // // -------defining fxn with objects
    var ninja = {
        name :  'Sajjan',
        chop : function(x){
            //incase if u dont want to use arrow fxn. then define that and use it
            var that = this;
            // //tradtional waay without arrow fxn
            // window.setInterval(function(){
            //     if(x>0){
            //         console.log(`${that.name} has been chopped ${x} times`);  
            //         x--;           
            //     }
            // },1000);

            window.setInterval(()=>{
               if(x>0){
                console.log(`${this.name} has been chopped ${x} times`);  
                x--;
               } 
            },1000)
        },
    }
    //console.log(typeof (ninja));
    ninja.chop(5);
}


// // //-----------------generators----------------
window.onload = function(){
    // * converts to generator; generator needs iterator
    function* gen(){
        var x = yield 'pear';
        var y = yield 'apple'; // yield: pause ; js runs from right to left
        var z = yield 'banana';
        var t1 =yield 'sam';
        return  z+x+y;
    }

    // this is iterator for generator
    var myGen = gen();
    //this is like a play button for the code
    console.log(myGen.next(1));
    console.log(myGen.next(10));
    console.log(myGen.next(30));
    console.log(myGen.next(50));
    // // nothing else to yield below
    console.log(myGen.next(100)); 


    console.log(myGen.next());
}

