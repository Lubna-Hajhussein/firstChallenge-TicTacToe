var allRows =document.querySelectorAll('tr')
var isXorY = false
allRows.forEach(function(row,i){
   row.querySelectorAll('td').forEach(function(square,squareIndex){
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
        checkVerticallyForOneColumn(squareIndex)
        checkDiagonallyFromLeftToRight(squareIndex)
        checkDiagonallyFromRightToLeft()
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
allRows.forEach(function(row){
    row.querySelectorAll('td').forEach(function(square,i){
        if(i===squareIndex){
            square.style = "background-color: yellow;"
        }
    })
})
}
}

function checkDiagonallyFromLeftToRight(squareIndex){
    //the square index could be one or two or three
    //check 0-1-2 or check 2-1-0
    var isAllX=0
    var isAllO=0 
    allRows.forEach(function(row,rowIndex){
       var square = row.querySelectorAll('td')[rowIndex]
       if(square.textContent==='X'){isAllX++}
       if(square.textContent==='O'){isAllO++}
    })
    // //check 2-1-0
    // for(var i=allRows.length-1;i>=0;i--){
    //     for(var j=0;j<=allRows.length-1;j++){
    //         var square = allRows[j].querySelectorAll('td')[i]
    //         if(square.textContent==='X'){isAllX++}
    //         if(square.textContent==='O'){isAllO++}
    //     }
    // }
     if(isAllX===3||isAllO===3){
        allRows.forEach(function(row,rowIndex){
            var square = row.querySelectorAll('td')[rowIndex]
            square.style = "background-color: yellow;"
         })
     }
}

function checkDiagonallyFromRightToLeft(){
    var isAllX=0
    var isAllO=0 
     for(var i=allRows.length-1;i>=0;i--){
        for(var j=0;j<=allRows.length-1;j++){
            var square = allRows[j].querySelectorAll('td')[i]
            if(square.textContent==='X'){isAllX++}
            if(square.textContent==='O'){isAllO++}
        }
    }
    if(isAllX===3||isAllO===3){
        var count =allRows.length-1
        // allRows[0].querySelectorAll('td')[2].style = "background-color: yellow;"
        // allRows[1].querySelectorAll('td')[1].style = "background-color: yellow;"
        // allRows[2].querySelectorAll('td')[0].style= "background-color: yellow;"
        allRows.forEach(function(row){
           var square = row.querySelectorAll('td')[count]
           square.style = "background-color: yellow;"
           count--
        })
     }
}
// Implement the rules of Tic Tac Toe
// Before placing an X or O, ensure the clicked board square is empty. If the position is
//  already occupied, don't place an X or O and do not move on to the next player's turn.
// After each play, look for 3 in a row, either diagonally, horizontally and vertically.
//  Also be sure to check to see if the board is full.
// If either condition is met, display a message and do not allow any additional plays.