function solution(s){
    s = s.split("")
    var answer = [];
    
    //stack
    for(let i=0 ; i<s.length; i++){
        if(s[i]===answer[answer.length-1]){ //answer.length-1 = 이전에 answer.push된 객체
            answer.pop() //같으면 이전 객체 제거
        }else{
            answer.push(s[i]) // 다르면 추가
        }
    }
    let result = answer.length ===0 ? 1 : 0;
    return result;
}