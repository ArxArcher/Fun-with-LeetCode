/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    s = s.trim();
    var repo = s.split(/\s/g),
        rl = repo.length;

    return repo[rl - 1].length;
};



console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("a"));
