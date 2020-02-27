const dev = process.argv[2] === 'dev';

const path = require('path'),
  express = require('express'),
  morgan = require('morgan')('dev');

const port = 3000;

const app = express();

if (dev) app.use(morgan);

app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
})