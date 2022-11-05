var timer;
var timeE = document.getElementById('Timer');

function countdownTimer(){
    var sec = 30;
    timer = setInterval (() => {
        timeE.innerHTML = '00:'+ sec;
        sec --;
    }, 1000)
}
setInterval(countdownTimer, 1000);

document.addEventListener('click', startTheGame)

 function startTheGame(mouseEvent) {
    document.querySelector('#startbtn').style.display = "none"
}

function createTabMaze(){
    var rowIndex = 0;
    var colIndex = 0;
    let table = document.querySelector('.codeThis');
    let mazeLayout = document.createElement('tbody');
        for (i = rowIndex; i <= 11; i++){
            let row = document.createElement('tr');
            
            for (j = colIndex; j <= 15; j++){
                let sideRows = document.createElement('td');
                sideRows.style.width = '5em'
                sideRows.style.height = '3.9em'
                sideRows.style.backgroundColor = 'white'
                row.appendChild(sideRows)
            }
            table.appendChild(row)
        }

        document.body.appendChild(mazeLayout)
}

