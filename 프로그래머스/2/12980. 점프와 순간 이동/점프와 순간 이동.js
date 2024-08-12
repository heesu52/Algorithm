function solution(n)
{
    var ans = 0;

    while(n>0){
        if(n%2===1){
            n = n-1 //나누는 수가 홀수일 때 -1을 해서 짝수로 변경
            ans++;
        }else{
            n = n/2;
        }
    }
    return ans;
}