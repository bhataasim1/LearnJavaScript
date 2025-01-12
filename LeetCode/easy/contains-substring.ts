//leetcode:: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

function strStr(haystack: string, needle: string): number {
    if(haystack.includes(needle)){
        return haystack.indexOf(needle)
    }

    return -1
};
