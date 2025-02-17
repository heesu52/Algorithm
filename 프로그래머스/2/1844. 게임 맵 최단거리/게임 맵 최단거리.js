function solution(maps) {
    let dX = [-1,0,1,0];
    let dY = [0,-1,0,1];
    const n = maps.length-1; 
    const m = maps[0].length-1;
    
    function bfs(){
        let node = [[0,0,1]]; //현재위치 & 지난 노드 수
        maps[0][0] = 0; //현재위치;
        
        while(node.length){
            let [curX, curY, answer] = node.shift();
            
            if(curX===n && curY===m) return answer;
            
            for(let i=0; i<4; i++){
                const X = curX+dX[i];
                const Y = curY+dY[i];
                
                if(X>-1 && X<=n && Y>-1 && Y<=m && maps[X][Y] !== 0){
                    node.push([X,Y,answer+1]);
                    maps[X][Y] = 0;
                }
            }
        }
        return -1;
    }
    return bfs();
}


/*
n*m크기의 2차원 배열
처음 캐릭터는 (1,1)에 위치 =>[0][0]
상하좌우 지정
모든 경로를 찾고 최솟값을 구해야함 
상대팀 진영에 도착할 수 없을 경우 -1을 return
*/

/*
방문한 노드인지 확인할 배열 visited
방문한 노드의 갯수는 세는 count
현재 노드를 반환하는 stack
1. 상하좌우 중 노드값이 1인 부분만 방문
2. 이미 방문한 노드인지 확인
3. 방문한 노드가 아니라면 현재 값에서 이동하고 visited에 추가
4. 방문한 노드수 count++
4. 현재 노드가 상대팀 진여에 도착했다면 return count
*/