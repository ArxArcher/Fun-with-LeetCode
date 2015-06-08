/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

    var generator = function(str) {

        var
            prev = str[0],
            prevCount = 1,

            repo = []

        ;

        for (var i = 1; i <= str.length; i++) {
            var now = str[i];

            if (now !== prev) {
                repo.push(prevCount);
                repo.push(prev);

                if (now !== undefined) {
                    prev = now;
                    prevCount = 1;
                }

            } else {
                prevCount++;
            }
        }

        return repo.join('');
    };


    var nowStr = "1";

    for (var i = 1; i < n; i++) {
        nowStr = generator(nowStr);
    }

    return nowStr;
};


for (var i = 0; i < 10; i++) {

    console.log(countAndSay(i));
}
