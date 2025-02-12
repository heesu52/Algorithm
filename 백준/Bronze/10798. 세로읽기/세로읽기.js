const filePath = `linux` === process.platform ? `dev/stdin` : 'example.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n"); 
 

const solution = () => { 
    let result = "";
    const Maxlength = Math.max(...input.map((i)=>i.length));

    for(let i=0; i<Maxlength; i++){
        for(let j=0; j<input.length; j++){
            if(input[j][i]===undefined) continue;
            result += input[j][i];
        }
    }
    return result;
}
console.log(solution());
