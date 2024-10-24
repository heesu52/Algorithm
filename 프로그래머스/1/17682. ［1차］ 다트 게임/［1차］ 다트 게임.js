function solution(dartResult) {
    let sum = [];
    let currentScore = "";
    let score = 0;
    
    for(let i=0; i<dartResult.length; i++){
        if(!isNaN(dartResult[i])){
            currentScore += dartResult[i];
        }
        else if(dartResult[i]==="S"){ //현재점수**1
            sum.push(Number(currentScore)**1);
            currentScore="";
        }
        else if(dartResult[i]==="D"){ //현재점수**2
            sum.push(Number(currentScore)**2);
            currentScore="";
        }
        else if(dartResult[i]==="T"){ //현재점수**3
            sum.push(Number(currentScore)**3);
            currentScore="";
        }
        else if(dartResult[i]==="*"){ //현재점수x2
            sum[sum.length-1] *=2;
            if(sum.length>1){ //*이 첫번째로 온게 아닐 경우
                sum[sum.length-2] *=2; // 직전점수x2
            }
        }
        else if(dartResult[i]==="#"){
            sum[sum.length-1] *=(-1);
        }
    }
    for(let j=0; j<sum.length; j++){
        score +=sum[j];
    }
    return score;
}

//S=*, D=**, T=***
// 점수의 합계 저장할 배열 = score[];
// isNumber() 후 true이면 continue, false면 문자열 비교하여 계산
// count에 담겨있는 점수를 꺼내서 계산 후 다시 score에 집어넣기
// 계산 후 score배열 for문 돌려서 점수계산하기