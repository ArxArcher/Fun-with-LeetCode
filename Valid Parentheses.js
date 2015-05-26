/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    var valid = true;


    var = {
        '(': 1,
        ')': -1,
        '[': 2,
        ']': -2,
        '{': 3,
        '}': -3
    };




    var prev = '';


    for (var i = 0; i < s.length; i++) {
        var nowChar = s.charAt(i);


        switch (nowChar) {
            // case '(':            	
            //     prev = nowChar;
            //     break;
            case ')':
                if (prve === '[' || prev === '{') {
                    valid = false;
                }
                prev = nowChar;
                break;
                // case '[':
                //     prev = nowChar;
                //     break;
            case ']':
                if (prve === '(' || prev === '{') {
                    valid = false;
                }
                prev = nowChar;
                break;
                // case '{':
                //     prev = nowChar;
                //     break;
            case '}':
                if (prve === '[' || prev === '(') {
                    valid = false;
                }
                prev = nowChar;
                break;
        }

        // if (nowChar.match(/[()]/)) {

        // }
        // if (nowChar.match(/[\[\]]/)) {

        // }
        // if (nowChar.match(/[\{\}]/)) {

    }
    // if (nowChar.match(/[()\[\]\{\}]/)) {}


}

console.log('repo', repo);


return valid;
};


console.log(isValid("(|)|[|]|{|}"));
