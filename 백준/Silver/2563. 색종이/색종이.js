const filePath = `linux` === process.platform ? `dev/stdin` : 'example.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n"); 
 

const solution = () => { 
    let arr = Array.from(Array(100), ()=> Array(100).fill(0));
    const position = input.slice(1).map(input => input.split(" ").map(Number));
    let count = 0;

    position.forEach(index => {
        const [x,y] = index;

        for(let i=x; i<x+10; i++){
            for(let j=y; j<y+10; j++){
                if(arr[i][j] === 1) continue;

                arr[i][j] = 1;
                count++;
            }
        }
    });
    return count;
}
console.log(solution());