function solution(strings, n) {
    let answer = strings.sort((a,b) => {
        if(a.split('')[n] > b.split('')[n]) return 1; // n번째 글자끼리 비교
        if(a.split('')[n] < b.split('')[n]) return -1;
        if(a>b) return 1; //n번째 글자가 동일할 때 문자열을 비교
        if(a<b) return -1;
    })
    return answer;
}