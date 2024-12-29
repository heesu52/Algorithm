function solution(n) {
    if(n===1) return 1;
    if(n===2) return 2;
    
    let count1 = 1;
    let count2 = 2;
    let temp = 0;
    
    for(let i=3; i<=n; i++){
        temp = (count1 + count2)% 1000000007;
        count1 = count2;
        count2 = temp;
    }
    return count2;
}

/*
문제 파악
가로2 세로1 => 가로n, 세로2인 바닥을 채우기
타일 가로배치, 새로배치 가능 = 가로길이는 2와 1의 합으로 이루어짐
가로길이를 1로 둘 경우 => 직사각형을 세로로 배치
가로길이를 2로 둘 경우 => 직사각형을 가로로 배치
return 경우의수 / 1,000,000,007

*/

/*
처음에는 모든 경우의 수를 구해야하므로 dfs를 생각함
실제로 그림을 그려보니 1,2,3,5,8,13,,,,, => 피보나치의 수
*/