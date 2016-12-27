function solve(input) {
    let number = Number(input);
    console.log(isPrime(number));

    function isPrime(number) {
        if (number <= 1) return false;
        if (number === 2) return true;

        let limit = Math.sqrt(number);
        for (let i = 2; i < limit; i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }
}