function solution(files) {
    
    var answer = [];

    for(let i=0; i<files.length; i++){
        let [HEAD, NUMBER, TAIL] = ["", "", ""]; //변수로 저장
        let file = files[i];
        let numberstart = false; //숫자가 시작됐는지 판단
        
        for(let j=0; j<file.length; j++){
            const char = file[j];
            if(!numberstart){
                if((isNaN(char) || char === " ")) {
                    HEAD += char;
                }
                else if (!isNaN(char) && char !==" " && NUMBER.length < 5) {
                    numberstart = true; //이후 문자는 TAIL에 저장되도록
                    NUMBER += char; 
                }
            }
            else {
                TAIL += char;
            }
             
        }
        answer.push({ HEAD, NUMBER, TAIL });
        console.log(answer)
    }
    

    answer.sort((a,b) => {
        let char1 = a.HEAD.toUpperCase();
        let char2 = b.HEAD.toUpperCase();
        let num1 = Number(a.NUMBER);
        let num2 = Number(b.NUMBER);
        
        //HEAD 먼저 비교
        if(char1 < char2) return -1; 
        if(char1 > char2) return 1;
        
        //HEAD가 동일할 경우 NUMBER 비교
        if(num1 < num2) return -1;
        if(num1 > num2) return 1;
        
        //HEAD,NUMBER 모두 동일할 경우 입력순서로 결정
        return 0;
    })
    return answer.map(i => i.HEAD + i.NUMBER + i.TAIL);
}
