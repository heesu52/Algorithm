function solution(elements) {
    let result = new Set;
    
    for(let i=1; i<=elements.length; i++){
        let sum = 0;
        for(let j=0; j<elements.length; j++){
            if(j===0){
                for(let k=0; k<i; k++){
                    sum += elements[k];
                } 
            }
            else{
                sum -= elements[j-1];
                sum += elements[(j+i-1) % elements.length]
            }
            result.add(sum);
        }
    }
    return result.size;
}

/*
원형 수열, 연속하는 수열
슬라이딩 윈도우 알고리즘 활용
*/

/*
값을 저장할 result 배열
시작 인덱스가 0일 경우 => 모든 합 구하기
그다음 인덱스 부터 => 첫번째 인덱스의 값을 sum에서 제외, 추가된 인덱스의 값을 sum에 추가
다 더하고 나면 result.add(sum)

*/