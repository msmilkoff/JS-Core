function solve(input) {
    let feet = input / 12;
    let inches = input % 12;

    console.log(`${Math.floor(feet)}'-${inches}"`);
}