const passport=require('passport');
require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID : process.env.CLIENTID,
    clientSecret : process.env.CLIENTSECRET,
    callbackURL : '/auth/google/callback',
    scope : ['profile','email']
},function(accessToken,refreshToken,profile,callback){
    callback(null,profile);
    module.exports.user = profile;
}))

passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((user,done)=>{
    done(null,user);
})