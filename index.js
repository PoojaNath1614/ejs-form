const express=require('express');
const app=express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public' ));

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/form',(req,res)=>{
    res.render('studentform');
});
app.post('/submit', (req, res) => {
    res.render('submission', {
        stname: req.body.stname,
        rollno: req.body.rollno
    });
});
app.listen(3000);