function solve(input) {
    let minAge = input[0] | 0;
    let firstPerson = {
        "name": input[1],
        "age": input[2] | 0
    };
    let seconPerson = {
        "name": input[3],
        "age": input[4] | 0
    };

    if (firstPerson.age >= minAge && seconPerson.age < minAge) {
        console.log(firstPerson);
    }
    else if (seconPerson.age >= minAge && firstPerson.age < minAge) {
        console.log(seconPerson);
    }
    else if (firstPerson.age > minAge && seconPerson.age >= minAge) {
        console.log(firstPerson);console.log(seconPerson);
    }
}