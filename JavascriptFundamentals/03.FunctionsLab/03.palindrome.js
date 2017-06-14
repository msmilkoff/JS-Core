function solve(word) {

    console.log(isPalindrome(word));

    function isPalindrome(word) {
        let leftIndex = 0;
        let rightIndex = word.length - 1;

        while (rightIndex >= leftIndex) {
            if (word[leftIndex] !== word[rightIndex]) {
                return false;
            }

            leftIndex++;
            rightIndex--;
        }

        return true;
    }
}