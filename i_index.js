#!usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shelljs = require("shelljs");
const commander = require("commander");
var colors = require("colors");
var prompt = require("prompt");

const init = () => {
	console.log(chalk.green(figlet.textSync("DMS CLI", {
		font: "Standard",
		horizontalLayout: "default",
		verticalLayout: "default"
	})
	)
	);
}

init();

commander
 .version('0.0.1', '-v, --version')


prompt.get([{
    name: 'username',
    required: true
  }, {
    name: 'password',
    hidden: true,
    conform: function (value) {
      return true;
    }
  }], function (err, result) {

  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  password: ' + result.password);
});