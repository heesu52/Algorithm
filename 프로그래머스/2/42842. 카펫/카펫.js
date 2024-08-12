function solution(brown, yellow) {
    var answer = [];
    let sum = yellow+brown;
    
    for(let height=3; height<=brown; height++){ //높이가 최소 3이상
        if(sum%height===0){
            let weight = sum / height
            
        // 공식 : 갈색과 노란색의 합을 임의의 높이로 나눌 때 나오는 높이와 가로 값을 토대로
     // (가로-2) * (높이-2) = 노란색 격자 수 -> 현재 높이, 가로의 길이
        if((height-2)*(weight-2) === yellow)
            return [weight,height]
        }    
    }
    return answer;
}
    
     

