const express = require('express');
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const port = 6162;


const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: 'rzp_test_ez6XKjFep8s460',
    key_secret: 'eWdgFSH1kDgl18jI0UO9lb2f',
  });



app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
  res.render('razorpay.ejs')
})


app.post('/order', (req, res) => {
  let options = {
      amount: 25000,
      currency: "INR",
    };
    razorpay.orders.create(options, function(err, order) {
      // order_id_variable = order.id
      console.log(order);
      res.json(order)
    })
  })


app.post('/is-order-complete', (req, res) => {

  razorpay.payments.fetch(req.body.razorpay_payment_id).then((paymentDocument) => {
    if(paymentDocument.status == 'captured'){
      res.send('payment successful')
    }else{
      res.redirect('/')
    }
  })

})



  app.listen(port, (err) => {
    if(err){
        console.log(err.sqlMessage)
    }
    else{
        console.log('server connected successfully')
    }
})










// const table_routes= require("./routes/table.routes")
// app.use('/', table_routes)















//   app.get('/', (req, res) => {
//     res.sendFile("standard.html", {root: __dirname});
//   })


  // app.post('/create/orderId', (req, res) => {
  //   console.log("create orderId request", req.body);
  //   var options = {
  //       amount: req.body.amount,  // amount in the smallest currency unit
  //       currency: "INR",
  //       receipt: "rcp1"
  //     };
      // instance.orders.create(options, function(err, order) {
      //   console.log(order);
//         res.send({orderId : order.id});
//       });    
//   })



