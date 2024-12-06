function isPrime(num){ //소수판별알고리즘
    if(num<=1){
        return false; 
    }
    for(let j=2; j<=Math.sqrt(num); j++){
        if(num % j === 0){
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    let prime = [];
    n = n.toString(k).split('0');
    
    for(let i=0; i<n.length; i++){
        let num = Number(n[i]);
        
        if(isPrime(num)){
            prime.push(num);
        }
    }
    return prime.length;
}

//n을 k 진수로 변환
//0을 기준으로 문자열을 자르기
//잘라진 문자열을 기준으로 소수인지 아닌지 판별
// 1. 1보다 작거나 같으면 제외
// 2. 2는 소수
// 3보다 큰 수 중에서 짝수는 모두 제외
// 소수알고리즘을 통과한 숫자들을 배열에 넣기
// 배열의 길이만큼 return