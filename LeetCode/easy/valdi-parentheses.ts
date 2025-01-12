function isValidParenthisis(s: string): boolean {
  
  let stack: string[] = [];
  
  const matchingParen = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  }
  
  for(let i = 0; i < s.length; i++) {
    let ch = s[i];
    
    if(ch === '(' || ch === '{' || ch === '['){
      stack.push(ch);
    }
    
    if(ch === ')' || ch === '}' || ch === ']') {
      
      if(stack.length === 0 || stack[stack.length -1] !== matchingParen[ch]) return false
      
      stack.pop();
    }
  }
  
  return stack.length === 0
}

console.log(isValidParenthisis('[]('))
