function solution(progresses, speeds) {
    let count = 1;
    const day = progresses.map((num, index)=> Math.ceil((100-num)/speeds[index]));
 
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