const express = require("express")
const router = express.Router()
const Products = require("../models/Products")
const mongoose = require("mongoose")

//SAVE PRODUCTS
// router.post("/add", (req,res, next) => {
//     if(!req.body.name || !req.body.price || !req.body.category) return res.json({
//         message : "Fields cannot be empty"
//     })
    
//     const product = new Products({
//         _id : mongoose.Types.ObjectId(),
//         name : req.body.name,
//         price : req.body.price,
//         category: req.body.category,
//         description: req.body.description,
//         image_url: req.body.image_url
//     })
//     product.save().then(result => res.status(201).json({
//         message : "Successfully created",
//         product:  product
//     })).catch(err => {
//         return res.status(500).json({
//             message : "Error adding products",
//             error : err
//         })})
// })

//ALL PRODUCTS ROUTE
router.get("/", (req,res) => {
    Products.find().exec().then(
        result => {
            return res.status(200).json({
                message : "Products retrieved successfully",
                products : result
            })
        }
    ).catch(err => {
        res.status(500).json({
            message: "Unable to retrieve products",
            error : err
        })
    })
})

//PRODUCT ROUTE
router.get("/search/:searchname", async (req,res) => {
    Products.find( { $text: { $search: req.params.searchname } } ).exec().then(result =>{
        return res.status(200).json({
            message : "Related products retrieved successfully",
            products : result
        })
    }).catch(err => {
        res.status(500).json({
            message: "Unable to retrieve products",
            error : err
        })
    })
    
    
})


module.exports = router
