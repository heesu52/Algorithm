function solution(number, k) {
    let stack = [];
    
    for(let i=0; i<number.length; i++){
        while(k>0 && stack.length>0 && number[i] > stack[stack.length-1] ){
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }
    stack.splice(-k,k);
    return stack.join("");
}

/*
k개를 제거했을 때 얻을 수 있는 가장 큰 수
*/

/*
현재 수가 뒤에 수보다 작을 경우 -> 현재수를 삭제 && count++
현재 수가 뒤에 수보다 크거나 같을 경우 -> 지나감
count와 k가 일치할 때 까지 반복
숫자를 문자열로 변경
*/