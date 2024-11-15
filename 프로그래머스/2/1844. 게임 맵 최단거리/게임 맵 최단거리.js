function solution(maps) {
    //상하좌우 설정
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    
    //최단거리 구하기 = BFS
    function bfs() {
        const q = [[0,0,1]]; //[행, 열, 이동거리]
        maps[0][0] = 0; // 방문한 위치는 0으로 표시(재방문X)
        
        while(q.length){
            const [curX, curY, distance] = q.shift(); //q에서 방문할 위치 꺼내오기
            
            if(curX==maps.length-1 && curY==maps[0].length-1){ //현재 위치가 상대팀 진영일 경우
                return distance; //이동거리 반환
            }
            
            //현재위치를 기준으로 상하좌우 탐색
            for(let i=0; i<4;i++){
                const x = curX+dx[i]; 
                const y = curY+dy[i]; 
                
                //x,y이 맵 안에 존재하고(시작점이 0,0이므로 0이상) 아직 방문하지 않은 위치일 경우
                if(x>-1 && x<maps.length && y>-1 && y<maps[0].length && maps[x][y]===1){
                    q.push([x,y,distance+1]); //방문한 위치를 q에 넣기
                    maps[x][y]=0; //방문한 위치 0으로 변경
                }
            }
        }
        return -1; //만약 상대팀 진영에 도착할 수 없을 때
    }
    return bfs();
}

//최단거리 => BFS일 확률이 높음
//시작위치는 [0,0], 적진 위치는 [length-1, length-1];
// 현재 위치를 기준으로 상하좌우를 탐색 => 상하좌우 설정 시, X와Y를 따로 해도 되고 배열을 원소로 넣어서 한번에 해도 됨
// 1이면 방문 가능, 0이면 방문x
// 방문한 위치는 0으로 변경
// bfs는 인접한 노드는 모두 방문하며 상하좌우에는 우선순위가 없기때문에 동시에 진행
// 이미 방문한 위치는 재방문x -> 만약 최단거리의 루트가 아니라면 이미 방문한 노드를 방문해야 함 (동시에 진행되기 떄문에 최단거리로 가는 루트가 이미 방문했을거임)
// 이런 방식으로 최단거리를 찾을 수 있음