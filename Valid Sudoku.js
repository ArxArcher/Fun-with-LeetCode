/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    var
        somethingWrong = false,

        checker = function(strs) {

            for (var j in strs) {
                for (var i = 1; i < 10; i++) {
                    // console.log('is', i, 'redundent?');

                    var checkNum = new RegExp(i, 'g'),
                        checkResult = strs[j].match(checkNum);

                    if (checkResult !== null && checkResult.length > 1) {
                        somethingWrong = true;
                        break;
                    }
                }

                if (somethingWrong) {
                    break;
                }
            }
        }

    ;


    // make row array
    // console.log('row');
    var row = [];

    for (var x = 0; x < 9; x++) {

        row.push(board[x].join(''));
    }

    // check row array
    checker(row);
    if (somethingWrong) {
        return false;
    }


    // make column array
    // console.log('column');
    var column = [];

    for (var y = 0; y < 9; y++) {

        var temp = [];

        for (var x = 0; x < 9; x++) {
            temp.push(board[x][y]);
        }

        column.push(temp.join(''));
    }
    // console.log('column\n', column);


    // check column array
    checker(column);
    if (somethingWrong) {
        return false;
    }


    // make square array
    // console.log('square');
    var square = [],

        temp1 = [],
        temp2 = [],
        temp3 = []

    ;

    for (var x = 0; x < 9; x++) {

        for (var y = 0; y < 9; y++) {

            if (y < 3) {
                temp1.push(board[x][y]);
            } else if (y < 6) {
                temp2.push(board[x][y]);
            } else if (y < 9) {
                temp3.push(board[x][y]);
            }

        }

        if (x % 3 === 2) {

            square.push(temp1.join(''));
            square.push(temp2.join(''));
            square.push(temp3.join(''));

            temp1 = [];
            temp2 = [];
            temp3 = [];
        }

    }
    // console.log('square\n', square);

    // check square array
    checker(square);
    if (somethingWrong) {
        return false;
    }

    return true;
};

console.log(isValidSudoku(
    [
        ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
        ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
        ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
        ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.']
    ]
));
