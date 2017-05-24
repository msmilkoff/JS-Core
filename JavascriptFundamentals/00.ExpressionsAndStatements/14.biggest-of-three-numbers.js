function solve([first, second, third]) {
    let biggest = first;
    if (second > biggest) {
        biggest = second;
    }
    if (third > biggest) {
        biggest = third;
    }

    console.log(biggest);
}