//  Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    // // a very good example
    // var dummy = new ListNode(0);
    // dummy.next = head;

    // var temp = dummy;

    // var i = 0;
    // while (temp !== null && i < n) {
    //     temp = temp.next;
    //     i++;
    // }
    // if (temp === null) return dummy.next;

    // var slow = dummy;
    // while (temp.next !== null) {
    //     temp = temp.next;
    //     slow = slow.next;
    // }
    
    // slow.next = slow.next.next;
    // return dummy.next;


    if (n === 0 || head.next === undefined) {
        return head;
    }


    // 以下兩個緩衝元素 
    var head0 = new ListNode(0);
    head0.next = head;

    var headMinus1 = new ListNode(-1);
    headMinus1.next = head0;


    var p1 = headMinus1; // 先跑者
    var p2 = headMinus1; // 正常跑者


    // 讓先跑者距離起點 n個 
    for (var i = -1; i < n - 1; i++) {
        p1 = p1.next;
    }

    // 正常跑者才加入 & 兩者同步推進 

    while (p1.next !== null) { // 直到先跑者後繼無人
        p1 = p1.next;
        p2 = p2.next;
    }

    // 此時正常跑者正好指到要被刪除者的前一個位置，直接用下下一個取代下一個 = 覆蓋掉/刪除掉目標
    p2.next = p2.next.next;


    // 基於head本身可能已被刪掉(串列內只有一個元素，又得要刪一個元素的可能情況)，
    // 不要回傳head，從緩衝元素最前端數兩格回傳

    // return headMinus1.next.next;
    return head0.next; // 意思同上，但運算速度應該稍快一點?

}


var c1 = new ListNode(1);
c1.next = null;

console.log('');
console.log(removeNthFromEnd(c1, 1));
