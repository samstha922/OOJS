
const sum = (n1,n2) => {
    return n1+n2
}

const multiply = (n1,n2) => {
    return n1+n2
}

const divide = (n1,n2) => {
    return n1/n2
}

const operation = (a,b, operator) => {
    return operator(a,b);

} 
try{
    console.log(`The result is : ${operation(5,2,multiply)}`);
}
catch(err){
    console.log('Invalid operation:'+err);
}