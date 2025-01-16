function mySqrt(x: number): number {
    if(x === 0 || x === 1) return x;

    let start = 1;
    let end = x;

    while(start <= end) {
        let mid = Math.floor((start + end)/2);

        if(mid * mid === x) return mid;
        if(mid * mid > x) end = mid -1;
        else start = mid + 1;
    }

    return Math.floor(end);
};
