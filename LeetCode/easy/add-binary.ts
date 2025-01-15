function addBinary(a: string, b: string): string {
    let result = "";
    let lenA = a.length -1;
    let lenB = b.length -1;
    let carry = 0;

    while(lenA >= 0 || lenB >= 0 || carry > 0) {
        let bitA = lenA >= 0 ? parseInt(a[lenA]) : 0;
        let bitB = lenB >= 0 ? parseInt(b[lenB]) : 0;

        const sum = bitA + bitB + carry;

        result = (sum % 2).toString() + result;
        carry = Math.floor(sum / 2);

        lenA--;
        lenB--;
    }

    return result;
};
