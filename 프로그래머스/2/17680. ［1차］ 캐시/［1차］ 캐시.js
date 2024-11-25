function solution(cacheSize, cities) {
   let answer = 0;
    let arr = [];
    
    cities = cities.map(index => index.toUpperCase()); //대문자로 변경
    
    if(cacheSize===0)
        return cities.length*5; //캐시사이즈가 0이면 어차피 모두 cache miss이므로 length*5
    
    for(let i=0; i<cities.length; i++){
        let city = arr.findIndex((index) => index ===cities[i]);
        
        if(city !==-1){//cache hit 일 경우
            arr.splice(city,1);
            answer +=1;
        }else if(arr.length===cacheSize){ //캐시가 꽉찼을경우 & 캐시 미스
            arr.shift();
            answer +=5;
        }else{ //캐시미스
            answer +=5;
        }
        arr.push(cities[i]);    
    }
    return answer;
}

//LRU 알고리즘 구현
//캐시안에 내가 찾고자 하는 도시 이름이 있으면 cache hit & 해당 인덱스 삭제-> 실행시간 1s
//도시 이름이 없으면 cache miss ->실행시간 5s
//캐시가 꽉 차면 제일 첫번째 인덱스 삭제 => 실행시간 5s
//제일 마지막 인덱스로 cities[i]추가
//cache size가 0부터 