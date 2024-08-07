function solution(N, stages) {
    var fail=[];
    var answer=[];
    let num2= stages.length
    
    for(let i=1; i<=N; i++){ //1단계부터 있으므로 i=1
        let num1 = stages.filter(v=> v===i).length; //단계별로 통과하지 못한 사용자
        fail.push([i,num1/num2]);
        num2  = num2 - num1;
    }
    answer = fail.sort((a,b)=>b[1]-a[1]) //실패율을 기준으로 정렬
    return answer.map((fail)=>fail[0]); //스테이지를 기준으로 answer 출력
}