var allRows =document.querySelectorAll('tr')
var isXorY = false
allRows.forEach(function(row,i){
  
   row.querySelectorAll('td').forEach(function(square,squareIndex){
    
       square.addEventListener('click',function(e){
           //check if the square is empty 
         
           if(checkHorizontallyForAllRows()||checkVerticallyForAllColumns()||checkDiagonallyFromLeftToRight()||checkDiagonallyFromRightToLeft()){
               alert('the game is end')
               return;
           } 
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
        if(!checkHorizontallyForOneRow(i)){
        if(!checkVerticallyForOneColumn(squareIndex)){
            if(!checkDiagonallyFromLeftToRight(squareIndex)){
                checkDiagonallyFromRightToLeft()
            }
        }
    }
    
       })
   
   })
  
})
document.querySelector('#one').addEventListener('change',function(e){
   document.querySelector('#x').textContent = e.target.value
   e.target.value = ""
})
document.querySelector('#tow').addEventListener('change',function(e){
    document.querySelector('#o').textContent = e.target.value
    e.target.value = ""
 })
document.querySelector('#reset').addEventListener('click',function(e){
  reStartTheGame()
})
function reStartTheGame(){
    allRows.forEach(function(row){
        row.querySelectorAll('td').forEach(function(square){
            square.innerHTML=`<button></button>`
        })
    })
}
//check horizontally 
//1-check for one row
//console.log(allRows[0].querySelectorAll('td'))
function checkHorizontallyForOneRow(rowIndex){
    var checkMe = false
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
       if(isAllX===3){
           document.querySelector('#xScore').textContent=1
       }
       if(isAllO===3){
        document.querySelector('#oScore').textContent=1
    }
       checkMe=true
    allRows[rowIndex].querySelectorAll('td').forEach(function(square){
       square.style = "background-color: yellow;"
        
     })
   }
   return checkMe
}
function checkHorizontallyForAllRows(){
    var checkMe = false
    allRows.forEach(function(row,rowIndex){
        if(checkHorizontallyForOneRow(rowIndex)){
            checkMe = true
        }
    })
    return checkMe
}
function checkVerticallyForOneColumn(squareIndex){
    //each column is the first three elements in each row
    var checkMe = false
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
    if(isAllX===3){
        document.querySelector('#xScore').textContent=1
    }
    if(isAllO===3){
     document.querySelector('#oScore').textContent=1
 }
      checkMe=true
allRows.forEach(function(row){
    row.querySelectorAll('td').forEach(function(square,i){
        if(i===squareIndex){
            square.style = "background-color: yellow;"
        }
    })
})
}
return checkMe
}
function checkVerticallyForAllColumns(){
    var checkMe = false
    allRows.forEach(function(row){
        row.querySelectorAll('td').forEach(function(square,i){
            if(checkVerticallyForOneColumn(i)){
                checkMe=true
            }
        })
    })
    return checkMe
}

function checkDiagonallyFromLeftToRight(){
    //the square index could be one or two or three
    //check 0-1-2 or check 2-1-0
    var checkMe = false
    var isAllX=0
    var isAllO=0 
    allRows.forEach(function(row,rowIndex){
       var square = row.querySelectorAll('td')[rowIndex]
       if(square.textContent==='X'){isAllX++}
       if(square.textContent==='O'){isAllO++}
    })
     if(isAllX===3||isAllO===3){
        if(isAllX===3){
            document.querySelector('#xScore').textContent=1
        }
        if(isAllO===3){
         document.querySelector('#oScore').textContent=1
     }
         checkMe = true
        allRows.forEach(function(row,rowIndex){
            var square = row.querySelectorAll('td')[rowIndex]
            square.style = "background-color: yellow;"
         })
     }
     return checkMe
}

function checkDiagonallyFromRightToLeft(){
    var checkMe = false
    var isAllX=0
    var isAllO=0 

    var count =allRows.length-1
    for(var i=0;i<allRows.length;i++){
        var square = allRows[i].querySelectorAll('td')[count]
        if(square.textContent==='X'){isAllX++}
        if(square.textContent==='O'){isAllO++}
        count--
    }
    if(isAllX===3||isAllO===3){
        if(isAllX===3){
            document.querySelector('#xScore').textContent=1
        }
        if(isAllO===3){
         document.querySelector('#oScore').textContent=1
     }
        checkMe = true
        var count =allRows.length-1
        allRows.forEach(function(row){
           var square = row.querySelectorAll('td')[count]
           square.style = "background-color: yellow;"
           count--
        })
     }
    return checkMe
}
