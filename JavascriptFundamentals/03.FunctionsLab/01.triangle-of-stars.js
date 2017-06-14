function solve (n) {
    let height = (n * 2) - 1;
    for (let i = 1; i <= n; i++) {
        printStars(i);
    }

    for (let i = n - 1; i >= 1 ; i--) {
        printStars(i);
    }


    function printStars(amount) {
        console.log('*'.repeat(amount));
    }
}
