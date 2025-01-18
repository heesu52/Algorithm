function solution(numbers, target) {
    let count=0;
    
    dfs(0,0);
    
    function dfs(sum, index){
        if(index===numbers.length){
            if(sum===target){
                count++;
            }
            return;
        }
        
        dfs(sum+numbers[index], index+1);
        dfs(sum-numbers[index], index+1);
        
    }
    return count;
}

/*
더하거나 빼는 모든 경우의 수를 다 해봐야 함 = dfs
*/

/*
계산 합과 target이 일치하는 횟수를 세는 변수 count
dfs(sum, index)
dfs(sum+다음인덱스, index),dfs(sum-다음인덱스, index)
sum과 target이 같다면 count++
모든 원소를 다 돌았다면 return
*/