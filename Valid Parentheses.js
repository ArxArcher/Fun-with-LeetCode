/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var valid = true,
        pair = {
            '(': ')',
            '[': ']',
            '{': '}'
        },
        nowWaitingFor = [];

    for (var i = 0; i < s.length; i++) {
        var nowChar = s.charAt(i);


        if (nowChar.match(/[(\[\{]/)) {
        	
            nowWaitingFor.unshift(pair[nowChar]);

        } else if (nowChar.match(/[)\]\}]/)) {

            if (nowWaitingFor[0] !== nowChar) {
                valid = false;
                break;
            } else {
                nowWaitingFor.splice(0, 1);
            }
        }


        // if (nowChar.match(/[()\[\]\{\}]/)) {

        //     if (nowChar === '(') {
        //         nowWaitingFor.unshift(')');
        //     } else

        //     if (nowChar === '[') {
        //         nowWaitingFor.unshift(']');
        //     } else

        //     if (nowChar === '{') {
        //         nowWaitingFor.unshift('}');
        //     } else


        //     if (nowChar === ')') {
        //         if (nowWaitingFor[0] !== nowChar) {
        //             valid = false;
        //             break;
        //         } else {
        //             nowWaitingFor.splice(0, 1);
        //         }
        //     } else

        //     if (nowChar === ']') {
        //         if (nowWaitingFor[0] !== nowChar) {

        //             valid = false;
        //             break;
        //         } else {
        //             nowWaitingFor.splice(0, 1);
        //         }
        //     } else

        //     if (nowChar === '}') {
        //         if (nowWaitingFor[0] !== nowChar) {
        //             valid = false;
        //             break;
        //         } else {
        //             nowWaitingFor.splice(0, 1);
        //         }
        //     }


        // }
    }

    if (nowWaitingFor.length !== 0) {
        valid = false;
    }

    return valid;
}


// console.log( isValid("(|)|[|]|{|}") );
// console.log( isValid(")(a}[") );

// console.log(isValid("([)]"));
// console.log(isValid("([])"));

console.log(isValid("["));
