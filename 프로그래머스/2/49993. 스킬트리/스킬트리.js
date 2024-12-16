function solution(skill, skill_trees) {
    let answer = skill_trees.length;
    
    skill_trees.forEach((skillTree) => {
        let arr = skill.split ("");
        
        for(let i=0; i<skillTree.length; i++){
            if(!arr.includes(skillTree[i])){
                continue;
            }
            if(arr.shift() !== skillTree[i]){
                answer--;
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
스킬의 원소를 배열로 변경
스킬의 첫번째와 스킬트리의 원소가 일치하면 제거 => 계속 arr[0]과 비교
일치하는걸 찾는게 아니라 일치하지 않는걸 찾는게 더 빠름

if(해당 스킬이 선행스킬에 존재하지 않는다) continue
if(해당 스킬이 선행스킬에 존재o, 그러나 순서가 일치하지 않는다) break
skill_trees.length-1;
*/