function solution(answers) {
    const math1 = [1,2,3,4,5];
    const math2 = [2,1,2,3,2,4,2,5];
    const math3 = [3,3,1,1,2,2,4,4,5,5];
    
    const count = [0,0,0];
    for(let i=0; i<answers.length; i++){
        if(answers[i]===math1[i % math1.length]) count[0]++;
        if(answers[i]===math2[i % math2.length]) count[1]++;
        if(answers[i]===math3[i % math3.length]) count[2]++;
    }
    
    const result = [];
    const max = Math.max(count[0],count[1],count[2]);
    
    for(let j=0; j<count.length; j++){
        if(max===count[j])
            result.push(j+1);
    }
    return result;
}

// 수포자들의 패턴을 넣을 pattern배열 
// 맞춘 점수를 count할 count 배열
// 가장 높은 점수를 받은 사람을 넣을 result 배열
// answer과 pattern을 반복하여 맞는 문제 수 만큼 count++ -> sccore에 push
// score의 점수를 비교하고 더 큰 점수의 인덱스를 result에 넣기