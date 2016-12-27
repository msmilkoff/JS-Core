function solve(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);
    let W = Number(input[2]);
    let H = Number(input[3]);

    let rightRectArea = w * h;
    let leftRectArea = W * H;

    let intersectionArea = Math.min(w, W) * Math.min(h, H);
    let totalArea = leftRectArea + rightRectArea - intersectionArea;
    console.log(totalArea);
}