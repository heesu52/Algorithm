function solution(maps) {
    
    const dX = [-1,0,1,0];
    const dY = [0,-1,0,1];
    
    function bfs(){
        const q = [[0,0,1]];
        maps[0][0] = 0;
        
        while(q.length){
            const [curX, curY, distance] = q.shift();
            
            if(curX === maps.length-1 && curY === maps[0].length-1){
                return distance;
            }
            else{
                for(let i=0; i<4; i++){
                    const X = curX + dX[i];
                    const Y = curY + dY[i];
                    
                    if(X>-1 && X<=maps.length-1 && Y>-1 && Y<=maps[0].length-1 && maps[X][Y] === 1){
                        q.push([X, Y, distance+1]);
                        maps[X][Y] = 0;
                    }
                }  
            }
        }
        return -1;
    }
    return bfs();
}

/*
모든 경우의 수를 고려해야하지만, 최단거리를 찾아야 함 => bfs
상대팀에 도달 할 수 없으면 -1 return
갈 수 있는  곳은 1, 갈 수 없는 곳은 0
이미 지나온 곳은 0으로 처리
[0,0]이 시작점, [length-1, length-1]이 상대편 진영
n과 m이 다를 수도 있음
*/

/*
상하좌우 설정
방문해야하는 칸 배열 q = [[현재x, 현재y, 지난 칸 수]
지난 노드는 0으로 변경 map[x][y] = 0
q에서 현재 위치를 꺼내옴

1. 현재 위치가 상대편 진영이라면 return 이동거리
2. 현재 위치가 상대편 진영x
2-1. 4번 반복하여 상하좌우 탐색
2-2. 다음 위치가 맵안에 있고 && 아직 방문하지 않은 노드라면
2-3. 다음 위치로 이동 && 0으로 변경
2.4. q에 현재 노드를 추가


*/