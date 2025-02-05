function solution(s) {
    let count = 0;
    let n = s.length;
    
    for (let j = 0; j < n; j++) {
        let stack = [];
        let isValid = true;
        
        for (let i = 0; i < n; i++) {
            let char = s[(j + i) % n]; // j만큼 회전한 상태에서 문자 선택
            
            if (char === "[" || char === "{" || char === "(") {
                stack.push(char);
            } else if (char === "]" && stack[stack.length - 1] === "[") {
                stack.pop();
            } else if (char === "}" && stack[stack.length - 1] === "{") {
                stack.pop();
            } else if (char === ")" && stack[stack.length - 1] === "(") {
                stack.pop();
            } else {
                isValid = false;
                break; // 잘못된 경우 더 이상 검사할 필요 없음
            }
        }

        if (isValid && stack.length === 0) {
            count++;
        }
    }

    return count;
}




/*
[,{,( 일 경우 stackpush
],},) 일 경우 stack.pop
stack.length가 0이라면 count++
s에서 첫번째 문자를 자르고 뒤에 다시 붙이기
*/