function solution(n, m, section) {
    let count = 0;
    
    let paint = new Array(n).fill(1);
    
    section.forEach(index =>{
        paint[index-1] = 0; //section에 포함된 인덱스는 0으로 변경
    })
    
    for(let i=0; i<paint.length; i++){
        if(paint[i]===0){ //만약 0이라면
             count++; //칠한횟수++
            i +=m-1; //m롤러의 길이만큼 건너뛰기(롤러의 길이만큼은 칠해졌으므로 패스)
        }
    }
    return count;
    
}

//길이가 N만큼인 배열을 1로 채우고, section에 해당하는 인덱스만 0으로 변경
// 0으로 시작하는 인덱스부터 m만큼의 길이를 다시 1로 변경
// 한번칠할때마다 count++
// 0으로 된 인덱스가 없다면 종료