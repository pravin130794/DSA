#include <iostream>
using namespace std;




int solve(int arr[]){
  int maxSum = 0;
  int curSum = 0;
  int start =0, end = 0, s=0;
  int len = sizeof(arr);

  for (int i = 0; i < len; i++) {
     curSum = curSum + arr[i];
     if(curSum > maxSum){
       maxSum = curSum;
       start = s;
       end = i;
     }
     if(curSum < 0){
       curSum = 0;
       s = i + 1;
     }
  }
   cout << "Starting index "<< start
        << endl << "Ending index "<< end << endl;
  return maxSum;
}

int main() 
{
  int arr[] = { -2, -3, 4, -1, -2, 1, 5, -3};
    
   int x = solve(arr);
   cout << x << endl;
    return 0;
}