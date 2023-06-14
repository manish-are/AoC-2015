const fs = require('fs');

const filePath = 'input.txt';

fs.readFile(filePath,'utf8',(err,data) => {
	if(err) {
		console.error(err);
		return;
	}


	console.log(data.trim().split('').reduce((acc,curr) => {
		if(curr === '('){
			return acc + 1;
		}else if(curr === ')'){
			return acc -1;
		}},0));

});
