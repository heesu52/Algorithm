function solution(citations) {
    citations.sort((a,b)=>b-a);
    const hIndex = [];
    
    for(let i=0; i<citations.length; i++){
        let a = citations[i];
        let b = i+1;
        
        if(a<b)
            hIndex.push(a)
        else
            hIndex.push(b);
    }
    hIndex.sort((a,b)=>b-a);
    return hIndex[0];
}

//논문 n편 증, a번 이상 인용된 논문이 b편 이상이면 a 와 b중 작은 값이 hIndex 값

//내림차순으로 정렬
//citations[i]번 이상 인용된 논문은 i+1번 
//h-index는 citations[i]와 i+1중 작은 값
// 이 h-index값중 가장 큰 값을 return
//
//