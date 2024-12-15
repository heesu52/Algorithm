function solution(order) {
    const sub_trailer = [];
    let postnum = 0;

    for(let i=1; i<=order.length; i++){
        sub_trailer.push(i);
        
        //보조 트레이어에 있는 택배번호중 order와 일치하는게 계속 있을때까지 진행
        while(sub_trailer.length !==0 && sub_trailer[sub_trailer.length-1] === order[postnum]){
            sub_trailer.pop();
            postnum++;
        }
    }
    return postnum;
    
    
}

//메인 트레이어 오름차순으로 택배가 오며 order순으로 택배를 내보내야함
//보조 트레이어는 스택구조
//메인->보조 이동 가능
//보조->메인 이동 불가능

/*
먼저 들어오는 택배를 무조건 보조 트레이어 올리고 만약 택배번호와 일치한다면 pop & answer++
번호가 일치하지 않다면 그냥 냅두면 됨
*/