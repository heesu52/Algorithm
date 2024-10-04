function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5], // 1번 수포자
        [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 3번 수포자
    ];

    
    const scores = [0, 0, 0]; // 각 수포자의 점수를 저장할 배열
    const result = []; // 가장 높은 점수를 받은 사람을 저장할 배열
    
    answers.forEach((answer,index) => { //answers 배열의 요소를 for
        patterns.forEach((pattern, i) => { //patterns 배열의 요소를 for(1번, 2번, 3번)
            if(answer === pattern[index % pattern.length]) 
                scores[i]++;
        }) //index % pattern.length는 찍는 방식이 반복되는것을 해결
        //answer = 1, pattern[0%5]=pattern[0]=1 을 비교
        //맞으면 score에 저장
    })
    const Max = Math.max(...scores); //score에서 가장 큰 수 반환
    
    scores.forEach((score,index) => {
        if(score === Max) //만약score과 최대 득점 수가 동일하다면 
            result.push(index+1); //result에 해당 점수의 수포자를 push
    });
    
    return result;
    
}

//1번: 1,2,3,4,5
//2번: 2,1, 2,3, 2,4, 2,5
//3번: 33,11,22,44,55 