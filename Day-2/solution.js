const fs = require('fs');

const filePath = 'input.txt';

fs.readFile(filePath,'utf8',(err,data) => {
	if(err) {
		console.error(err);
		return;
	}

	//part-1
    console.log(data.trim().split('\n').map(x => x.split('x')).map(x => x.map(x => Number(x))).reduce((acc,curr) => {
		//console.log(curr[0],curr[1],curr[2],acc);
		let surfaceArea1 = curr[0] * curr[1];
		let surfaceArea2 = curr[1] * curr[2];
		let surfaceArea3 = curr[2] * curr[0];
		let minsurfaceArea = 0;
		if (surfaceArea1 <= surfaceArea2 && surfaceArea1 <= surfaceArea3 ){
			minsurfaceArea = surfaceArea1; 
		}else if (surfaceArea2 <= surfaceArea3){
			minsurfaceArea = surfaceArea2;
		}else{
			minsurfaceArea = surfaceArea3;
		}
		//console.log(curr[0],curr[1],curr[2],surfaceArea1,surfaceArea2,surfaceArea3,minsurfaceArea,acc);
		acc += 2 * (surfaceArea1 + surfaceArea2 + surfaceArea3) + minsurfaceArea;
		//console.log(curr[0],curr[1],curr[2],acc);
		return acc;
	},0));

	//part-2
	console.log(data.trim().split('\n').map(x => x.split('x')).map(x => x.map(x => Number(x))).reduce((acc,curr) => {
		let min1 = 0;
		let min2 = 0;
		if (curr[0] <= curr[1] && curr[0] <= curr[2] ){
			min1 = curr[0];
			min2 = curr[1] <= curr[2] ? curr[1] : curr[2];
		}else if(curr[1] <= curr[0] && curr[1] <= curr[2]) {
			min1 = curr[1];
			min2 = curr[0] <= curr[2] ? curr[0] : curr[2];
		}else if (curr[2] <= curr[0] && curr[2] <= curr[1]){
			min1 = curr[2];
			min2 = curr[0] <= curr[1] ? curr[0] : curr[1];
 		}
		acc += min1 + min1 + min2 + min2 + (curr[0] * curr[1] * curr[2]);
		return acc;
	},0));


});