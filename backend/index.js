const express = require('express');
const passport = require('passport')
require('dotenv').config
const cors = require('cors')
const passportStrategy = require('./passport')
const Session = require('express-session');
const app = express();

app.use(
    Session({
        secret: 'somethingsecretgoeshere',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: true }
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin : "http://localhost:3000",
        methods : "POST,GET,PUT,DELETE",
        credentials: true
    })
)

const port = process.env.PORT || 5000



app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})


app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect : process.env.CLIENTURL,
    failureRedirect : '/login/failed'
}))

app.get("/auth/login/failed",(req,res)=>{
   res.sendStatus(401).json({
            error :true,
            message : "Login Failure"
        });
})

app.get("/auth/login/success",(req,res)=>{
    const user = passportStrategy.user
    if(user != null){
        console.log(user)
      res.sendStatus(200).json({
        error:false,
        message: "sucessfully logged in",
        user :user,
      })
    }
    else{
        res.sendStatus(403).json({
            error :true,
            message : "Unauthorized"
        });
    }
})

app.get("/auth/google",passport.authenticate("google",['profile','email']))


app.get("/auth/logout",(req,res)=>{
    req.logout();
    res.redirect(process.env.CLIENTURL)
})
