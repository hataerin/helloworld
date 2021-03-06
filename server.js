const express = require('express');

const app = express();
const port = 3000;

// Set public folder as root

app.use(express.static('public'));

// Provide access to node_modules folder from the client-side
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
// app.use((req, res) => res.sendFile(`${__dirname}/public/views/index.html`));

app.use('/index', (req, res) => {
	res.sendFile(`${__dirname}/public/views/index.html`);
})

app.use('/chat', (req, res) => {
	res.sendFile(`${__dirname}/public/views/chat.html`);
})

app.use('/mypage', (req, res) => {
	res.sendFile(`${__dirname}/public/views/mypage.html`);
})

app.use('/friends', (req, res) => {
	res.sendFile(`${__dirname}/public/views/friends.html`);
})


app.use('/generic', (req, res) => {
	res.sendFile(`${__dirname}/public/views/generic.html`);
})

app.use('/elements', (req, res) => {
	res.sendFile(`${__dirname}/public/views/elements.html`);
})


app.listen(port, () => {
  console.info('listening on %d', port);

  console.log(`${__dirname}/public/index.html`);
});