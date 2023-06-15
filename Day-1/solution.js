const fs = require('fs');

const filePath = 'input.txt';

fs.readFile(filePath,'utf8',(err,data) => {
	if(err) {
		console.error(err);
		return;
	}

	//part-1
	console.log(data.trim().split('').reduce((acc,curr) => acc += curr === "(" ? 1 : -1, 0));
	
	//part-2
	let sum = 0;
	console.log(data.trim().split('').findIndex((curr) => { sum += curr === "(" ? 1 : -1; return sum === -1; }) + 1);
});
