const filePath = `linux` === process.platform ? `dev/stdin` : 'example.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n"); 
 

const solution = () => { 
    const [N,K] = input[0].split(" ").map(Number);
    let count = 0;
    let arr = Array(N+1).fill(0);

    for(let i=2; i<=N; i++){
        arr[i] = i; //1번
    }
    
    for(let i=2; i<=N; i++){
        if(arr[i]===0) continue;
        let p = arr[i]; //2번

        for(let j=p; j<=N; j+=p){
           if(arr[j]!==0){
            count++;
            if(count===K){
                return arr[j];
            }
           }
           arr[j]=0; //3번
        }
    }
}
console.log(solution());