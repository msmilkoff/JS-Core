function solve(input) {
    console.log(sum(input));
    console.log(sumInverse(input));
    console.log(concatNumbers(input));

    function sum(array) {
        return array.reduce((a, b) => a + b);
    }

    function sumInverse (array) {
        let invernseSum = 0;
        for (let i = 0; i < array.length; i++) {
            invernseSum += 1 / array[i];
        }

        return invernseSum;
    }

    function concatNumbers(array) {
        return array.reduce((a, b) => a + '' + b);
    }
}