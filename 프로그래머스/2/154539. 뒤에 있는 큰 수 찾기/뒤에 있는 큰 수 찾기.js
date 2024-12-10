function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1);
    let stack=[];
    
    for(let i=0; i<numbers.length; i++){
        while(stack.length>0 && numbers[stack[stack.length-1]]<numbers[i]){
            let index = stack.pop();
            answer[index] = numbers[i];
        }
      stack.push(i);
    }
    return answer;
}

//이중반복문으로 뒤에 있는 숫자와 비교
//뒤에 있는 숫자가 더 크다면 해당 수로 변경
//없다면 -1 반환