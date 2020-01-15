const app1 = require('./app');

const server = app1.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
  console.log('Press CTRL-C to stop \n');
});

module.exports = server;