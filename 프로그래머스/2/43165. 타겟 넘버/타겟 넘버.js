function solution(numbers, target) {
    let count=0;
    
    dfs(0,0);
    
    function dfs(sum, index) {
        if(index === numbers.length){ //모든 원소를 다 탐색했을 경우
            if(sum === target){ 
                count++;
            }
            return;
        }
        dfs(sum+numbers[index], index+1); //다음 원소를 더하는 경우
        dfs(sum-numbers[index], index+1); //다음 원소를 빼는 경우
    } 
    return count;
}

//원소를 더하는 경우와 빼는 경우
//sum이 target과 같은 경우 count++
//모든 원소의 더하고 빼는 경우를 알아아함 -> dfs