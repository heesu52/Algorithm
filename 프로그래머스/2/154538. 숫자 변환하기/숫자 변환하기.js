function solution(x, y, n) {
    let visited = new Set();
    let queue = new Set([x]); // Set은 배열을 요소로 받아들임, 횟수만 기록할거임
    let count = 0;
    
    visited.add(x);

    while(queue.size > 0) { //Set은 size
        let Nextqueue = new Set();
        
        for(let current of queue) { //횟수를 저장하는 큐에서 current를 y와 비교
            if(current === y) return count;
            
            if(current + n <=y && !visited.has(current+n)){
                visited.add(current+n);
                Nextqueue.add(current+n);
            }
            
            if(current * 2 <=y && !visited.has(current*2)){
                visited.add(current*2);
                Nextqueue.add(current*2);  
            }
            
            if(current * 3 <=y && !visited.has(current*3)){
                visited.add(current*3);
                Nextqueue.add(current*3);   
            }
        }
        queue = Nextqueue;
        count++;
     }
    return -1;
}
    
    
/*
최소 연산 횟수 = bfs
이미 방문한 노드를 저장할 vistied (중복제거를 위해 set)
현재 x와 count를 저장할 큐
*/
/*
처음에 현재 x를 방문한 노드에 추가
큐의 제일 처음 값을 꺼내서 bfs 진행
세가지 조건으로 나눠서 보기 (x+n, x*2, x*3)
현재 값이 y보다 작거나 같고, 방문한적이 없다면 -> 방문한 노드에 추가 + 큐에 현재 값과 count 추가
만약 queue으 길이가 0보다 작다면 = x가 y와 같아질 수 없다면 return -1
*/