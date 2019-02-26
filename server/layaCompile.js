
function layaCompile(){
    var exec = require('child_process').execFile;
    exec('./layaCompile.sh',{encoding:'utf8'},function (err,stdout,stderr){
        if (err){
            console.log(err);
            return "err";
        }else{
            return "compiling..."
        }
        console.log(stdout)
    });
}

module.exports=layaCompile;