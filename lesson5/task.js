function createChessDesk() {

    let body = document.getElementsByTagName('body')[0];
    body.style.textAlign = 'center';
    let table = document.createElement('table');
    table.style.padding = 0;

    table.setAttribute('cellspacing', "1");
    table.setAttribute("cellpadding", "0");

    let tableBody = document.createElement('tbody');
    tableBody.style.borderWidth = 0;

    let namesColumn = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let idx_row = 0; idx_row < 10; idx_row++) {
        let row = document.createElement('tr');

        for (let idx_cell = 0; idx_cell < 10; idx_cell++) {

            let cell = document.createElement('td');
            cell.style.width = '75px';
            cell.style.height = '75px';

            if (idx_row === 0 || idx_row === 9) {
                if (idx_cell != 0 && idx_cell != 9) {
                    cell.innerHTML = namesColumn[idx_cell - 1];
                }
                cell.style.backgroundColor = '#A46843';
            } else {
                if (idx_cell != 0 && idx_cell != 9) {
                    cell.setAttribute('id', namesColumn[idx_cell - 1] + idx_row);
                }
            }

            if (idx_cell === 0 || idx_cell === 9) {
                if (idx_row != 0 && idx_row != 9) {
                    cell.innerHTML = idx_row;
                }
                cell.style.backgroundColor = '#A46843';

            }

            if (idx_row != 0 && idx_row != 9 && idx_cell != 0 && idx_cell != 9) {

                let check = parseInt((idx_cell + idx_row) / 2);

                if (((idx_cell + idx_row) / 2) == check) {
                    cell.style.backgroundColor = '#370D00';
                } else {
                    cell.style.backgroundColor = '#BD8E62';
                }
                cell.style.fontSize = '60px';
            }
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    body.appendChild(table);
}

function chessPlacer() {
    let chessWhite = { 'king': '&#9812', 'queen': '&#9813;', 'rook': '&#9814;', 'bishop': '&#9815;', 'knight': '&#9816;', 'pawn': '&#9817;' };
    let chessBlack = { 'king': '&#9818;', 'queen': '&#9819;', 'rook': '&#9820;', 'bishop': '&#9821;', 'knight': '&#9822;', 'pawn': '&#9823;' };
    let namesColumn = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let logic = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];

    for (let step = 0; step < 9; step++) {
        document.getElementById(namesColumn[step] + '1').innerHTML = chessWhite[logic[step]];
        document.getElementById(namesColumn[step] + '2').innerHTML = chessWhite['pawn'];
        document.getElementById(namesColumn[step] + '7').innerHTML = chessBlack['pawn'];
        document.getElementById(namesColumn[step] + '8').innerHTML = chessBlack[logic[7 - step]];
    }
}

createChessDesk();
chessPlacer();