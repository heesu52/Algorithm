function solution(n, words) {    
    for(let i=1; i<words.length; i++){
        let cur = words[i-1].slice(-1);
        let prev = words[i][0];
        
        if(cur === prev){
            for(let j=0; j<i; j++){
                if(words[i] === words[j]){
                    return[(i%n)+1, Math.ceil((i+1)/n)]
                }
            }
        }
        else{
            return[(i%n)+1, Math.ceil((i+1)/n)]
        }
    }
    return [0,0];
}


/*
1. 이전 단어의 마지막 글자와 첫글자가 동일해야함
2. 이전에 나온 단어는 x
3. 마지막 사람이 말하면 다시 1번으로 돌아감
4. n은 사람수
*/

/*
//끝말잇기
1. if(이전 단어와 현재 단어가 동일하다면)
1-1. if(이전단어와 중복이라면) return
1-2. else(중복이아니라면) continue
2. else(동잃하지 않다면)return

//사람 번호와 해당 턴수 구하기
1. 해당인덱스%n에 +1
2. Math.ceil((해딩인덱스+1)/n) => 실제 자기 차례로 턴을 찾아야 하므로 인덱스+1
*/