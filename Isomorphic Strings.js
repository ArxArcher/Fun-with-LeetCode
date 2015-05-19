/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if (s.length === 0) {
        return true;
    }


    var map = {};

    for (var i in s) {
        var key = s.charAt(i);
        if (map[key] === undefined) {
            map[key] = t.charAt(i);
        } else if (map[key] !== t.charAt(i)) {
            return false;
        }
    }

    var reverseMap = {};

    for (var i in map) {
        var key = map[i];
        if (reverseMap[key] === undefined) {
            reverseMap[key] = i;
        } else if (reverseMap[key] !== i) {
            return false;
        }
    }

    var t2 = [];

    for (var i in t) {
        t2.push(reverseMap[t.charAt(i)]);
    }

    t2 = t2.join('');

    if (t2 == s) {
        return true;
    }
    return false;
};


console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("aa", "bb"));
console.log(isIsomorphic("", ""));
console.log(isIsomorphic("ab", "aa"));
