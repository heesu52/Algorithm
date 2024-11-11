function solution(name, yearning, photo) {
    var answer = [];
    
    photo.forEach(index => {
        let count = 0;
       name.forEach((e,i) => {
           if(index.includes(e) === true){
               count+=yearning[i];
           }
           else{
               count +=0;
           }
       })
        answer.push(count);
    })
    return answer;
}