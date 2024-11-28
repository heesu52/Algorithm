function solution(n, t, m, p) {
    var answer = '';
    let word = '';
    
    for(let i=0; i<t*m; i++){
        word += i.toString(n).toUpperCase(); //숫자를 n진법으로 바꾼고, 10~15는 대문자로
    }
    for(let i = p-1; i<t*m; i+=m){ //p는i부터 이므로 p-1, i+m=자기차례
        answer += word.slice(i,i+1);
    }

    return answer;
    
}
// 말해야하는 숫자 t까지 반복
// 