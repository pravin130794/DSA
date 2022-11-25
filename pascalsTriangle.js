const pascalsTriangle = (numOfRows) =>{
  const result = [];
  if(numOfRows === 0) return [];
  if(numOfRows === 1) return [[1]];
  for(let row = 1; row <= numOfRows; row++){
    let tempArray = [];
    for(let col = 0; col < row; col++){
      if(col === 0 || col === row - 1){
        tempArray.push(1)
      }
      else{
        tempArray.push((result [row-2][col-1] + result[row-2][col]));
      }
    }
    result.push(tempArray);
  }
return result;
}

console.log(pascalsTriangle(5))
