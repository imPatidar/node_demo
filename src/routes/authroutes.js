const express=require("express");
const debug=require("debug")("app:authroutes");
const authrouter= express.Router();
function router(){
    authrouter.route('/signup')
    .post((req,res)=>{
        debug(req.body);
    })
    return authrouter; 
};
module.exports=router;