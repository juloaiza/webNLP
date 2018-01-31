var input = "http://alejandracoaching.com/";
Algorithmia.client("sim+gGVrEfX4WKgLf4h+eF07ELt1")
    .algo("web/GetLinks/0.1.5")
    .pipe(input)
    .then(function(output) {
        console.log(output);
    });


