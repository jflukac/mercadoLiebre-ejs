const fs = require ('fs')
const path = require ('path')

let products = fs.readFileSync(path.resolve(__dirname, '../data/products.json') , { encoding: 'utf8'});
products = JSON.parse(products);

module.exports = {
    root: function (req, res) {

        let inSale = products.filter(function (product) {
            return product.category == 'in-sale'
        })

        let visited = products.filter (function (product) {
            return product.category == 'visited'
        })

        res.render ('index', {inSale, visited});

    }

}