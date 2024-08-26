function solution(n) {
    const f=[0,1,2];
    
    for(let i=3; i<=n; i++){
        f[i] = (f[i-1] + f[i-2]) % 1234567
    }
    return f[n]
}

// n=1 -> result=1
// n=2 -> result=2
// n=3 -> result=3
// n=4 -> result=5
// n=5 -> result=8
//피보나치 수열 f[n] = f[n-1]+f[n-2]


