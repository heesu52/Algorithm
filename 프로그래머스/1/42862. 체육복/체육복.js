function solution(n, lost, reserve) {
    
    // 여벌을 가져왔는데 분실한 학생을 제거
    let arrlost = lost.filter(l => !reserve.includes(l)).sort((a,b)=>a-b); 
    let arrreserve = reserve.filter(r => !lost.includes(r)).sort((a,b)=>a-b); 
    
    //최소 학생 수 
    let answer = n-arrlost.length;
    
    for(let i=0; i<arrlost.length; i++){
       for(let j=0; j<arrreserve.length; j++){
           if(arrlost[i]-1 === arrreserve[j] || arrlost[i]+1 === arrreserve[j]){
               answer++;
               arrreserve[j]=-1; // 빌려준 학생 제거
               break; // 만족했으면 더 돌 필요가 없음
           }
       }
    }
    return answer;
}

//최소 학생 수 = n-잃어버린 학생 수
//최대 = n 
//여벌을 가져왔는데 잃어버린 학생 = lost와 reserve 모두 존재
//여벌분을 잃어버렸으니 본인의 체육복은 본인이 입어야 하므로 lost와 reserve에서 모두 제거