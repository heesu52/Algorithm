function solution(n) {
    let arr = n.toString(2).split('');
    let count1 = arr.filter(one => one ==="1").length;
    let count2;
    
    while(count1!==count2){ //둘이 같을 때 종료
        ++n;
        count2 = n.toString(2).split('').filter(one => one ==="1").length;
    }
    return n;
}