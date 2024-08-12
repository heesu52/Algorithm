function solution(people, limit) {
    people = people.sort((a,b)=>a-b)
    var answer = 0;
    
    while(people.length>0){
        let heavist = people.pop();
        
        if(people.length>0 && heavist + people[0] <=limit){
            people.shift()
        }
        answer++;
    }
    return answer;
}