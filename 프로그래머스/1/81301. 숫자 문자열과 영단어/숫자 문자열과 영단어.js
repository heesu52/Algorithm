function solution(s) {
    var string = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for(let i=0; i<string.length; i++){
        let answer = s.split(string[i])
        s = answer.join(i)
    }
    return Number(s);
}