const { FaDiagramSuccessor } = require("react-icons/fa6");
const Product = require("../models/product.models")


exports.store = async (req, res) => {
    try {

        req.body.thumbnail=req.file.filename;
        const product = await Product.create(req.body)
        res.json({ status: 200, message: "Product created successfully", product })
    }
    catch (err) {
        console.log(err);
    }
}

exports.index = async (req, res) => {
    try {
        const {category,search}=req.query;
        const query={};
        if(category){
            query.category=category;
        }
        if(search){
            query.title=search;
        }

        const products = await Product.find(query)
        res.json({ status: 200, message: "Products fetched successfully", products })
    }
    catch (err) {
        console.log(err);
    }
}
exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const product = await Product.findOne({ _id: id })
        if (!product) {
            return res.json({ status: 404, success: false, message: `Couldn't find product` })
        }
        res.json({ status: 200, message: "Products fetched successfully", product })
    }
    catch (err) {
        console.log(err);
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndDelete({ _id: id })
        if (!product) {
            return res.json({ status: 404, success: false, message: `Couldn't find product` })
        }
        res.json({ status: 200, message: "Products Deleted successfully" })
    }
    catch (err) {
        console.log(err);
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndUpdate({ _id: id },req.body,{new:true})
        if (!product) {
            return res.json({ status: 404, success: false, message: `Couldn't find product` })
        }
        res.json({ status: 200, message: "Products Updated successfully" })
    }
    catch (err) {
        console.log(err);
    }
}