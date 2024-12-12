function solution(land) {  
    for(let r=1; r<land.length; r++){
        //현재 열과 동일한 열을 제외하고 합을 구한 것들 중에서 가장 큰 값을 반환
        land[r][0] += Math.max(land[r-1][1],land[r-1][2],land[r-1][3]);
        land[r][1] += Math.max(land[r-1][0],land[r-1][2],land[r-1][3]);
        land[r][2] += Math.max(land[r-1][0],land[r-1][1],land[r-1][3]);
        land[r][3] += Math.max(land[r-1][0],land[r-1][1],land[r-1][2]);
    }
    //모든 열의 합이 담겨있는 마지막 행의 원소를 복사해서 비교
    return Math.max(...land[land.length-1])
}

//이전 행에서 현재 행의 열과 동일한 열을 제외하고 합을 구한 뒤 가장 큰 값을 현재 행의 열에 반환
//이러면 0번행을 제외하고는 이전 행과의 합들로 열이 구성됨
//제일 마지막 행(land.length-1)에서 최대값을 고르면 끝
