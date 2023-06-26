const fs = require('fs');

const filePath = 'input.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    //part-1
    //use Set data structure in javascript with coordinates [0,0]
    //starting point {x:0, y:0}
    const path = new Set();
    path.add(JSON.stringify({ x: 0, y: 0 }));
    console.log(data.trim().split('').reduce((point, curr) => {
        let newPoint = {};
        switch (curr) {
            case '>':
                newPoint.x = point.x + 1;
                newPoint.y = point.y;
                break;
            case '<':
                newPoint.x = point.x - 1;
                newPoint.y = point.y;
                break;
            case '^':
                newPoint.x = point.x;
                newPoint.y = point.y + 1;
                break;
            case 'v':
                newPoint.x = point.x;
                newPoint.y = point.y - 1;
                break;
        }
        path.add(JSON.stringify(newPoint));
        point.x = newPoint.x;
        point.y = newPoint.y;
        return point;
    }, { x: 0, y: 0 }));
    console.log(path.size);

    //part2
    const path2 = new Set();
    const newPoint = { x: 0, y: 0 };
    path2.add(JSON.stringify({ x: 0, y: 0 }));
    console.log(data.trim().split('').reduce((point, curr, cuurIndex) => {
        if (cuurIndex % 2 == 0) {
            switch (curr) {
                case '>':
                    newPoint.x = point.x + 1;
                    newPoint.y = point.y;
                    break;
                case '<':
                    newPoint.x = point.x - 1;
                    newPoint.y = point.y;
                    break;
                case '^':
                    newPoint.x = point.x;
                    newPoint.y = point.y + 1;
                    break;
                case 'v':
                    newPoint.x = point.x;
                    newPoint.y = point.y - 1;
                    break;
            }
            path2.add(JSON.stringify(newPoint));
            point.x = newPoint.x;
            point.y = newPoint.y;

        } else {
            switch (curr) {
                case '>':
                    newPoint.x = point.x_robo + 1;
                    newPoint.y = point.y_robo;
                    break;
                case '<':
                    newPoint.x = point.x_robo - 1;
                    newPoint.y = point.y_robo;
                    break;
                case '^':
                    newPoint.x = point.x_robo;
                    newPoint.y = point.y_robo + 1;
                    break;
                case 'v':
                    newPoint.x = point.x_robo;
                    newPoint.y = point.y_robo - 1;
                    break;
            }
            path2.add(JSON.stringify(newPoint));
            point.x_robo = newPoint.x;
            point.y_robo = newPoint.y;

        }
        return point;
    }, { x: 0, y: 0, x_robo: 0, y_robo: 0 }));
    console.log(path2.size);
});