function solution(n, m, section) {
    let answer = 0;
    
    for(let i = 1; i <= n; i++) {
        if(section.includes(i)) {
            answer++;
            i = i + m - 1;
        }
    };
    
    return answer;
}