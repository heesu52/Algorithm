function solution(topping) {
    let count = 0;
    let leftMap = new Map;
    let rightMap = new Map;
    
    //토핑을 rightMap에 전부 저장
    for(let i=0; i<topping.length; i++){
        rightMap.set(topping[i], rightMap.get(topping[i]) ? rightMap.get(topping[i])+1 : 1);
    }
    //첫번째 토핑부터 leftMap에 저장하면서 rightMap과 비교하기
    for(let i=0; i<topping.length; i++){
        leftMap.set(topping[i], leftMap.get(topping[i]) ? leftMap.get(topping[i])+1 : 1);
        
        //만약 rightMap에 해당 토핑이 1이상이라면 -> left맵에 저장되어야하니 -1
        if(rightMap.get(topping[i])>1)
            rightMap.set(topping[i], rightMap.get(topping[i])-1);
        //rightMap에 해당 토핑이 1이라면 leftMap에 저장된것만 있어야 하므로 삭제
        else if(rightMap.get(topping[i])===1)
            rightMap.delete(topping[i]);
        
        //이때 둘의 키 수가 같다면
        if(leftMap.size === rightMap.size)
            count++;
    }
    return count;
    
}