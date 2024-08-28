function solution(nums) {
    let nums_count = {};
    
    for(let i=0; i<nums.length; i++){
        let nums_type = nums[i];
        
        if(nums_count[nums_type] !== undefined){
            nums_count[nums_type] ++;
        }
        else{
             nums_count[nums_type] = 1;
        }
    }
    let nums_sort = Object.values(nums_count).sort((a,b) => a-b);
    let sum = 0;
    
    for(let i=0; i<nums_sort.length; i++){
        if(sum === nums.length/2){
            break;
        }else{
            sum++;
        }
    }
    return sum;
}