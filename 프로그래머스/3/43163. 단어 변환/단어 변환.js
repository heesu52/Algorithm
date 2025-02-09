function solution(begin, target, words) {
    let answer = 0;
    let visited = []; //1
    let queue = [];
    
    if(!words.includes(target)) return 0; 
    
    queue.push([begin, answer]); //2
    
    while(queue){
        let [currentword, count] = queue.shift();
        if(currentword === target) return count; //6
        
        
        for(let word of words) {
            let NotEqual = 0;
            
            if(visited.includes(word)) continue; //1
            
            for(let i=0; i<word.length; i++){ //3
                if(currentword[i] !== word[i]){
                    NotEqual++;
                }
            }
            if(NotEqual===1){ //4
                queue.push([word, ++count]);
                visited.push(word); //5
            } 
        };
    }
    return answer;
}


/*
한번에 한개의 알파벳만 바꿀 수 있음
words에 있는 단어로만 변환이 가능

모든길이의 단어는 동일함
target이 words에 없을 경우 0 반환
이전 단어를 다시 볼 필요가 없으므로, bfs
*/

/*
1. 이미 방문한 노드인지 확인할 vistied 배열
2. queue에 [begin, count] push
3. queue shift해서 begin 단어와 비교(방문하지 않았을 경우)
4. begin 단어와 단어가 다른 횟수가 1일경우 count++, queue에 push
5. 해당 단어는 visited에 push
6. begin과 비교단어가 같아질 경우 return
*/