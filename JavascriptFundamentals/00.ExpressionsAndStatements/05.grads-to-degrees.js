function radians([n]) {
    let degree = Number(n) * 0.9 % 360;

    if (degree < 0){
        degree += 360;
    }
  
    console.log(degree);
}