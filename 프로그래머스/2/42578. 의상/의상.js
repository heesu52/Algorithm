function solution(clothes) {
    const hashmap = new Map();
    let result = 1;
    
    for (const [name, type] of clothes) {
        if (!hashmap.has(type)) {  // type이 hashmap에 없으면
            hashmap.set(type, []);  // type에 빈 배열을 설정
        }
        hashmap.get(type).push(name);  // 해당 type에 아이템 추가
    }
    if(hashmap.size===1){ //type이 한가지만 있을 경우,
        hashmap.forEach((items)=>{
            result = items.length; //type의 옷의 갯수가 result
        })
    }else{ //type이 2개 이상일 경우, 
        hashmap.forEach((items) => {
        result *= (items.length + 1);  // 각 카테고리에서 선택하지 않는 경우를 포함해 +1
    });
        result = result -1; //모두 선택 안하는 경우를 하나 빼줌
    }
    return result;
}
