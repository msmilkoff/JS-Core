function solve(input){

    let word = input[0];
    let letter = input[1];

    let occurances = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            occurances++;
        }
    }

    console.log(occurances);
}