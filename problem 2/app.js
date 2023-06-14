
const fs = require("fs");
const moment = require('moment');


fs.readFile('./problem-2.json', (err, data) => {
	if (err) throw err;
  
	// 1. Read the JSON in problem1.json
	let dataParsed = JSON.parse(data);

	// 2. Install moment.js package using npm
	for(let i=0; i< dataParsed.accidents.length; i++){

		// convert from string to date 
		dataParsed.accidents[i].date = new Date(dataParsed.accidents[i].date);

		// 3. Convert the dates into the following format YYYY-MM-DD
		// change date format
		dataParsed.accidents[i].date = moment(dataParsed.accidents[i].date).format('YYYY-MM-DD');
	  }

	  let dataParsedToString = JSON.stringify(dataParsed);
	  // 4. Write the results to output2.json
	fs.writeFile('output2.json', dataParsedToString, (err) => {
	if (err) {
	  console.error(err);
	  return;
	}
	console.log('Data written to file');
  });
	console.log(dataParsedToString)
});