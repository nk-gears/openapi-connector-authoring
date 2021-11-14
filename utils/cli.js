const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	sourceFolder: {
		type: `string`,
		alias: `s`,
		desc: `Target folder path`
	},
	targetFolder: {
		type: `string`,
		alias: `t`,
		desc: `Target folder path`
	},
	name: {
		type: `string`,
		alias: `n`,
		desc: `Name of the resource/policy/action/trigger/parameter/definition`
	},
	methodName: {
		type: `string`,
		alias: `m`,
		desc: `Action Method Name. get, post,put post. default is get`
	}
};

const commands = {
	help: { desc: `Print help info` },
	build: { desc: `Create a build from a pucc folder` },
	split: { desc: `Split a swagger file` },
	"add-action":{desc:'Add new action file'},
	"list-action":{desc:'List all actions'},
	"add-trigger":{desc:'Add a new Trigger file'},
	"list-trigger":{desc:'List all trigger'},
	"add-capability":{desc:'Add Capability to existing'},
	"list-policy":{desc:'List Policy'},
	"add-connection":{desc:'Add Connection Parameter'},
	"create":{desc:'Create a new connector'},
	"lint":{desc:'Lint before building'},
	"deploy":{desc:'Initiate Deploy using paconn-cli'}
};

const helpText = meowHelp({
	name: `pucc`,
	defaults: false,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
