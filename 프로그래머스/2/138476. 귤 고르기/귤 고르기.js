function solution(k, tangerine) {
    let size_count = {}; //인덱스별로 몇번 등장하는지 
    
    for(let i=0; i<tangerine.length; i++){
        let size=tangerine[i]
        if(size_count[size] !== undefined){ //size_count[size] = key
            size_count[size] +=1; //value
        } 
        else{
            size_count[size] = 1
        }
    }
    let size_sort = Object.values(size_count).sort((a,b) => b-a) // key의 value가 큰 순으로 정렬
    let sum_count=0; //k를 채울 수 있는 크기의 종류 값
    let result=0; //크기의 종류의 갯수
    
    for(let j=0; j<size_sort.length; j++){
        sum_count +=size_sort[j]
        result++;
        if(sum_count >=k)
            break;
    }
    return result;
}

//1. tangerine의 객체를 key값으로 두고 동일한 객체가 몇번 씩 나온느지를 value로 지정함 -> 딕셔너리 자료구조
//2. size_count라는 객체를 선언하고 tangerine배열을 반복해서 key값을 선언함
//3. size_count의 value값(=Oject.values)을 정렬하여 많이 중복된 순으로 나열
//4. size_sort의 객체 값(크기의 종류)을 k보다 커지거나 같아질 때까지 더함
//5. 같거나 커질 경우, 최소의 크기의 종류값이 나오므로 return