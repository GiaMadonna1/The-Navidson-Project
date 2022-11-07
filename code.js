
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
                cell.ondblclick = (e) => {
                    cell.style.backgroundColor = '#B84437'
                }
                console.log(cell)
                row.appendChild(cell)
            }
            table.appendChild(row)
        }

        document.body.appendChild(mazeLayout)

        
}





