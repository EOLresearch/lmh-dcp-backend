const fs = require('fs');
const https = require('https');
const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');

// Load environment variables from .env file
dotenv.config();

// Load SSL certificate and key
const options = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH),
    ca: process.env.SSL_CA_PATH ? fs.readFileSync(process.env.SSL_CA_PATH) : undefined
};

// Create an HTTPS server with the SSL certificate and key - we dont have valid certs yet so dev in http below
// https.createServer(options, app).listen(process.env.PORT, () => {
//     console.log(`Server is running on https://localhost:${process.env.PORT}`);
// });

// Create an HTTP server
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});