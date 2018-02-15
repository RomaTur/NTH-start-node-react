import express from 'express';
import cookieParser from 'cookie-parser';
import React    from 'react';
import ReactDom from 'react-dom/server';
import App      from 'components/App';

const path = require('path');
const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname) + '/public'));

app.use((req, res) => {
  const componentHTML = ReactDom.renderToString(<App />);

  return res.end(renderHTML(componentHTML));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050/public/assets/' : '/assets/';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Реактивная игра Жизнь</title>
          <link rel="stylesheet" href="${assetUrl}styles.css">
      </head>
      <body>
        <div id="app">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}bundle.js"></script>
      </body>
    </html>
  `;
}

// // // //

const debug = require('debug')('server');
const http = require('http');

let port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe' + port
    : 'Port' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();

  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

  debug('Listening on ' + bind);
}
