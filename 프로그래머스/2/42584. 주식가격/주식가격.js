function solution(prices) {
    let answer = [];
    
    for(let i = 0 ; i<prices.length ; i++){
        let count = 0; //초기화
        
        for(let j = i+1; j<prices.length ; j++){
            count++;
            if(prices[i]>prices[j])
                break;
        }
        answer.push(count);
    }
    return answer;
}