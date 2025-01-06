function solution(s) {
    let stack= [];
    let count = 0;
    
    for(let i=0; i<s.length; i++){
        stack.push(s[i]);

        const same = stack.filter(i => i === stack[0]);
        const notsame = stack.filter(i => i !== stack[0]);
        
        if(same.length === notsame.length){
            count++;
            stack = [];
        }
    }
    if(stack.length !==0){
        count++;
    }
    return count;
}

/*
1. stack에 비교할 문자를 추가
2. stack에 존재하는 문자와 
3. stack의 가장 처음(이전 문자)과 계속 비교 => 동일하면 same, 다르다면 notsame 배열에 저장
4. same과 notsame의 길이가 동일하다면 => count++ & stack 초기화
5. 반복문을 다 돌았는데 stack에 문자가 남아있다 => 잘리지 않고 남은 문자열 = count++
*/