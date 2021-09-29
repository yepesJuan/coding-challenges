
   function outputPyramid(rows,character){
    let row = character
    for( let i = 0; i < rows ; i++){
      console.log(row)
      row += character
    }
  }
  outputPyramid(5,"#") 