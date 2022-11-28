function palindrome(s,start,end) {

  if(start >= end){
    return true;
  } 
  
  if( s[start] != s[end]){
    return false;
  }
  
  return palindrome(s,start+1,end-1);

}


let str = 'noon';
console.log(palindrome(str,0,str.length-1))
str = 'nitin';
console.log(palindrome(str,0,str.length-1))
