function solution(s) {
    const arr = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i=0; i<arr.length; i++){
        let answer = s.split(arr[i]);
        s=answer.join(i);
    }
    return Number(s);
}