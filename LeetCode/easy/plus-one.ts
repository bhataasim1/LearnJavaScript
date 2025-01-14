// leetcode:: https://leetcode.com/problems/plus-one/solutions/6278309/easy-solution-in-typescript/

function plusOne(digits: number[]): number[] {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
    }
    
    const newDigits = new Array(digits.length + 1).fill(0);
    newDigits[0] = 1;

    return newDigits;
};
