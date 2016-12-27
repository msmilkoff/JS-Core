function solve(candidate) {
    let input = String(candidate[0]);
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    if (isFruit(input)){
        console.log('fruit');
    }
    else if (isVegetable(input)) {
        console.log('vegetable');
    }
    else {
        console.log('unknown');
    }

    function isFruit(candidate) {
        for (let i = 0; i < fruits.length; i++) {
            if (fruits[i] === candidate) {
                return true;
            }
        }

        return false;
    }

    function isVegetable(candidate) {
        for (let i = 0; i < vegetables.length; i++) {
            if (vegetables[i] === candidate) {
                return true;
            }
        }

        return false;
    }
}