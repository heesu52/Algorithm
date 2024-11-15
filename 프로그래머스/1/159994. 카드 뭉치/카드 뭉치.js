function solution(cards1, cards2, goal) {
    let count = 0;
    
    for(let i=0; i<goal.length; i++){
        if(cards1[0]===goal[i]){
            cards1.shift();
            count++;
        }
        else if(cards2[0]===goal[i]){
            cards2.shift();
            count++;
        }
        else{
            return "No";
        }
        console.log(count)
    }
    
    return count === goal.length ? "Yes" : "No";
}

//cards1의 단어와 goal의 단어가 일치 => card1에서 단어를 제거 count++
//단어가 일치하지 않을 때 까지 진행 
//단어가 일치하지 않을경우 card2로 넘어가서 동일한 방법으로 진행 
//cards1과 card2로 반복해버리면 연속해서 두번 뺴는걸 진행 x -> goal을 반복