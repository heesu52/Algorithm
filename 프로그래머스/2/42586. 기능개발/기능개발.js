function solution(progresses, speeds) {
    let count = 1;
    const day = [];
    
    
   const arr = progresses.map(num=> 100-num);
   
    for(let i=0; i<progresses.length; i++){
        day.push(Math.ceil((arr[i] / speeds[i])));
    }
 
    let target = day[0];
    const result = [];
    
    for(let j=1; j<day.length; j++){
        if(target>=day[j]){
            count++;
        }else{
            result.push(count);
            target = day[j];
            count = 1;
        }
    }
    result.push(count);
    return result;
}