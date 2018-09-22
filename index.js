#!usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shelljs = require("shelljs");
const commander = require("commander");
var colors = require("colors");

const init = () => {
	console.log(chalk.green(figlet.textSync("DMS CLI", {
		font: "Standard",
		horizontalLayout: "default",
		verticalLayout: "default"
	})
	)
	);
	console.log('Description: This is the CLI for the DMS.');
	console.log("Usage:  node index.js -u <username>     For entering the username".green);
	console.log("        node index.js -p <password>     For entering the password".green);
	console.log("        node index.js -h                For help".green);
	console.log("        node index.js -v                For version".green);
}

init();

commander
 .version('0.0.1', '-v, --version')
 .option('-u, --username <username>', 'User\'s username')
 .option('-p, --password <password>', 'User\'s password')
 .option('-h, --help')
 .parse(process.argv);


if(commander.username && !commander.password) {
	console.log("Please Enter")
	console.log("Please Enter the password");
}

if(commander.username && commander.password) {
	console.log("The username is "+commander.username);
	console.log("The password is "+commander.password);
}

if(!commander.help) {
	console.log("Help: ");
	console.log("-u for username");
	console.log("-p for password");

}
