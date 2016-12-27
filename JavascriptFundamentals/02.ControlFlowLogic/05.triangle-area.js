function solve(input) {
    let p = (Number(input[0]) + Number(input[1]) + Number(input[2])) / 2; // 'p' is the triangle's half-perimeter
    let triangleArea = Math.sqrt(
        p * (p - input[0]) * (p - input[1]) * (p - input[2])
    );

    console.log(triangleArea);
}