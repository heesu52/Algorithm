
function isPrime(num) {
  for(let i = 2; num > i; i++) {
  if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
    return false;
   }
  }
 return num > 1;
}

function solution(nums) {
    let answer = 0;
    let count = 0;
    
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++) {
                answer = nums[i]+nums[j]+nums[k];
                
                  if(isPrime(answer))
                      count++;
            }
        }
    }
    return count;
}