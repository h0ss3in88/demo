const http = require('http'),
    app = require('../src/server/application');
let port = app.get('port');
let server = http.createServer(app);
server.listen(port,() => {
    console.log(`'application running at http://localhost:${port}'`);
});    