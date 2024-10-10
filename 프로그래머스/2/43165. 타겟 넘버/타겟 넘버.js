function solution(numbers, target) {
    let count = 0;
    
    function dfs(index,currentsum){
        if(index === numbers.length){
            if(currentsum === target){
                count ++;
            }
            return;
        }
        
        dfs(index+1, currentsum + numbers[index]);
        dfs(index+1, currentsum - numbers[index]);
    }
    dfs(0,0);
    
    return count;
}