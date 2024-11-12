function solution(str1, str2) {
    let arr1 = [], arr2 = [];
    let inter_count = 0, union_count = 0;
    str1 =str1.toLowerCase();
    str2 =str2.toLowerCase();
    
    //두 글자씩 끊어서 다중집합의 원소로 만들기
    for(let i=0; i<str1.length-1; i++){
        arr1.push(str1.slice(i,i+2));
    };
    arr1 = arr1
    .filter(element => !/[0-9\W\s\_]/.test(element));
    
    
    for(let i=0; i<str2.length-1; i++){
        arr2.push(str2.slice(i,i+2));
    };
    arr2 = arr2
    .filter(element => !/[0-9\W\s\_]/.test(element));
   

    //둘 다 공집합일 경우 자카드 유사도를 1로 정의
    if(arr1.length===0 && arr2.length===0){
        return 65536;
    }
    
    //교집합찾기
    arr1.forEach(index => {
        if(arr2.includes(index)){
            inter_count++;
            arr2[arr2.indexOf(index)] = '.';
        }  
    })
    
    //합집합찾기
    union_count = arr1.length+arr2.length - inter_count;
 
    return  Math.floor((inter_count/union_count)*65536);
}
