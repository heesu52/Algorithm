function solution(babbling) {
    let answer = 0;
    const words = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((bab) => {
        let isVaild = true;
        
        for(const word of words){
            if(bab.includes(word.repeat(2))){
                isVaild = false; //같은단어가 두번 반복될 경우
                break;
            }
        }
        if(!isVaild) return;
        
        //말할 수 있는 단어를 하나씩 제거
        while(bab.length>0){
            let found = false;
            for(const word of words){
                if(word === bab.slice(0,word.length)){ //일치하는 부분 잘라서 비교
                    bab = bab.slice(word.length); // 일치하는 부분 제거
                    found = true; //맞는 단어를 찾음
                    break;
                }
            }
            if(!found) {
                isVaild = false; //발음할 수 없는 단어
                break; 
            }
        }
        if(isVaild) answer++;
    });
    return answer;
}


/*
aya, ye, woo, ma + 네단어로 조합한 단어 가능
문자열의 길이는 30이하
단어의 수는 100개 이하
*/

/*
반복문으로 확인
두번이상 반복할 경우 무조건 x -> 머쓱이는 두번반복해서 말할 수 없음
옹알이에서 말할 수 있는 단어만큼 자르고 해당부분을 공백 처리 -> 단어제거
만약 말할 수 있는 단어들로 구성되어있을 경우 해당 인덱슨느 공백처리 -> answer++
if(words에 단어를 두번이상 반복한다) break
옹알이 = word단어 제거
if(옹알이가 공백이다(=모두 제거됐다) )answer++;
*/

