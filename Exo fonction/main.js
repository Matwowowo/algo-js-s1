var a = "jean"
var b = "paul" 
var result 

function checkname (nameA, nameB) {

    if (nameA === nameB){
        return true
    } else {
        return false
    }

}

result = checkname(a,b)

console.log(result)