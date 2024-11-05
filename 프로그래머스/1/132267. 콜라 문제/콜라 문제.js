function solution(a, b, n) {
    let count = 0; // 총 받은 콜라의 수
    let plus = 0; // 받을 수 있는 콜라 수
    let empty = 0; // 콜라 빈병의 수
    
    while(n>=a){
        empty = Math.floor(n/a)*a;
        plus = Math.floor(n/a)*b;
        
        count+=plus;
        n = n-empty+plus;
    }
    return count;
}

// (n/a)*b => 받을 수 있는 빈병의 수
// 받을 수 있는 수를 count에 +=
// 남아있는 병의 수가 a보다 크다면 계속 진행