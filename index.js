var http = require('http')
var fs = require('fs')
var constest = fs.readFileSync('blog.html')

http.createServer(
    function(req,res){
        res.end(constest)
    }
    
).listen(8000)