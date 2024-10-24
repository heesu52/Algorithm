//뽑은 인형을 담을 stack[]
//stack의 제일 최신수 = 직전수 라면 둘 다 사라짐
//board는 순서대로 격자의 제일 윗줄임
//같은 수는 같은 모양의 인형

function solution(board, moves) {
    let stack = [];
    let count = 0;
    
    for(let i of moves){
        for(let j=0; j<board.length; j++){
            if(board[j][i-1] !== 0){
                let currentNum = board[j][i-1];
                board[j][i-1] = 0;
                if(currentNum !== stack[stack.length-1]){
                    stack.push(currentNum);
                }else{
                    stack.pop();
                    count +=2;
                }
                break;
            }
        }
    }
    return count;
}

//moves의 요소 -> board에 있는 배열들의 인덱스
//해당 인덱스의 값이 0이 아닌 수 -> 수를 stack에 push && board에서는 0으로 변경
//만약 해당 바구니에서 직전의 수와 동일하다면 둘다 pop();