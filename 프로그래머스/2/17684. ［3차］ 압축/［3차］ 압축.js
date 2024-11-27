function solution(msg) {
    let answer = [];
    let list = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    
    while(msg.length > 0){
        let current = "";
        let i=0;
        
        while(i<msg.length && list.includes(msg.slice(0,i+1))){ //list에 w가 존재한다면
            current = msg.slice(0,i+1); //current = w
            i++; //이후 list에 w+c를 추가해야하므로 i++
        }
        
        //answer에 w의 색인번호를 push, 0부터 시작이라 current+1
        answer.push(list.indexOf(current)+1); 
        
        if(i<msg.length){
            list.push(msg.slice(0,i+1)) //i++가 됐으므로 w+c를 list에 push
        }
        
        msg = msg.slice(i); //i부터 끝까지 자른 문자열을 msg로 저장(w를 자른 문자열)
    }
    return answer;
}

//알파벳을 순서대로 list -> 알파벳의 인덱스 번호가 색인번호
//사전에 없는 단어라면 list에 push
//문자열은 사전에 없는 단어가 나올때까지 자름