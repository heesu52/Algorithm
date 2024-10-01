function solution(prices) {
    let answer = [];
    
    for(let i = 0 ; i<prices.length ; i++){
        let count = 0;
        
        for(let j = i+1; j<prices.length ; j++){
            count++;
            if(prices[i]>prices[j])
                break;
        }
        answer.push(count);
    }
    return answer;
}

// 각 주식 가격을 index와 함께 저장
// current에 현재 주식가격을 저장하고 prices와 비교
// current < item 일 경우 count++
// current > item 일경우 더이상 돌지 않고 count를 return
// 다 돌면 count를 return 
