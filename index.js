const hapi = require('hapi');
const hapiPlugin2 = require('hapi-plugin2');
const plugins = require('./plugins');

// server
const server = hapi.server({
  host: '127.0.0.1',
  port: 8080,
});

const init = async () => {
	await server.register({
		plugin: hapiPlugin2,
		options: {
			cwd: process.cwd(),
			plugins,
		},
	});

  await server.start();

  console.log(`Server running at ${server.info.uri}`);
};

process.on('unHandledRejection', (err) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
});

init();