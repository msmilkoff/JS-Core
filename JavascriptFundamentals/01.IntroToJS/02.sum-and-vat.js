function solve(input) {
    const tax = 0.2;

    let arr = input.map(Number);
    let sum = arr.reduce((a, b) => a + b, 0);
    let vat = sum * tax;
    let total = sum * 1.20;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}