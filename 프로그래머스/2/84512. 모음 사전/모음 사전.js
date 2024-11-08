function solution(word) {
    const arr = ["A", "E", "I", "O", "U"];
    const plus = [781, 156, 31, 6, 1];
    let answer = 0;
    
    for(let i=0; i<word.length; i++){
        answer += arr.indexOf(word[i]) * plus[i] +1;
    }
    return answer;
}
// AA->AAA->AAAA->AAAAA로 넘어갈때는 +1
// 한자리에 올 수 있는 단어는 5개 
// 둘째 자릿수가 변하는데 필요한 수는 6 
// 셋째 자리수가 변하는데 필요한 수는 6*5(A,E,I,O,U) + 1(AAA->AAAA) = 31
// 네번째는 31*5 +1 = 156
// 다섯번째는 156*5 +1 = 781;