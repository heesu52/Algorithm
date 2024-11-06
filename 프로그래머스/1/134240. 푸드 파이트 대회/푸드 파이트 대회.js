function solution(food) {
    let firstfood = "";
    let secondfood = "";
    let answer = "";
    
    for(let i=1; i<food.length; i++){
        firstfood +=i.toString().repeat(Math.floor(food[i]/2));
    }
    secondfood = firstfood.split("").reverse().join("");
    
    answer = firstfood + "0" + secondfood;
    
    return answer;
}
//food[i]를 절반으로 나눈 몫만큼 배치
//0을 기준으로 앞에 오는 문자열 & 뒤에 오는 문자열을 만듬
