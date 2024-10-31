function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(count, k){
        for(let i=0; i<dungeons.length; i++){
            if(!visited[i] && dungeons[i][0]<=k){
                visited[i]=true;
                dfs(count+1, k-dungeons[i][1]);
                visited[i]=false;
            }
           answer = Math.max(answer, count); 
        }
    }
    dfs(0,k);
    return answer;
}

// 방문한 visited 배열
// 방문에 성공할때마다 count++, 최대 방문 가능 횟수를 MaxCount
// dungeons[i][j]의 i인덱스 값이 k보다 작거나 같을 경우 방문 가능
// Maxcount와 Count를 비교하여 더 큰 값을 MaxCount로 설정
