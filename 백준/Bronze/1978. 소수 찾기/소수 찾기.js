const filePath = `linux` === process.platform ? `dev/stdin` : 'example.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n"); 
 

const solution = () => { 
    const N = Number(input[0]);
    const arr = input[1].split(" ").map(Number);
    let count = 0;

    for(let i=0; i<N; i++){
        if(arr[i]===1) continue;
        let isPrime = true;
        
        for(let j=2; j<=Math.sqrt(arr[i]); j++){
            if(arr[i] % j ===0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) count++;
    }
    return count;

}
console.log(solution());
