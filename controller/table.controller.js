// const vikas = require('../model/connection')

// let gettable = async (req, res) => {
//     try{
//         const q1 = "SELECT * FROM  table"
//         await vikas.query(q1, (err, result, fields) => {
//             if(err){
//                 res.send(err.sqlMessage)
//             }res.send(result)
//         })
//     }catch(err){
//         res.send(err.sqlMessage)
//     }
// }

// let posttable = async (req, res) => {
//     try{
//         const data = req.body;
//         const q2 = "INSERT INTO table SET = ?"
//         await vikas.query(q2, data, (err, result, fields) => {
//             if(err){
//                 res.send(err.sqlMessage)
//             }res.send(result)
//         })
//     }catch(err){
//         res.send(err.sqlMessage)
//     }
// }

// let updatetable = async (req, res) => {
//     try{
//         const data = [req.body, req.params.id]
//         const q3 = "UPDATE table SET WHERE id = ?"
//         await vikas.query(q3, data, (err, result, fields) => {
//             if(err){
//                 res.send(err.sqlMessage)
//             }res.send(result)
//         })
//     }catch(err){
//         res.send(err.sqlMessage)
//     }
// }

// let deletetable = async (req, res) => {
//     try{
//         const data = req.params.id;
//         const q4 = "DELETE FROM tbale WHERE id = ?"
//         await vikas.query(q4, data, (err, result, fields) => {
//             if(err){
//                 res.send(err.sqlMessage)
//             }res.send(result)
//         })
//     }catch(err){
//         res.send(err.sqlMessage)
//     }
// }


// module.exports = {gettable, posttable, updatetable, deletetable}