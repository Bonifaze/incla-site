const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const requestHandler = (req, res) => {
        const parsedUrl = parse(req.url || '/', true);
        handle(req, res, parsedUrl);
    };

    createServer(requestHandler).listen(port);

}).catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
});