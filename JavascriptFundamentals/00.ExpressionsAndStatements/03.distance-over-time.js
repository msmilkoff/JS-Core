function solve([v1, v2, t]) {
    let velocityOfFirstObject = Number(v1) * 1000; // converting to meters
    let velocityOfSecondObject = Number(v2) * 1000;
    let time = Number(t) / 3600; // converting to hours

    let distanceOfFirstObject = velocityOfFirstObject * time;
    let distanceOfSecondObject = velocityOfSecondObject * time;
    let differenceInDistance = Math.abs(distanceOfFirstObject - distanceOfSecondObject);

    console.log(differenceInDistance);
}