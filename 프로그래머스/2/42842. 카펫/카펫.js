function solution(brown, yellow) {
    let sum = brown + yellow;
    
    for(let height = 3 ; height<brown; height++){
        if(sum % height === 0){
            let width = sum / height;
            
             if(yellow === (width-2)*(height-2)){
                 return [width, height];
            }
        }
    }
}

// 가로 * 세로 = brown + yellow
// yellow = 가로-2 * 세로-2