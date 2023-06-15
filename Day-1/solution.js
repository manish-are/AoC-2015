const fs = require('fs');

const filePath = 'input.txt';

fs.readFile(filePath,'utf8',(err,data) => {
	if(err) {
		console.error(err);
		return;
	}


	console.log(data.trim().split('').reduce((acc,curr) => acc += curr == "(" ? 1 : -1, 0));
});
