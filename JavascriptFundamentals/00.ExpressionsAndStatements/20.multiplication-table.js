function solve(n) {
    console.log('<table border="1">');

    let tableHeader = '<tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        tableHeader += `<th>${i}</th>`
    }

    tableHeader += '</tr>';
    console.log(tableHeader);

    let tableRow = '';
    for (let i = 1; i <= n; i++) {
        tableRow = `<tr><th>${i}</th>`;
        for (let j = 1; j <= n; j++) {
            tableRow += `<td>${i * j}</td>`
        }

        tableRow += '</tr>';
        console.log(tableRow);
    }

    console.log('</table>')
}