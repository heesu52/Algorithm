function solution(new_id) { 
    new_id = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, ''); //1&2단계
    
    //3단계
    let answer = '';
    for(let i=0; i<new_id.length; i++){ 
        if(!(new_id[i] === '.' && new_id[i - 1] === '.')) {
            answer+=new_id[i];
         }        
    }
    
    //4단계
    if(answer[0]==="."){
        answer = answer.slice(1);
    }
    if(answer[answer.length-1] === "."){
        answer = answer.slice(0,-1);
    }
    
    //5단계
    if(answer.length==0){
        answer += "a";
    }
    
    //6단계
    if(answer.length>15){
        answer = answer.slice(0,15);
        if(answer[answer.length-1] === "."){
            answer = answer.slice(0,-1);
        }
    }
    //7단계
    while(answer.length<3){
        answer += answer[answer.length - 1];
    }
    
    return answer;
}