function solution(k, score) {
    let answer = [];
    let arr = [];
    
    for(let i=0; i<score.length; i++){
        if(arr.length !=k){
            arr.push(score[i]);
            arr.sort((a,b)=>a-b);
            answer.push(arr[0]);
        }else{
            arr.push(score[i]);
            arr.sort((a,b)=>a-b);
            arr = arr.slice(1,arr.length);
            answer.push(arr[0]);
        }
    }
    return answer;
}

//arr.length가 k가 안될경우, arr배열에 넣기
//arr.length가 k 일 경우, arr배열에 넣고 정렬 후 slice(0,2)
//answer에 arr[0] 넣기