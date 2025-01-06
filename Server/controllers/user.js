
const userModel = require('../models/User') 
const Response = require('../helpers/response')

exports.getUsers = async (req, res)=>{
    return res.status(200).send({
        message: 'success'
    })
} 


exports.createUser = async(req, res)=>{

    // console.log(" data => ", req.body);
    const { Username, email, password , accountType } = req.body;


    console.log(" data => " ,  Username, email, password , accountType );
    let result = await userModel.find({email});

    // if already exits
    if(result){
        let response = Response.error();
        response.msg = " user allready exist"
        return res.status(400).json(response);
    }
    

   const user = await  userModel({
    Username, email, password , accountType
    });

    result =  await user.save();
    let response = Response.success();
    response.payload = result;
    response.msg = " successfully saved user"
    return res.status(200).json(response);

}










// let response = Response.success();
// response.payloadType = payloadType.array;
// response.msg = " successfully saved user"
// // debug(response);
// })// user save then
// .catch(err => {
//     let response = Response.error();
//     response.error = [err.message];
//   response.msg = " error while saving user "
// //   debug(response);
//   return res.status(400).json(response);