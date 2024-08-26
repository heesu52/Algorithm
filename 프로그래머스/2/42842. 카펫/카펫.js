function solution(brown, yellow) {
    let sum = brown+yellow;
    var result=[];
    
    for(let height=3; height<=brown; height++){
        if(sum%height===0){
            let width = sum / height //brown + yellow = w*h
            
            if((width-2)*(height-2)===yellow) //(w-2)*(h-2) = yellow
                return [width, height]
        }
    }
    return result;
}

