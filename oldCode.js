var allRows =document.querySelectorAll('tr')
allRows.forEach(function(row){
   row.querySelectorAll('td').forEach(function(square){
       square.addEventListener('click',function(e){
           square.textContent = 'X'
       })
   })
})