function solve(input){
    let coords = input.map(Number);

    let x1 = Number(coords[0]);
    let y1 = Number(coords[1]);
    let z1 = Number(coords[2]);
    let x2 = Number(coords[3]);
    let y2 = Number(coords[4]);
    let z2 = Number(coords[5]);

    let deltaX = x1 - x2;
    let deltaY = y1 - y2;
    let deltaZ = z1 - z2;

    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    console.log(distance);
}