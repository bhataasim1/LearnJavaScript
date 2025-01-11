function longestCommonPrefix(s: string[]): string {
  if(!s.length) return "";
  
  let prefix = s[0];
  
  for(let i = 0; i < s.length; i++){
    
    while(s[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length -1);
      
      if(prefix === "") return "";
    }
  }
  
  return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
