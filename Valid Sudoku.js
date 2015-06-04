/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    // an excellent example
    // http://www.cnblogs.com/Liok3187/p/4513428.html


    /*
        function isValid(num, flag) {
            var tmp = Math.pow(2, num - 1);
            if ((flag.val & tmp) !== 0) {
                return false;
            } else {
                flag.val = flag.val | tmp;
                return true;
            }
        }

        var i = 0,
            j = 0,
            m = 0,
            n = 0,
            cell = 0;

        var row = {
                val: 0
            },
            column = {
                val: 0
            },
            square = {
                val: 0
            };

        for (i = 0; i < 9; i++) {
            for (j = 0; j < 9; j++) {
                cell = parseInt(board[i][j]);
                if (!isValid(cell, row)) {
                    return false;
                }
                cell = parseInt(board[j][i]);
                if (!isValid(cell, column)) {
                    return false;
                }
                cell = parseInt(board[parseInt(i / 3) * 3 + parseInt(j / 3)][(i % 3) * 3 + (j % 3)]);
                if (!isValid(cell, square)) {
                    return false;
                }
            }
            row.val = column.val = square.val = 0;
        }
        return true;
    * /



    // first edition solution
    /*
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
    */



    //second edition solution

    var

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


    // make row array, column array & square array
    var
        somethingWrong = false,

        row = [],
        column = [],
        square = []

    ;


    for (var x = 0; x < 9; x++) {
        row.push(board[x].join('')); // row array

        var colTemp = [],
            squareTemp = [];

        for (var y = 0; y < 9; y++) {

            colTemp.push(board[y][x]);
            squareTemp.push(board[parseInt(x / 3) * 3 + parseInt(y / 3)][parseInt(x % 3) * 3 + parseInt(y % 3)]);
        }

        column.push(colTemp.join(''));
        square.push(squareTemp.join(''));
    }

    // check row array
    checker(row);
    if (somethingWrong) {
        return false;
    }

    // check column array
    checker(column);
    if (somethingWrong) {
        return false;
    }

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
