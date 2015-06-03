/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {


	// "It doesn't matter what you leave beyond the new length. " solution
    var
        nowAt = 0,
        fetcher = 1;


    while (fetcher < nums.length) {
        if (nums[nowAt] !== nums[fetcher]) {
            nowAt++;
            nums[nowAt] = nums[fetcher];
        }
        fetcher++;
    }

    return ++nowAt;

    // "Honest" solution
    // var
    //     nowAt = nums.length - 1,
    //     prev,
    //     myKind
    // ;


    // while (nowAt > -2) {

    //     myKind++;

    //     if (nums[nowAt] !== prev) {
    //         nums.splice(nowAt + 1, myKind - 1);
    //         myKind = 0;

    //         prev = nums[nowAt];
    //     }

    //     nowAt--;
    // }

    // return nums.length;


};


console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1, 1]));
console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4]));
