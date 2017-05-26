function solve(n) {

    let horizontalBorder = '+'
        + '-'.repeat(n - 2) + '+'
        + '-'.repeat(n - 2) + '+';

    let outputLines =
        n % 2 === 0
            ? n - 1
            : n;

    let squareBodyLines =
        outputLines <= 4
            ? 0
            : (outputLines - 3) / 2;

    for (let i = 0; i < 3; i++) {
        console.log(horizontalBorder);
        if (i === 2) {
            break;
        }

        for (let i = 0; i < squareBodyLines; i++) {
            let sqareBody = '|'
                + ' '.repeat(n - 2) + '|'
                + ' '.repeat(n - 2) + '|';
            console.log(sqareBody);
        }
    }
}