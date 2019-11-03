const server = new require('express')();
// const fs = require('fs');
// const render = require('vue-server-renderer').createRenderer({
//     template: fs.readFileSync("./index.template.html", "utf-8")
// })

const createApp = require('../dist/server.bundle').default;
server.get('*', (request, response) => {
    // const app = createApp();
    // console.log(app)
    response.write('1111111111')
    // render.renderToString(app, (error, html) => { // 错误先行
    //     console.log(error)
    //     if(error) throw error;
    //     else response.end(html); // 返回经过renderToString()处理的Vue实例=>html字符串
    // })
})

server.listen(12306, _ => {
    console.log('服务器已启动')
})
