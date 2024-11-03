function solution(want, number, discount) {
    var answer = 0;
    const wantMap = new Map();
    
    want.forEach((item, index) => {
        wantMap.set(item, number[index]);
    })
  
    for(let i=0; i<=discount.length-10; i++){
        let currentMap = new Map(wantMap);
         let match = true;
        
        for(let j=i; j<i+10; j++){
            let saleItem = discount[j];
            if(currentMap.has(saleItem) && currentMap.get(saleItem)>0){
                currentMap.set(saleItem, currentMap.get(saleItem)-1);
            }
        }
        currentMap.forEach(value => {
                if(value>0)
                    match = false;
        })
        
        if(match) answer++;
    }
    return answer;
}
//want의 원소를 해쉬맵으로
//wantMap으로 비교를 해버리면 다음 비교할때 비교할 값이 없기 때문에 복사보인 currentMap
//discount를 10일만큼 돌려서 number와 동일한 값이 되면 해쉬맵의 value를 --
// currnetMap의 값이 전부 0이라면 answer++