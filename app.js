var allRows =document.querySelectorAll('tr')
var isXorY = false
allRows.forEach(function(row){
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
       })
   })
})
//check horizontally 

// Implement the rules of Tic Tac Toe
// Before placing an X or O, ensure the clicked board square is empty. If the position is
//  already occupied, don't place an X or O and do not move on to the next player's turn.
// After each play, look for 3 in a row, either diagonally, horizontally and vertically.
//  Also be sure to check to see if the board is full.
// If either condition is met, display a message and do not allow any additional plays.