
document.addEventListener('click', startTheGame)

 function startTheGame(mouseEvent) {
    document.querySelector('#startbtn').style.display = "none"
}

function createTabMaze(){
    var rowIndex = 0;
    var colIndex = 0;
    let table = document.querySelector('.codeThis');
    let mazeLayout = document.createElement('tbody');
        for (i = rowIndex; i <= 10; i++){
            let row = document.createElement('tr');
            
            for (j = colIndex; j <= 10; j++){
                let cell = document.createElement('td');
                cell.setAttribute('id', 'cell'+`${i}${j}`)
                cell.setAttribute('class', "cellStyle")
                cell.onclick = (e) => {
                    cell.style.backgroundColor = '#471f1c'
                }
                console.log(cell)
                row.appendChild(cell)
            }
            table.appendChild(row)
        }

        document.body.appendChild(mazeLayout)

        
}

// function winTheGame (){
//    var color = '#471f1c'
//    let winningSequence = ['#cell00', '#cell10', '#cell20', '#cell21', '#cell31', '#cell41', '#cell42', '#cell43', '#cell44', '#cell45', '#cell46', '#cell56', '#cell66', '#cell67', '#cell77', '#cell78', '#cell79', '#cell89', '#cell99', '#cell910', '#cell1010']
//      for (winningSequence[i].style.backgroundColor == color){
    
//}
//}

