function solve(input) {
    let nums = input.map(Number);

    nums.forEach(function(num) {
        console.log(Math.log2(num));
    }, this);
}