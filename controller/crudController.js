
//require the model

const Crud = require("../model/crud");

//Simple version, without validation or sanitation

exports.test = function(req,res){
    res.send("greeting from the test controller");
}


exports.crudcreate = function (req, res,next) {

    console.log("hollcfbvdflmlkbglefkbdzf",req.body)
   
    let crud = new Crud(
        {
            name: req.body.name,
            email: req.body.email,
            phone:req.body.phone   
        }
    );

    crud.save(function (err,data) {
        if (err) {
            return next(err);
        }
        res.send(data)
    })
};

exports.crudRead = function (req, res, next){
    console.log("hhhhhhhhhhhhhh",req.body.id);
    
    Crud.findById(req.body.id, function(err, crud ){
        if(err) next (err);
        res.send(crud);
    });
}



exports.crudUpdate = function (req, res, next){
    Crud.findByIdAndUpdate(req.body.id,{name:req.body.name}, function(err, crud){

        if(err) next (err);
        res.send(crud);
    });
}

exports.crudDelete = function(req, res, next){

    Crud.deleteOne({name:req.body.name}, function(err, crud){
        if (err) next (err);
        res.send(crud);
    })

}







