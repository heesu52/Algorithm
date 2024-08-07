function solution(lottos, win_nums) {
    var answer = [];
    
    const lower = lottos.filter(lotto => win_nums.includes(lotto)).length //로또와 정답지가 동일한 길이 = 최저 
    const higher = lottos.filter(lotto=> lotto === 0).length + lower // 최저길이 + 0의 개수 = 최고
    
    let min = lower < 2 ? 6 : 7-lower
    let max = higher < 2 ? 6 : 7 - higher
    
    answer.push(max)
    answer.push(min)
    
    return answer;
}
