/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    var
        nowAt = 0,
        fetcher = 0

    ;

    while (fetcher < nums.length) {

        if (nums[fetcher] !== val) {
            nums[nowAt] = nums[fetcher];
            nowAt++;
        }
        fetcher++;
    }

    return nowAt;
};


console.log(removeElement([4, 5], 4));
