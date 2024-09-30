function solution(priorities, location) {
    // 우선순위에 index를 함께 저장하여 구분
    let queue = priorities.map((priorities,index)=>[priorities,index]);
    let count = 0;
    
    while(queue.length>0){ //끝날 때 까지 반복해야하므로 for이 아닌 while
        let current = queue.shift();
        
        //current가 비교하려는 요소, item은 queue에 남아있는 요소
        if(queue.some(item => item[0] > current[0])){
            queue.push(current); //우선순위가 남아있다면 queue에 다시 넣기
        } else {
            count++;
            if(current[1] === location){ //location과 index가 동일할 때
                return count; 
            }
        }
    } 
}