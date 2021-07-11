const Cors = require("cors");
const Express = require("express");
const Form = Express();

let Messages = require("./infoModel");

Form.use(Cors());
Form.use(Express.urlencoded({extended:true}));


/*   GET request    */
Form.get("/", (req, res) =>{
    Messages.find((err, msgList) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).json(msgList);
        };
    });
});

/*    POST rquest   */
Form.post("/send", (req, res) => {

    //We need to retrieve the data from the request body
    let newMessage = new Messages(req.body);

    //We call this method to save the data to the database
    newMessage.save()
    
    .then(msg => {
        res.status(200).json({"Message": "Succesfully sent!"});
    })
    .catch(err => {
        res.status(400).json({"Message":"Not able to send it! :C"});
    });
});

module.exports = Form;