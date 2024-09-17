function solution(t, p) {
    let answer = 0;
    
    for(let i=0; i<t.length; i++){
        str = t.slice(i, p.length+i);
        console.log(str);
        if(str.length===p.length && str<=p){
            answer++;
        }
    }
    return answer;
}