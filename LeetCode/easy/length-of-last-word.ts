//leet code:: https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
    let count = 0;

    for(let i = s.length -1; i >= 0; i--) {
        if(s[i] != " ") {
            count++
        }
        if(s[i] === " " && count > 0) break;
    }

    return count;
};
