function solution(number, limit, power) {
    let result = 0;
    
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count++; // j는 약수
                if (j !== i / j) {
                    count++; // i / j도 약수 (j != i / j일 때)
                }
            }
        }
        
        if (count > limit) {
            count = power;
        }
        result += count;
    }

    return result;
}
