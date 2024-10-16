// 개인정보 n개, 1~n번으로 분류
// 모든 달은 28일까지 있다고 가정
// 개인정보 보관날짜는 유효날짜 하루전까지 -> 5.19일이면 5.18일이후로는 파기
// 보관날짜 > 현재날짜 -> 보관가능, 보관날짜 < 현재날짜 -> 파기

function solution(today, terms, privacies) {
    const [cyear, cmonth, cday] = today.split(".").map(v => +v); //+v는 문자열을 숫자로 변환
    let termsMap = {}; //약관 종류를 객체 저장 {A:12, B:6}
    
    terms.forEach(v => {
        let [kind, period] = v.split(" ");
        termsMap[kind] = period;//객체는 []안에 key값을 넣음
    })
    
    let answer = []; //파기해야하는 개인정보를 저장
    
    privacies.forEach((v,i)=>{
        const [date, term] = v.split(" "); //날짜는 date, 약관종류는 term에 저장
        const [year, month, day] = date.split(".").map(v => +v); //date를 년,월,일을 기준으로 구분->숫자로 변환
        
        let limityear = year +  Math.floor(termsMap[term] / 12), //1년으로 나눈 몫을 year에 더함 (12개월보다 작으면 0)
            limitmonth = month + termsMap[term] % 12, //12개월보다 작을 경우 월 단위로 더해야 하므로 month+나머지
            limitday = day-1; //개인정보 보관날짜는 유효날짜 하루 전까지 
        
        if(limitmonth > 12) {
            limityear += 1;
            limitmonth %= 12;
        }
        if(limitday === 0){ //7월 1일 -> 6월 28일까지 이므로 limitday가 1일 경우, 전 달 마지막날까지 보관가능
            limitmonth -=1;
            limitday = 28;
        } 
        
        if(cyear>limityear){
            answer.push(i+1);
        } else if(cyear===limityear && cmonth > limitmonth){
            answer.push(i+1);
        } else if(cyear===limityear && cmonth===limitmonth && cday > limitday){
            answer.push(i+1);
        }
    })
    return answer;
}