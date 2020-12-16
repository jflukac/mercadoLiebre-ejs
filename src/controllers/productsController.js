const fs = require ('fs')
const path = require ('path')
const controlador = {
    productDetail: (req,res) => {
        res.render('./products/productDetail')
    }

}


module.exports = controlador

