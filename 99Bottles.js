var output = [];
var count = 99;
var zero = "No";


function bottles(){
    while(count <= 100)
    if(count >= 3){
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer, take one down pass it around, ");
        count--;
        console.log(count + " bottles of beer on the wall.");
    } else if (count === 2){
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer, take one down pass it around, ");
        count--;
        console.log(count + " bottle of beer on the wall.");
    } else if (count === 1){
       console.log(count + " bottle of beer on the wall, " + count + " bottle of beer, take one down pass it around,");
       count --;
       console.log(zero + " bottles of beer on the wall.");
    } else {
       count = zero;
       console.log(zero + " bottles of beer on the wall, " + zero + " bottles of beer," + "  we've taken them down and passed them around; now we're drunk and passed out!");
    
    }
}
