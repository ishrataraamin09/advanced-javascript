const nums = [1, 2, 3, 4, 5, 6, 7, 8] ;
const part = nums.slice(2, 5) ;
console.log(part) ;
console.log(nums) ;

const remove = nums.splice(2, 5 , 77) ; //// array theke jei elements shoraise oi place e 77 k inject kore dibe
console.log(remove) ;
console.log(nums) ;

const together = nums.join(", ") ;
console.log(together) ;