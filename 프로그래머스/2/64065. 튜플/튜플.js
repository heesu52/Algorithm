function solution(s) {
    var result = [];
    let tuple = s.replace('{{',"").replace("}}","").split("},{");
    tuple.sort((a,b) => a.length - b.length);
    
    for(let i =0; i<tuple.length; i++){
        tuple[i].split(",").forEach(index => {
            let num = Number(index);
            if(!result.includes(num))
                result.push(num);
        })
    }
    return result;
}


/*
튜프을 배열로 변경
원소의 길이가 짧은 순으로 정렬
result배열에 없는 원소를 골라 => result에 push
**그냥 넣으면 문자열로 result에 들어가기 때문에 중간에 Number로 숫자로 변환해야함**
*/