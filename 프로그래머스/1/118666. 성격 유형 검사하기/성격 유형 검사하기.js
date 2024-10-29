function solution(survey, choices) {
    const types = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    let answer = '';

    for(let i=0; i<survey.length; i++){
        const [leftType, rightType] = survey[i].split("");
        if(choices[i]<4){
            types[leftType] += 4-choices[i];
        }
        else if(choices[i]>4){
           types[rightType] += choices[i]-4;
        }
    }
    const type = Object.keys(types);

    for(let j=0; j<type.length; j+=2){
        const LeftType = types[type[j]];
        const RightType = types[type[j+1]];
        
        LeftType >= RightType ? answer += type[j] : answer += type[j+1]; 
    }
    
//     types['R']>=types['T'] ? answer += "R" : answer += "T";
//     types['C']>=types['F'] ? answer += "C" : answer += "F";
//     types['J']>=types['M'] ? answer += "J" : answer += "M";
//     types['A']>=types['N'] ? answer += "A" : answer += "N";
    
    return answer;
}


// 점수를 count할 type 객체 생성
// servey를 split하여 leftType, rightType로 분해
// choice가 4보다 작을 경우 leftType, 4보다 클 경우 rightType
// i와 i+1의 값만 비교하여 answer에 추가하면 됨 