const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n"); 
 
const solution = () => { 
const word = input[0];
const num = Number(input[1]);

console.log(word[num-1]);
}
 
solution();