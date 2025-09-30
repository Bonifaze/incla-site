const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');

// cPanel Node.js environment configuration
const port = parseInt(process.env.PORT || process.env.NODEJS_PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || '0.0.0.0'; // Use 0.0.0.0 for cPanel

// Set the correct directory for cPanel
const dir = process.cwd();
console.log('Current working directory:', dir);
console.log('Environment:', process.env.NODE_ENV);

// Initialize Next.js app
const app = next({ dev, dir });
const handle = app.getRequestHandler();

let server;

app.prepare().then(() => {
    const requestHandler = (req, res) => {
        try {
            const parsedUrl = parse(req.url || '/', true);
            handle(req, res, parsedUrl);
        } catch (err) {
            console.error('Error handling request:', err);
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    };

    server = createServer(requestHandler);
    
    server.listen(port, hostname, () => {
        console.log(`> Ready on http://${hostname}:${port}`);
        console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`);
    });

    server.on('error', (err) => {
        console.error('Server error:', err);
    });

}).catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
        process.exit(0);
    });
});