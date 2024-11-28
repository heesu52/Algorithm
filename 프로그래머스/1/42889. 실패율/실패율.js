function solution(N, stages) {
    var fail = [];
    
    for(let i=1; i<=N; i++){
       let player = 0;
        
        stages.map(index =>{
            if(index===i)
                player++;
        })
        fail.push([i, player/stages.length]); 
        stages = stages.filter((index) => index>i);
    }
    
    fail.sort((a,b)=>b[1]-a[1]);
    return fail.map(index => index[0]);
}
