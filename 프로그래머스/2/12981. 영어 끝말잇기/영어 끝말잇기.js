function solution(n, words) {
   for(let i=1; i<words.length; i++){
       //앞단어의 마지막 글자 !=뒤의 단어의 첫번째 글자
       if(words[i-1].substr(-1) != words[i][0]){ 
           return [i%n+1, Math.ceil((i+1)/n)];
       }
       else{
           //이전 단어만 중복을 비교하면 되서 j<i
           for(let j=0; j<i; j++){
               //단어가 이미 앞에 나온 경우
               if(words[i] === words[j]){
                   return [i%n+1, Math.ceil((i+1)/n)];
               }
           }
       }
   }
    return [0,0];
}

// ㅑ=현재단어 인덱스(0부터 시작임)
// i%n 할 경우 나머지가 0,1,2...n-1로 나오므로 +1을 해서 몇번째 사람인지 확인
// i/n을 하면 소수점이 나올때 올림을 하기 위해 Math.ceil 사용
