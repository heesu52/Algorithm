function solution(elements) {
    let sum_arr = new Set();
    let n= elements.length
    
    for(let i=0; i<n; i++){
        let sum=0;
        for(let j=i; j<i+n; j++){
            sum += elements[j%n] //j로 하면 인덱스 범위를 초과
            sum_arr.add(sum)
        }
    }
    return sum_arr.size
}
