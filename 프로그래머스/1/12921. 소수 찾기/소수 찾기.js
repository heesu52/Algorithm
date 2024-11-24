function solution(n) {
    const prime = []; //소수를 담을 배열
    const arr = Array(n).fill(0); //n크기의 배열을 0으로 채우기
    
    for(let i=2; i<=n; i++){ //arr을 주어진 수까지 모두 채우기
        arr[i] = i;    
    }
    
    for(let i=2; i<=n; i++){
        if(arr[i]===0) continue; //0,1은 패스
        prime.push(i); // 지우지 않은 수 중 가장 작은 수는 소수
        arr[i]=0; // arr에서는 0으로 변환 -> 중복방지
        
        for(let j=i*2; j<=n; j +=i){
            if(arr[j]===0) continue;
            arr[j]=0; //가장 작은수 의 배수를 모두 지움
        }
    }

    return prime.length;
}
// 2부터 N까지 모든 정수를 적는다.
// 아직 지우지 않은 수 중 가장 작은 수를 찾는다. 이것을 P라고 하고, 이 수는 소수이다.
// P를 지우고, 아직 지우지 않은 P의 배수를 크기 순서대로 지운다.
// 아직 모든 수를 지우지 않았다면, 다시 2번 단계로 간다.