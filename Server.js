
const http=require('http');
const app=require('./Backend/app')

const server=http.createServer(app)


app.set('port',1024);
server.listen(1024,()=>{
    console.log("Server is listening at 80")
})