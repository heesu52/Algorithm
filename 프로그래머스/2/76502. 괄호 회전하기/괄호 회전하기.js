function solution(s) {
    let count = 0;
    
    for(let i=0; i<s.length; i++){
        let stack=[]; //초기화
        let isVaild = true;
        
        for(let index of s){
            if (index === "(" || index === "{" || index === "[") {
                stack.push(index);
            }
            else if (index === ")" && stack[stack.length-1] === "("){
                stack.pop();
            }
            else if (index === "}" && stack[stack.length-1] === "{"){
                stack.pop();
            }
            else if (index === "]" && stack[stack.length-1] === "["){
                stack.pop();
            }
            else {
                isVaild = false;
            }
        }
        if(isVaild && stack.length === 0)
            count++;
        s = s.slice(1) + s[0];
    }
    return count;
}

// 첫문자를 제일 마지막에 붙임    
// (, {, [ 일 경우 -> stack.push();
// 다음 문자가  ),},] 일 경우 && -> stack.pop();
// 짝지어서 모든 문자가 pop이 되면 stack.length = 0 -> count++;
// 모든 경우의 수가 안되면 isVaild = false (아무것도 안들어가는 경우)
// return count;