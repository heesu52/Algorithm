function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<n ; i++){
        const arr = (arr1[i]|arr2[i]).toString(2);
        let string=[];
        //n자리수에 미치지 못할 경우 제일 앞에 0이 있어야함
        for(let j=arr.length-n; j<arr.length; j++){ //arr[-1]일 경우 " "이 push되도록 해야함
            if(arr[j]==="1"){
                string.push("#")
            }
            else{
                string.push(" ")
            }
        }
        answer.push(string.join(""))
    }
    return answer;
}
         