const express = require('express');
const passport = require('passport')
require('dotenv').config
const cors = require('cors')
const cookieSession = require('cookie-session');
const passportStrategy = require('./passport')
const authRoutes = require('./routes/auth')
const app = express();

app.use(
    cookieSession({
        name : 'session',
        keys : ['secretKeys'],
        maxAge : 24*60*60*100
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

app.get('/auth',authRoutes)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})