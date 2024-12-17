// 시간을 분d으로 계산
function parseTime(time) {
    const [hour, min] = time.split(":").map(Number);
    return hour*60 + min;
}

function solution(fees, records) {
    let parking = {}; // 입/출차 기록
    let parking_time = {}; // 차량 별 주차시간 기록
    
    // 입/출차가 모두 있는 경우 
    records.forEach((record) => {
        const [time, carNum, inout] = record.split(" ");
        
        if(inout === "IN"){
            parking[carNum] = time;
        }
        if(inout ==="OUT"){
            //출차시간-입차시간
            total_time = parseTime(time) - parseTime(parking[carNum]);
            
            //처음 입고됐을 경우
            if(!parking_time[carNum]){
                parking_time[carNum] = total_time;
            }
            //기존에 입고된 이력이 있을 경우
            else{
                 parking_time[carNum] += total_time;
            }
            delete parking[carNum]; //출차된 차량 삭제
        }
    })
    
    //입차만 있고 출차가 없을 경우
    for(let carNum in parking) { //in은 키값을 가져옴 of는 배열(배열,Map, Set)
        total_time = parseTime("23:59") - parseTime(parking[carNum]);
        
        if (!parking_time[carNum]) {
            parking_time[carNum] = total_time; 
        } else {
            parking_time[carNum] += total_time; // 기존 주차 시간에 더함
        }
    }
    
    //주차요금 계산 
    function parseFee(total_time) {
        if(total_time<=fees[0]) return fees[1];
        return fees[1] + Math.ceil((total_time-fees[0])/fees[2]) *fees[3];
    }
    
    //차량번호를내림차순으로 정렬하고 주차 요금 계산
    const result = Object.keys(parking_time).sort((a,b) => Number(a)-Number(b)).map((carNum =>parseFee(parking_time[carNum])));
    
    
    return result;
}


/*
fees[0] = 기본시간
fees[1] = 기본요금
fees[2] = 초과 시간
fees[3] = 초과요금
180분 이하일 경우 fees[1]
180분 초과일 경우 fees[1] + [(출차시간-입차시간)-fees[0]/fees[2]] *fees[3]
초과한 시간이 단위 시간으로 나누어 떨어지지 않으면 올림
출차 내역이 없을 경우 -> 23:59 출차로 간주
차량번호가 작은 자동차부터
*/

/*
ImMap, 
해쉬로 저장 key = 차 넘버, value = 출차 시간,
해쉬에 저장할때 key값을 오름차순으로 정렬
IN일 경우, 해쉬에 저장
OUT일 경우, 해쉬에서 키와 차량넘버가 동일한 값을 찾고 시간을 계산
시간 계산 식 = 
출차-입차 시간 계산 후 if(total_time <=180) 5000원
if(total_time>180) 요금 계산
value만 꺼내서 return
*/


