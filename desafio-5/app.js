var http = require("http");
var server = http.createServer(function (req, res){

    let intRandom = (min, max) => {
        return Math.floor(Math.random() * (max-min)) + min;
    }
    
    let floatRandom = (Math.random() * 9999.99).toFixed(2);

    let obj = {
        id: intRandom(1,10),
        title: "Producto " + intRandom(1,10),
        price: floatRandom,
        thumbnail: "Foto " + intRandom(1,10)
    }

    res.end(JSON.stringify(obj));
});

server.listen(3000, function(){
    console.log("tu servidor está listo en " + this.address().port);
});