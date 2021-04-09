
const http=require('http');
const app=require('./Backend/app')

const server=http.createServer(app)


app.set('port',80);
server.listen(80,()=>{
    console.log("Server is listening at 80")
})