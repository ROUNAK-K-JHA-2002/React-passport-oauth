const router = require('express').Router()
const passport = require ('passport')

router.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect : process.env.CLIENTURL,
    failureRedirect : '/login/failed'
}))

router.get("/login/failed",(req,res)=>{
   res.status(401).json({
            error :true,
            message : "Login Failure"
        });
})

router.get("/login/sucess",(req,res)=>{
    if(req.user){
      res.send(200).json({
        error:false,
        message: " sucessfully logged in",
        user : req.user,
      })
    }
    else{
        res.status(403).json({
            error :true,
            message : "Unauthorized"
        });
    }
})

router.get("/google",passport.authenticate("google",['profile','email']))


router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect(process.env.CLIENTURL)
})


module.exports = router;