const gcb = (a,b)=>{ //최대공약수, 유클리드 호제법
    if(b===0){ //b가 0이면 a 반환
        return a;
    }
    else if(a%b===0){ //a가 b로 나누어떨어지면 b 반환
        return b;
    }
    else{ //나누어 떨어지지 않으면 a/b의 나머지를 a에 넣고 a와 b를 바꿈
        return gcb(b, a%b)
    }
}

const lcm = (a,b) => { //최소공배수 구하는 함수
    return a*b /gcb(a,b)
}

function solution(arr) {
    let result=1;
    
    for(let i=0; i<arr.length; i++){
        result = lcm(result, arr[i])
    }
    return result;
}