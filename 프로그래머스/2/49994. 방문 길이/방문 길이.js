function solution(dirs) {
    let acc = new Set();
    let min = -5, max = 5;
    let curX = 0, curY = 0;
    
    dirs.split("").forEach(dir => {
        let preX = curX;
        let preY = curY;
        
        switch(dir) {
            case "U":
                if (curY + 1 > max) break;
                curY++;
                break;
            case "D":
                if (curY - 1 < min) break;
                curY--;
                break;
            case "L":
                if (curX - 1 < min) break;
                curX--;
                break;
            case "R":
                if (curX + 1 > max) break;
                curX++;
                break;
        }
        
        // 양뱡향 이동 고려 (a->b 와 b->a는 같은 길)
        if (preX !== curX || preY !== curY) {  //실제로 이동했을 경우에만
            acc.add(`${preX},${preY},${curX},${curY}`);
            acc.add(`${curX},${curY},${preX},${preY}`);
        }
    });
    
    return acc.size / 2;  // 왕복 경로 중복 제거
}


//U[0,1] D[0,-1] L[-1,0] R[1,0]
//x랑 y가 5보다 크거나 -5보다 작으면 건너뜀
//출발x,y에 UDLR값을 더한 도착 x,y & visited에 해당 좌표가 없을 경우 answer++
//a->b 와 b->a는 같은 길