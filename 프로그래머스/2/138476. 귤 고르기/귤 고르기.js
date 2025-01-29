function solution(k, tangerine) {
    let count = 0;
    let sum = 0;
    const sizes = {};
    
    for(let i=0; i<tangerine.length; i++){
        if(!sizes[tangerine[i]]){
            sizes[tangerine[i]] = 1;
        }
        else{
            sizes[tangerine[i]] += 1;
        }
    }
    let sort_size = Object.values(sizes).sort((a,b) =>b-a);
    for(let i=0; i<sort_size.length; i++){
        sum += sort_size[i];
        count++;
        if(sum >=k) return count;
    }
}

/*
서로 다른 종류의 수의 최솟값
해쉬로 풀기
담는 귤의 종류 = count
*/

/*
1.key=귤의 무게, object=귤의 갯수
2.내림차순으로 정렬해서 갯수가 많은 순
3.내림차순 순으로 k와 같거나 커질때까지 더하기
*/