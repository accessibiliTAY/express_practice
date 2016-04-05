var express = requires('express');
var app = express();
var path = ('path')

app.listen(3000, function(){
    console.log("Hello... Its me.")
});



app.get('/', function(req, res)){
  console.log("It's here");
  res.sendFile(path.join(__dirname, "./index.html"));
}
