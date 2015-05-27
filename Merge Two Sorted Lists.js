/*
Definition
for singly - linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/ / @param {
    ListNode
}
l1@ param {
    ListNode
}
l2@
return {
    ListNode
}
*/
var mergeTwoLists = function(l1, l2) {

    if (l1 === null) {
        return l2;
    }

    if (l2 === null) {
        return l1;
    }


    var nowOn, comparer, lineHolder, result;


    if (l1.val < l2.val) {
        result = l1;
        nowOn = l1;
        comparer = l2;

    } else {
        result = l2;
        nowOn = l2;
        comparer = l1;
    }



    while (true) {

        if (nowOn.next === null) {
            nowOn.next = comparer;
            break;
        }

        if (nowOn.next.val > comparer.val) {

            lineHolder = nowOn.next;

            nowOn.next = comparer;
            nowOn = comparer;

            comparer = lineHolder;
        } else {
            nowOn = nowOn.next;
        }

    }

    return result;



};


var l1 = {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    },

    l2 = {
        val: 2,
        next: {
            val: 5,
            next: {
                val: 6,
                next: null
            }
        }
    };


console.log(JSON.stringify(mergeTwoLists(l1, l2)));
