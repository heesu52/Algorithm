function solution(sizes) {
    const width = [];
    const height = [];
    
    for(let i=0; i<sizes.length; i++){
        sizes[i].sort((a,b)=>b-a);
        width.push(sizes[i][0]);
        height.push(sizes[i][1]);
    }
    let MaxWidth = Math.max(...width);
    let MaxHeight = Math.max(...height);
    
    return MaxWidth * MaxHeight;
}

//가로와 세로를 비교하여 더 긴 것을 가로로 놔둠
//가로끼리 비교해서 제일 큰 값을 MaxWidth, 세로끼리 비교해서 제일 큰 값을 MaxHeight
//그 둘을 곱한 값을 result