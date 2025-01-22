function solution(n, computers) {
    let visited = new Array(n).fill(false); //방문여부
    let count = 0; //연결된 노드 수
    
    function dfs(node){
        visited[node] = true; //방문처리
        for(let i=0; i<n; i++){
             //연결되어있고, 방문하지 않았다면 (서로 연결되어있기에, 한쪽에서 방문하면 다른쪽에서 또 방문할 필요가 없기떄문)
            if(computers[node][i] === 1 && !visited[i]){
                dfs(i);
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            dfs(i);
            count++; //방문하지 않은 곳만 탐색하기때문에 그냥 더해도 중복x
        }
    }
    return count;
}
    
    


/*
모든 경우의 수를 확인 해야함 = dfs
방문한 노드를 담는 배열 visited, 초기에 모두 false로 지정
바깥쪽 인덱스 = 컴퓨터, 안쪽인덱스 = 다른컴퓨터와의 연결여부
1=연결됨 0은 연결안됨
*/

/*
1. for문으로 모든 인덱스 방문
2. 현재 인덱스에 방문하지 않았다면, 해당 인덱스를 dfs로 탐색
3. vistied에 현재 인덱스를 true로 변환하여 방문처리
4. 인덱스를 다시 for문을 돌려 다른컴퓨터완 연결여부 확인
5. 서로 연결되어있고(value===1) 아직 방문 하지 않았다면,
6. 해당 컴퓨터를 dfs로 탐색
6. count++

*/