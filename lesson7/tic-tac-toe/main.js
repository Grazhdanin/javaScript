const equals3 = (a, b, c) => {
    return (a == b && b == c && a != '');
}

const checkWinner = (model) => {
    let winner = null;
    let tmpD = [];
    let tmpR2 = [];
    let draw = [];

    for (let i = 0; i < model[0].length; i++) {
        let xSet = new Set(model[i]);
        if (xSet.size == 1) {
            if (model[i][0] != '') {
                return model[i][0];
            }
        }
        let tmp = [];
        for (let j = 0; j < model[0].length; j++) {
            tmp.push(model[j][i]);
            if (tmp.length == model[0].length) {
                let ySet = new Set(tmp);
                if (ySet.size == 1) {
                    if (model[j][i] != '') {
                        return model[j][i];
                    }
                } else {
                    tmp = [];
                }
            }
        }

        tmpD.push(model[i][i]);
        if (tmpD.length == model[0].length) {
            let tmpDSet = new Set(tmpD);
            if (tmpDSet.size == 1) {
                if (model[i][i] != '') {
                    winner = model[i][i];
                    return winner;
                }
            }
        }

        tmpR2.push(model[i][model[0].length - i - 1]);
        if (tmpR2.length == model[0].length) {
            let tmpR2Set = new Set(tmpR2);
            if (tmpR2Set.size == 1) {
                if (model[i][model[0].length - i - 1] != '') {
                    winner = model[i][model[0].length - i - 1];
                    return winner;
                }
            }
        }

        model[i].forEach(element => {
            draw.push(element);
        });

        if (i + 1 == model[0].length) {
            let drawSet = new Set(draw);
            if (!drawSet.has('')) {
                return 0;
            }
        }

    }
}

const game = () => {
    const model = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    const playerX = 'X';
    const playerO = 'O';
    let currentPlayer = playerX;

    const $game = document.querySelector('#game');
    const $table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const $tr = document.createElement('tr');
        $tr.dataset.index = i;

        for (let j = 0; j < 3; j++) {
            const $td = document.createElement('td');
            $td.dataset.index = j;
            $tr.appendChild($td);
        }

        $table.appendChild($tr);
    }

    $game.appendChild($table);

    $table.addEventListener('click', (e) => {
        const row = e.target.parentNode.dataset.index;
        const column = e.target.dataset.index;

        // 2. check if td assigned -- done
        if (e.target.innerHTML == '') {
            model[row][column] = currentPlayer;
            e.target.innerHTML = currentPlayer;

            const winner = checkWinner(model);
            if (winner != null) {
                if (winner == 0) {
                    alert('This is the end. Draw!')
                } else {
                    alert(`Winner: ${winner}`);
                }
            }

            // 1. tie

            currentPlayer = currentPlayer === playerX ? playerO : playerX;
        }
    });
}

window.onload = () => {
    game();
};