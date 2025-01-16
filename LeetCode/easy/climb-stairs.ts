function climbStairs(n: number): number {
    //Time limit Exceed
    // if(n === 1 || n === 2) return n;
    // else return climbStairs(n -1) + climbStairs(n -2)

    if(n <= 3) return n;

    let prev = 1;
    let current = 1;
    for(let i = 2; i <= n; i++) {
        let temp = current; 
        current = prev + current;
        prev = temp;
    }

    return current;
};
