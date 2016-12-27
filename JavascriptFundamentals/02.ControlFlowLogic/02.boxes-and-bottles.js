function solve(input) {
    let numberOfBottles = input[0] | 0;
    let boxCapacity = input[1] | 0;

    let boxesNeeded;
    if (numberOfBottles <= boxCapacity) {
        console.log(1);
    }
    else {
        if (numberOfBottles % boxCapacity === 0) {
            console.log(numberOfBottles / boxCapacity);
        }
        else {
            console.log(Math.floor(numberOfBottles / boxCapacity + 1));
        }
    }
}