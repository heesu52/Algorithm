function solution(arr1, arr2) {
    const newArr = [];
    
    for(let i=0; i<arr1.length; i++){
        let result = []; 
        for(let j=0; j<arr2[0].length; j++){
            let sum = 0;
            for(let k=0; k<arr2.length; k++){
               sum += arr1[i][k] * arr2[k][j]; //행열의 곱
            }
            result.push(sum);
        }
        newArr.push(result);
    }
    return newArr;
}
//기본적인 행렬의 곱셈과 동일
//arr1의 행과 arr2의 열을 곱함
//(arr1[i][j] * arr2[i][j]) + (arr1[i][j+1] * arr2[i+1][j]) return[i][j]
//(arr1[i][j] * arr2[i][j+1]) + (arr1[i][j+1] * arr2[i+1][j+1]) return[i][j+1]