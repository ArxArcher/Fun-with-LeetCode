/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

	var n = s.length;
    if (numRows <= 1 || numRows >= n) return s;

    var result = '',
        repo = {},        
        pointer = 1,
        pointerDirection = 1;


    for (var i = 1; i <= numRows; i++) {
        repo[i] = '';
    }

    for (var j = 0; j < s.length; j++) {

        repo[pointer] += s.charAt(j);

        if (pointer == 1) {
            pointerDirection = 1;
        } else if (pointer == numRows) {
            pointerDirection = -1;
        }
        pointer += pointerDirection;
    }

    console.log(repo);

    for (var i = 1; i <= numRows; i++) {
        result += repo[i];
    }

    console.log(result);
    return result;
};

convert("AB", 1);
