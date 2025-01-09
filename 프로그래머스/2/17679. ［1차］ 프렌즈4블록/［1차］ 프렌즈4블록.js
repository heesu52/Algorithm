function solution(m, n, board) {
    board = board.map((i) => i.split(""));
    
    while(true){
        const blocks = []; //사라질 블럭
        for(let i=0; i<m-1 ;i++){
            for(let j=0; j<n-1; j++){
                if(board[i][j] && 
                   board[i][j] === board[i][j+1] 
                   && board[i][j] === board[i+1][j] 
                   && board[i][j] === board[i+1][j+1]){
                    blocks.push([i,j]);
                }
            }
        }
        if(blocks.length===0) return [].concat(...board).filter((x) => !x).length;
        
        //블록 지우기
        for(const [i,j] of blocks){
            board[i][j] = 0;
            board[i][j+1] = 0;
            board[i+1][j] = 0;
            board[i+1][j+1] = 0;
        }
        
        //블록내리기
        for(let i=m-1; i>=0; i--){
            for(let j=0; j<n; j++){
                for(k=i-1; k>=0 && !board[i][j]; k--){
                    if(board[k][j]){
                        board[i][j]=board[k][j];
                        board[k][j] = 0;
                    }
                }
            }
        }
    }
}

/*
m은 높이(행), n은 폭(열)
2*2배열의 블록들을 삭제
삭제 후 위에 있는 블록이 아래로 내려옴
*/

/*
1. 블록찾기
board[i][j] = 기준 블록
오른쪽board[i][j+1],아래board[i+1][j],대각선board[i+1][j+1]에 동일한 문자가 있는지 확인

2. 블록지우기
blocks에 넣은 변수를 기준으로 블록에 0 대입

3. 블록 내리기
아래부터 확인
현재블록이 빈값인지 && 하나 위 블록이 문자인지 확인
현재 블록을 하나위의 문자로 변경
하나위의 블록을 0으로 변경
*/
