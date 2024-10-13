// 지도 1 || 지도 2 벽이면 => 전체에서 벽
// 지도1 && 지도2 공백이면 => 전체에서도 공백
// 벽은 1, 공백은 0으로 부호화

function solution(n, arr1, arr2) {
    var answer = [];
    
   for(let i=0; i<n; i++) {
       let binary = (arr1[i] | arr2[i]).toString(2).padStart(n,0);
       
       let map = "";
       for(let j =0; j<n; j++){
           map += binary[j] === "1" ? "#" : " ";
       }
           answer.push(map);
    }
    return answer;
}

// arr1과 arr2를 각각 이진법으로 전환
// 둘다 0 이면 "" 그외에는 다 #로 변경
// arr1과 arr2를 합친 결과를 넣을 answer 배열
// for문의 반복횟수는 n번