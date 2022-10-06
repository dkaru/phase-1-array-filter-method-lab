// Code your solution here
function findMatching(drivernames, firstname){
 const names =  drivernames.filter(function (item){
return item .toLowerCase() === firstname.toLowerCase ()


 } )
 return names
}
function fuzzyMatch(drivernames, letters,) { 
    const  filteredArrays =drivernames.filter(function (names){
        return names.substring(0,2) === letters 
    } )
    return filteredArrays
}
function matchName(drivernames, names){
    const filteredArrays = drivernames.filter(function (list){
   return  list.name === names;    
    } )
return filteredArrays
}








