function solution(skill, skill_trees) {
    let answer = skill_trees.length;
    
    skill_trees.forEach((skillTree) => {
        const arr = [...skill]; //문자열을 배열로 변경
        
        for(let i=0; i<skillTree.length; i++){
            if(!arr.includes(skillTree[i])) continue;
            if(arr.shift() !== skillTree[i]){
                answer -= 1;
                break;
            }
        }
    })
    return answer;
}
/*
선행스킬은 조건이 참이어야 배울 수 있음
skill의 길이는 1이상 26이하, 스킬 중복x
return 가능한 스킬 트리의 개수
*/
    
/*
스킬트리의 원소를 배열로 받음
스킬의 문자열과 배열의 원소를 비교하여 같으면 제거 -> 계속 arr[0]으로 비교 
if(선행 스킬이 필요하지 않음) continue
if(선행 스킬이 필요한데 배우지않음) break
*/