function solve(input) {
    let number = Number(input[0]);
    let string = '';
    for (let i = 1; i <= number; i++) {
        string += i;
    }

    console.log(string);
}