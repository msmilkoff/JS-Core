function solve(input) {
    let n = Number(input);

    console.log('<div class="chessboard">');

    for (let i = 1; i <= n; i++) {
        console.log('  <div>');
        let color = 'white';
        if (i % 2 !== 0) {
            color = 'black';
        }
        for (let j = 0; j < n; j++) {
            if (color === 'black') {
                console.log('    <span class="black"></span>');
                color = 'white';
            }
            else{
                console.log('    <span class="white"></span>');
                color ='black';
            }
        }

        console.log('  </div>');
    }

    console.log('</div>');
}