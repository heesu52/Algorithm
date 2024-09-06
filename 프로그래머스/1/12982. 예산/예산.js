function solution(d, budget) {
    d.sort((a,b)=>a-b);
    let count =0;
    let sum=0;
    
    for(let i=0; i<d.length; i++){
        sum += d[i];
        count++;
        
        if(sum>budget)
            count--;
    }
    return count;
}