function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            answer.push(numbers[i] + 1); // 짝수일 경우 +1
        } else {
            let current = "0" + numbers[i].toString(2); // 0 추가 (0이 없을 수도 있기 때문)

            for (let j = current.length - 1; j >= 0; j--) {
                if (current[j] === '0') { 
                    // 현재 문자열을 배열로 변환 후 변경
                    let arr = current.split("");
                    arr[j] = '1'; // 0을 1로 변경
                    arr[j + 1] = '0'; // 오른쪽 비트를 0으로 변경
                    current = arr.join(""); // 다시 문자열로 변환

                    answer.push(parseInt(current, 2)); // 2진수를 정수로 변환 후 저장
                    break;
                }
            }
        }
    }

    return answer;
}


/*
f(x) = x보다 크고 x와 비트가 1~2개 다른 수 중에서 가장 작은 수
맨 오른쪽 부터 탐색
1. 짝수 -> 제일 마지막이 0이므로 1로 변환
2. 홀수 -> 처음 나오는 0을 기준으로 01을 10으로 변환
*/

/*
1.x를 2진수으로 변환
1. 짝수 일 경우 마지막이 0이니까 무조건 1로 변환하면 됨 -> 2진수에서 +1하는거랑 동일
2. 홀수 일 경우 처음으로 나온 0을 1로 바꾸고 왼쪽을 0으로 바꾸면됨 01->10
3. 2번에서 111과 같이 0이 없을 경우를 대비해, 제일 앞에 0을 붙임
*/
