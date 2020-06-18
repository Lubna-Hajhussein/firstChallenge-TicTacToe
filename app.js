var allRows =document.querySelectorAll('tr')
var isXorY = false
allRows.forEach(function(row,i){
   row.querySelectorAll('td').forEach(function(square){
       square.addEventListener('click',function(e){
           //check if the square is empty
           if(square.textContent==='X'||square.textContent==='O'){
               return square.textContent=square.textContent
           }
           if(isXorY===false||isXorY==='O'){
           square.textContent = 'X'
           isXorY = 'X'
        }else if(isXorY==='X'){
            square.textContent = 'O'
            isXorY = 'O'
        }
        checkHorizontallyForOneRow(i)
       })
   
   })
  
})
//check horizontally 
//1-check for one row
//console.log(allRows[0].querySelectorAll('td'))
function checkHorizontallyForOneRow(rowIndex){
    var isAllX =0
    var isAllO =0
   allRows[rowIndex].querySelectorAll('td').forEach(function(square){
      if(square.textContent==='X'){
          isAllX++
      }
      if(square.textContent==='O'){
          isAllO++
      }
   })
   if(isAllX===3||isAllO===3){
       console.log('hi')
    allRows[rowIndex].querySelectorAll('td').forEach(function(square){
       square.style = "background-color: yellow;"
        
     })
   }
}
function checkVerticallyForOneColumn(squareIndex){
    //each column is the first three elements in each row
   var isAllX=0
    var isAllO=0 
  allRows.forEach(function(row){
      row.querySelectorAll('td').forEach(function(square,i){
          if(i===squareIndex){
              if(square.textContent==='X'){
              isAllX++}
              if(square.textContent==='O'){
                  isAllO++
              }
          }
      })
  })
  if(isAllX===3||isAllO===3){
    console.log('hi')
 allRows[rowIndex].querySelectorAll('td').forEach(function(square){
    square.style = "background-color: yellow;"
     
  })
}
}
// Implement the rules of Tic Tac Toe
// Before placing an X or O, ensure the clicked board square is empty. If the position is
//  already occupied, don't place an X or O and do not move on to the next player's turn.
// After each play, look for 3 in a row, either diagonally, horizontally and vertically.
//  Also be sure to check to see if the board is full.
// If either condition is met, display a message and do not allow any additional plays.