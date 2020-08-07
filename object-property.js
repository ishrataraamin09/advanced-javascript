const students = [
    {id: 21 , name: 'Ishrat'} ,
    {id: 23 , name: 'Abonty'} ,
    {id: 31 , name: 'Bushra'} ,
    {id: 71 , name: 'Sayma'} 
] ;

const output = [] ;
for (let i = 0; i<students.length ; i++){
   const element = students[i] ;
   const result = element.name ;
   output.push(result) ;
}
console.log(output) ;

const names = students.map( s => s.name) ;
const ids = students.map( s => s.id) ;
const ID = students.filter( s => s.id > 30 ) ;
console.log(names , ids , ID) ;