

function main() {
  let arr = [1,4,6,8,10,45], n = 6, target= 15;
  
  /* 
  if array is not in sort
  */
  // arr = arr.sort(function(a, b) {
  //   return a - b;
  // });
  for (let i = 0; i < n; i++) {
    let c = arr[i];
    let t = target - c;
    let s = i+1;
    let e = n-1;
    while (s<e) {
      if(arr[s] + arr[e] == t) return true;
      else if (arr[s] + arr[e] < t){
       s++;
      }else{
        e--;
      }
    }
  }
  return false;
}

console.log(main());
