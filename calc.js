const { SSL_OP_NO_QUERY_MTU } = require('constants');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	if (mathSymbol === "+"){
		console.log(num1 + num2 + num3);
	}

	if (mathSymbol === "-"){
		console.log(num1 - num2 - num3);
	}

	if (mathSymbol === "*"){
		console.log(num1 * num2 * num3);
	}

	if (mathSymbol === "/"){
		console.log(num1 / num2 / num3);
	}

	if (mathSymbol === "&"){
		console.log(Math.sqrt(num1));
	}

	if (mathSymbol === "^"){
		console.log(Math.pow(num1, 2))
	}
	
	if (mathSymbol === "^^"){
		console.log(Math.pow(num1, 3))
	}

	if (mathSymbol === "^^^"){
		console.log(Math.pow(num1, num2))
	}

	if (mathSymbol === "%"){
		console.log(num1 % num2)
	}

	// This line closes the connection to the command line interface.
	reader.close()

});
