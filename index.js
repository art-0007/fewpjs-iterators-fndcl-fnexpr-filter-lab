// Code your solution here
function findMatching(drivers, name) {
 let result = drivers.filter(n => {
        return n.toLowerCase() === name.toLowerCase();
      }); 

      return result
};

function fuzzyMatch(drivers, char) {
    return drivers.filter(name => {
        if (char.charAt(0) === name.charAt(0)){
            return name
        }
    })          
   };

function matchName(drivers, name) {
    return drivers.filter(finded_name => {
        if (finded_name.name === name){
            return finded_name
        }
    })          
};