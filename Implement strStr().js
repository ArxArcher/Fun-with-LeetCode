/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    return haystack.indexOf(needle);

};


console.log('Blue Whale'.indexOf('Blute'));
console.log(strStr('Blue Whale','Blute'));