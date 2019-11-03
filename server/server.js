const server = require('express')();
const render = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf8')
});
const createApp = require('../dist/server.bundle').default

server.use(require('express').static(require('path').join(__dirname, '../dist')))
server.get('*', (req, res) => {
    const app = createApp(req.url);
    render.renderToString(app,{
        load: '<script src="/client.bundle.js"></script>'
    }, (err, html) => {
        if(err) {
            throw err
        } else {
            res.end(html);
        }
    })
})



server.listen(10086, _ => {
    console.log('server is running at 10086');
})