
raptors = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"]

// print "lowercase" if the string is all lowercase
// print "long" if the string is more than 4 characters
// print "long and lowercase" if the string's length is more than 4 characters and it's all lowercase
// otherwise print the string itself

function nbaChampion(nba){
    for(i=0; i < nba.length; i++){
        if (nba[i] == nba[i].toLowerCase() && nba[i].length > 4){
            console.log('long and lowercase'); 
        } else if (
            nba[i].length > 4
        ){
            console.log('long');         
        } else if (
            nba[i] == nba[i].toLowerCase()
        ){
            console.log('lowercase');
        } else {
            console.log( `${nba[i]}`) 
        }
    }
}

nbaChampion(raptors)

// long
// lowercase
// lowercase
// lowercase
// long
// lowercase
// EX
// EST
// long and lowercase