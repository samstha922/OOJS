const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // Traditional for function
// for(let i=0; i < companies.length; i++){
//     console.log(companies[i].name)
// }

// //  forEach function
//   companies.forEach(company => console.log(company.name));

// // // Traditional filter
// canDrink = [];
// for (let i = 0; i < ages.length; i++){
//     if(ages[i] >25){
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink);

// // filter function
// const canDrink = ages.filter(age => age > 25)
// console.log(canDrink)

// // // filter companies that lasted atleast ten years
// const longTerm = companies.filter(company => {return company.end - company.start > 10})
// // console.log(longTerm)
// longTerm.forEach(lt => console.log(lt.name));

// // map function : maps the data into new array object pair based on manipulated data
// const companyNames = companies.map(company => company.name)
// console.log(companyNames) 

// // custom array with map
// const testMap = companies.map(company => `${company.name} : [${company.start} - ${company.end}]`)
// console.log(testMap) 

// const ageMap = ages 
//   .map(age => Math.sqrt(age))
//   .map(age => age*2)

// console.log(ageMap);



// sort function
// sort ascending
let sortStart = companies.sort((a,b) => a.start > b.start ? 1: -1)
console.log(sortStart)

// sorting numbers is a bit different; just using ages.sort() will only sort the first digits of the ages 
// sort ascending
let sortedAges = ages.sort((a,b) => a-b)
console.log(sortedAges);

// // // reduce function
// // summing the ages

// let ageSum = 0;
// for (i = 0; i< age.length; i++){
//     ageSum += age[i];
// }
// console.log(ageSum);

// // total initially intialized as 0; age is new var. introduced
// const agesSum = ages.reduce((total,age)=> total+age, 0)
// console.log(agesSum);

// // get total sum year for all companies

// let companyTotal = companies.reduce((total, company)=>total+(company.end - company.start),0)
// console.log(companyTotal);

// // combined methods: double the age, filter age>25, sort ascending and then total the sum
// const ageMultiply = ages
//     .map(age=> age*2)
//     .filter(age=> age <= 30)
//     .sort((a,b)=> a - b)
//     .reduce((total,age)=> total+age, 0)
// console.log(ageMultiply);

//// -------closures
//// ---simple closure: access a var decalared outside from inside a fxn
// const myName='Sam'
// function displayName(){
//   console.log(myName);
// }
// console.log(myName);

// ---function inside a funciton closures: IN js anytime outside of fxn can be accessed inside of the fxn
function outerFxn(outerVar){
  const outer2 = 'HI';
  return function innerFxn(innerVar){
    console.log('outer var:'+ outerVar);
    console.log(`inner var: ${innerVar}`);
    console.log(outer2);
  }
}

var out = outerFxn('outside');
// out();inner var. not defined
console.log(out);
// calling the inner function can be done by code below
out('inside');
// // out.innerFxn('inside') // this is wrong...use above way only

// IIFE... immediately invoked fxn expression; makes var. private... modules came place after IIFE.
(function displayName(myName){
  console.log(myName);
})('sam');

// // JS Destructuring 
const arr = ['a1','a2','a3','a4','a5'];
// u can skip assigning data as below
const[,,camel]= arr
console.log(camel);
// u can use rest parameter with .... to indicate unknown amount of remainder args
// const [a,b,c, ...rest]= arr;
// console.log(b);

// // -------------------Object Destructuring
// const obj ={
//   name:'Sam',
//   grade:'JS',
//   salary: '800000',
//   address:'Toowong'
// }

// const {name: alias,'grade': standard, ...resta} = obj
// console.log(`${alias} and ${standard}`);
// console.log(resta)

// // Nested objs
// const obj2 = {
//   parent:{
//     child: 'saisha'
//   },
// }

// const {parent: {child}} = obj2
// console.log(child);

// // Loops: can use desturcture for loop using 'of'
// const users= [
//   {id:'id1'},
//   {id:'id2'},
//   {id:'id3'}
// ]
// for (const{id} of users){
//   console.log(id);
// }

//---- Destructuring certain properties of objects
const user ={id: '11', username: 'samstha', addr:'Toowong'}

function getInfo({id, username}= user){
  console.log(`id is ${id} and userinfo is ${username}`);
}
getInfo();

// var swapping with destructure
let a ='foo';
let b = 'bar';
// // normal swap
// let temp = a;
// a=b;
// b=temp;
// with destructure
[a,b]= [b,a];

// for...of : array and for ... in : objects loop

const array1 = ['a','b','c','d','e'];
const obj2={
    foo1:'bar1',
    foo2: 'bar2',
    foo3: 'bar3'
}
// for (const v of array1){
//     console.log(v)  // works
// }

// for in loop to loop over objects
for (let key in obj2 ){
  console.log(key +'  '+ obj2[key])
}

// alternative way for above with for...of loop
for(const v of Object.values(obj2)){
  console.log(v);
}

// alternative to using map
