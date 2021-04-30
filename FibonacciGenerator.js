function fibonacciGenerator(n){
var output = [];

if (n === 1) {
    output = [0];
} 
else if (n === 2) {
    output = [0, 1];
}
else {
 output = [0, 1]; 

for (var i = 2; i < n; i++){
var number = output.length;
output.push(output[number - 2] + output[number - 1]);

}
}

return output;

} 

output = fibonacciGenerator(enter number);
console.log(output);