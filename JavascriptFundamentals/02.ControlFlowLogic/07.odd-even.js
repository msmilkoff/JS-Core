function solve(input) {
    let number = Number(input);
    if (number % 1 === 0) {
        if (number % 2 === 0) {
            console.log('even');
        }
        else {
            console.log('odd');
        }
    }
    else {
        console.log('invalid');
    }
}