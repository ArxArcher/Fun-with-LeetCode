var line = [];
var howManyPeople = 10;
// make the line
for (var i = 1; i <= howManyPeople; i++) {
    line.push(i);
}


var pickedConsumer = 2,
    consumerIndex = pickedConsumer - 1,
    nextOne = 4,
    interval = nextOne - 1,
    totalBreads = 25;

var consumers = [];

// if no bread left or no one's in line, break the loop
while (totalBreads > 0 && line.length != 0) {

    // convert consumerIndex if consumerIndex >= line.length
    if (consumerIndex >= line.length) {
        consumerIndex = consumerIndex % line.length;
    }

    // log picked consumer & remove him from line
    consumers.push(line[consumerIndex]);
    line.splice(consumerIndex, 1);

    // pick next consumer & consume one bread
    consumerIndex = consumerIndex + interval;
    totalBreads--;
}

console.log('final consumers');
console.log(consumers);
console.log('breads left :', totalBreads);
console.log('unsatisfied customers:', line.length == 0 ? 'none' : line);

