function romanToInt(s: string): number {
    const m = new Map<string, number>;
        
    m['I'] = 1;
    m['V'] = 5;
    m['X'] = 10;
    m['L'] = 50;
    m['C'] = 100;
    m['D'] = 500;
    m['M'] = 1000;

    let res = 0;

    for(let i =0; i < s.length; i++) {
        if(m[s[i]] < m[s[i+1]]){
            res -= m[s[i]];
        } else {
            res += m[s[i]];
        }
    }

    return res
};
