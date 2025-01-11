function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let now_weight = 0; //현재 다리가 버티는 무게
    let bridge = new Array(bridge_length).fill(0); 
    
    
    //다리에 트럭이 남아있거나, 대기트럭이 있는 동안
    while(now_weight > 0 || truck_weights.length > 0){
     
        time++;
        now_weight -= bridge.shift(); //건너간 트럭의 무게 제거
        
        if(truck_weights.length>0 && now_weight + truck_weights[0] <= weight){
            now_weight += truck_weights[0]; //
            bridge.push(truck_weights.shift());
        }
        else{
            bridge.push(0);
        }
    }
    return time;
}


/*
트럭은 1초에 다리 길이 1씩 전진
트럭은 올라갈수 있으면 1초에 한 대씩 다리에 올라갈 수 있음
트럭이 최대 bridge_length대 만큼 올라갈 수 있음
weight이하까지 무게를 견딜 수 있음
다리에 완전히 오르지 않은 트럭은 무시
*/

/*
1. bridge = 다리를 건너는 트럭의 배열
2. 첫번째 인덱스 제거 & 현재 무게에서 뺴기
3. 대기 트럭이 남아있고, 현재무게+다음 트럭의 무게 <= weight라면
4. 현재 무게에 현재 트럭 추가
5. bridge에 트럭 추가 & 대기 트럭에서 제거
3. 만약 올릴 수 없다면, 다시 0으로 채우기
*/