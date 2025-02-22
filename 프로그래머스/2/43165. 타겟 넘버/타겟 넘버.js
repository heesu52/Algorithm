function solution(numbers, target) {
    let count = 0;
    
    dfs(0,0);
    
    function dfs(sum, i){
        if(i === numbers.length){
            if(sum === target){
                count++;
            }
            return; //함수 종료
        }
        dfs(sum-numbers[i],i+1);
        dfs(sum+numbers[i],i+1);
    }
    return count;
}

/*
모든 경우의 수를 구해야함 -> dfs
number를 탐색하다가 target과 같아질 때를 확인
*/

/*
1. sum+다음원소, 다음원소+1
2. 인덱스가 numbers의 길이와 같다면 sum과 target을비교
3. sum과 target이 같다면 count++
*/