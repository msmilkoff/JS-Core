function solve (input) {
    input = input.toUpperCase();
    console.log(extractWords(input));

    function extractWords(sentence) {
        let words = sentence.split(/\W/);
        return words.filter(w => w !== '')
                    .join(', ');
    }
}