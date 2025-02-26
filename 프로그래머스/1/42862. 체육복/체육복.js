function solution(n, lost, reserve) {
    let filter_lost = lost.filter(i=>!reserve.includes(i));
    let filter_reserve = reserve.filter(i=>!lost.includes(i));
    
    console.log(filter_lost);
    console.log(filter_reserve);
}


/*
체육복은 바로 앞/뒷번호 학생에게만
최대한 많은 학생이 체육복을 가지고 있도록
여벌 체육복을 가진 학생이 도둑맞을 수 있음 = 빌려줄수x
*/

/*
1. reserve에 있는 학생이 lost에도 있는지 확인 후 제거
2. lost와 reserve를 오름차순으로 정렬(앞/뒷번호만 줄 수 있기 때문에)
3. n에서 lost.length만큼 제외
4. reserve의 인덱스 값이 lost에 앞이나 뒤에 잇을 경우 앞에서부터 차례대로 삭제 & n++
5. reserve에서 해당 인덱스 삭제
6. 만약 빌려준 경우, 더 빌릴 필요가 없기 때문에 break;
*/
