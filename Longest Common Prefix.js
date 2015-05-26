/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var sl = strs.length;
    var round = 0;
    var result = '';

    if(sl === 0) return '';


    while (sl >= round){

        var tempCommon = strs[0].charAt(round);
        var allSame = true;

        for (var i = 1; i < sl; i++) {

            var theChar = strs[i].charAt(round);

            if (tempCommon !== theChar) {
                allSame = false;
                break;
            }
        }


        if (!allSame) {
            break;
        }


        result += tempCommon;
        round++;

    } ;
    return result;

};


console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["abca","abc"]));
// console.log(longestCommonPrefix(["a", "a", "b"]));
// console.log(longestCommonPrefix(["a", "a"]));
// console.log(longestCommonPrefix(["abca", "abc"]));
// console.log(longestCommonPrefix(["ac", "ac", "a", "a"]));
