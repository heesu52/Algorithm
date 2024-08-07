function solution(s){
    s = s.split("")
    var answer = [];
    
    for(let i=0 ; i<s.length; i++){
        if(s[i]===answer[answer.length-1]){
            answer.pop()
        }else{
            answer.push(s[i])
        }
    }
    let result = answer.length ===0 ? 1 : 0;
    return result;
}