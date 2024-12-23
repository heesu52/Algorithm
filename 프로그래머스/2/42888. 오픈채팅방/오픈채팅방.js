function solution(record) {
    const answer = [];
    const arr = new Map();
    
    for(const i of record){
        let index =  i.split(" "); 
        
        if (index[0] === "Enter" || index[0] === "Change")  {
            arr.set(index[1],index[2]);
        }
    }
    
    record.forEach((i) => {
        let index = i.split(" ");
        
        if(index[0] ==="Enter"){
            answer.push(`${arr.get(index[1])}`+"님이 들어왔습니다.")
        }
        else if(index[0] ==="Leave"){
            answer.push(`${arr.get(index[1])}`+"님이 나갔습니다.")
        }
    })
    return answer;
}


/*
아이디로 구분해서 닉네임을 맵에 저장 -> 순서가 필요하기 때문
Enter&Change일 경우 아이디랑 이름을 저장
Enter = ${닉네임}님이 들어왔습니다
Leave = ${닉네임}님이 나갔습니다
i를 split한것을 변수로 설정하면 다른 반복문에서 사용x => index에 저장해서 인덱스 번호로 꺼내쓰기
*/
/*
record forEach로 state 확인 
state에 따라서 id를 key, nickname을 value로 Map에 저장
record forEach로 state확인해서 
state에 따라 들어오기, 나가기에 ${닉네임} 넣어서 문장 완성하여 배열에 넣기
*/