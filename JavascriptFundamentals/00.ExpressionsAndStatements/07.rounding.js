function solve(input) {
    let num = Number(input[0]);
    let precision = Number(input[1]);

    if (precision > 15) {
        precision = 15;
    }

    let rounded = num.toFixed(precision);
    console.log(+rounded);
}