const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 입력 부분 수정
 
const solution = () => { 
const score = input[1].split(' ').map(Number);
const max = Math.max(...score);
const newArr = score.map(x => x / max * 100);

let num = 0;
for (let i = 0; i < newArr.length; i++) {
    num += newArr[i]
}
const average = num / newArr.length;
console.log(average);
}
 
solution();