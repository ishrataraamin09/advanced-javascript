const numbers = [3, 4, 5, 6, 7, 8] ;
const output = [] ;
// in simple way to do square
for (let i = 0 ; i < numbers.length ; i++){
    const element = numbers[i] ;
    const result = element * element ;
    output.push(result) ;
}
console.log(output) ;

// using map
function square(element){
    return element * element ;
}
//OR
const square = element => element * element
const result = numbers.map(function(element, index, array){
    return element * element ;
})
console.log(result) ;

const square = x => x * x ;
const total = numbers.map(x => x * x ) ;
console.log(total) ;


//using filter
const bigger = numbers.filter(x => x > 5 ) ;
const even = numbers.filter(x => x % 2 == 0) ;
const odd = numbers.filter(x => x % 2 != 0) ;
console.log(bigger , even , odd) ;

//using FIND
const isThere = numbers.find(x => x > 4) ;
console.log(isThere) ;