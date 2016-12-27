function solve(input) {
    let radius = Number(input[0]);
    let height = Number(input[1]);

    let coneVolume = height * Math.pow(radius, 2) * Math.PI / 3;

    let slantHeight = Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2));
    let coneArea = (Math.PI * Math.pow(radius, 2)) + (Math.PI * radius * slantHeight);

    console.log(coneVolume.toFixed(4));
    console.log(coneArea.toFixed(4));
}