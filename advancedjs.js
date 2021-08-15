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



// // sort function
// let sortStart = companies.sort((a,b) => a.start > b.start ? 1: -1)
// console.log(sortStart)

// // sorting numbers is a bit different; just using ages.sort() will only sort the first digits of the ages 
// let sortedAges = ages.sort((a,b) => a-b)
// console.log(sortedAges);

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

// combined methods: double the age, filter age>25, sort ascending and then total the sum
const ageMultiply = ages
    .map(age=> age*2)
    .filter(age=> age <= 30)
    .sort((a,b)=> a - b)
    .reduce((total,age)=> total+age, 0)
console.log(ageMultiply);