var express = require('express'),
app= express(),
engines = require('consolidate'),
MongoClient = require('mongodb').MongoClient,
assert = require('assert');
bodyParser = require('body-parser');
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
      user: "albertonvelez@gmail.com",
       pass: "Nikko<3diana",
        server: "smtp.gmail.com",
         port: 465

    }
})


var app = express();

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup





// catch 404 and forward to error handler






app.get('/', function(req, res){
res.render('index.html' );

});

app.get('/name', function(req, res){
db.collection('names').find().toArray(function(err, docs) {
            if (!err) {

                console.log(docs);
                res.json(docs);


}
else{
  console.log(err);
}
})
});


   app.post('/calls', function(req, res) {
       console.log("Post body.value is "+ req.body.value + "  " +req.body.comment )
       response={
         "_id": req.body.value,
         "comment": req.body.comment
       }
       var mailOptions = {
          from: "nkkvlz@gmail.com", // sender address
          to: req.body.value, // list of receivers
          subject: "Email from Munchies ", // Subject line
          text: "Thank you for subscribing with us ", // plaintext body
          html: "<b>Thank you for subscribing with us </b>" // html body
      }

      // send mail with defined transport object
      smtpTransport.sendMail(mailOptions, function(error, response){
          if(error){
              console.log(error);
          }else{
              console.log("Message sent: " + response.message);
          }
      })

   });


app.use(function(req, res){
  res.sendStatus(404);
});


var server = app.listen(3000, function() {
  var port=server.address().port;
  console.log('express server listening on port %s', port);
});


module.exports = app;
