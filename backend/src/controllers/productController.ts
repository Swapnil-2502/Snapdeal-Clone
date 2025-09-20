import { Request, Response } from "express";
import Product from "../model/Product";


export const createProduct = async (req: Request, res: Response) => {
    try{
        const productData = req.body

        if(!productData.title || !productData.type 
            || !productData.price || !productData.mrp || !productData.images || !productData.stockAvailable){
                return res.status(401).json({message: "Missing required fields" })
        }

        const newProduct = await Product.create(productData)
        return res.status(201).json({ message: "Product created", product: newProduct });
    }
    catch(error){
        console.error("Error in creating product:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try{
        const { type, color, minPrice, maxPrice, sortby, minStars } = req.query;

        const query: any = {};

        if (type) {
            query.type = type; 
        }

        if (color) {
            query.color = color; 
        }

        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        
        let products = await Product.find(query)

        if(minStars) {
            const min = Number(minStars);
            if (min === 4) {
                
                products = products.filter(p => Number(p.stars) >= 4);
            } else if (min === 3) {
                
                products = products.filter(p => Number(p.stars) >= 3 && Number(p.stars) < 4);
            } else if (min === 2) {
                
                products = products.filter(p => Number(p.stars) >= 2 && Number(p.stars) < 3);
            } else if (min === 1) {
                
                products = products.filter(p => Number(p.stars) >= 1 && Number(p.stars) < 2);
            }
        }

        if(sortby === 'priceLowHigh'){
            products = products.sort((a,b) => a.price - b.price)
        }
        else if(sortby === 'priceHighLow'){
            products = products.sort((a,b) => b.price - a.price)
        }
        else if(sortby === 'discount'){
            products = products.sort((a,b) => {
                const discountA = ((a.mrp - a.price) / a.mrp) * 100
                const discountB = ((b.mrp - b.price) / b.mrp) * 100

                return discountB - discountA
            })
        }


        return res.status(201).json({ message: "Products", products: products });
    }
    catch(error){
        console.error("Error in getting products:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try{
        const {id} = req.params

        if(!id) return res.status(400).json({ message: "Product ID is required" });

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ product });
    }
    catch(error){
        console.error("Error in getting product by ID:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
    
}

export const searchProducts = async (req: Request, res: Response) => {
    try{
        const {q, type, color, minPrice, maxPrice, sortby, minStars} = req.query

        if(!q || typeof q !== "string") return res.status(400).json({ message: "Search query is required" });
        
        const words = q.trim().split(/\s+/);

        const searchConditions = words.map((word) => {
            const regex = new RegExp(word, "i");

            return {
                 $or: [
                    { title: regex },
                    { type: regex },
                    { category: regex },
                    { subcategory: regex }
                ]
            }
        })

        const query: any = { $or: searchConditions };

        if (type) {
            query.type = type;
        }

        if (color) {
            query.color = color;
        }

        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        let products = await Product.find(query);

         if (minStars) {
            const min = Number(minStars);
            if (min === 4) {
                products = products.filter(p => Number(p.stars) >= 4);
            } else if (min === 3) {
                products = products.filter(p => Number(p.stars) >= 3 && Number(p.stars) < 4);
            } else if (min === 2) {
                products = products.filter(p => Number(p.stars) >= 2 && Number(p.stars) < 3);
            } else if (min === 1) {
                products = products.filter(p => Number(p.stars) >= 1 && Number(p.stars) < 2);
            }
        }

        // Apply sorting
        if (sortby === 'priceLowHigh') {
            products = products.sort((a, b) => a.price - b.price);
        } else if (sortby === 'priceHighLow') {
            products = products.sort((a, b) => b.price - a.price);
        } else if (sortby === 'discount') {
            products = products.sort((a, b) => {
                const discountA = ((a.mrp - a.price) / a.mrp) * 100;
                const discountB = ((b.mrp - b.price) / b.mrp) * 100;
                return discountB - discountA;
            });
        }

        return res.status(200).json({message: "Search Results", count: products.length, products: products})

    }
    catch(error){
        console.error("Error in searching product:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const updateData = req.body;
        
        if(!id) return res.status(400).json({ message: "Product ID is required" });

        const updatedProduct = await Product.findByIdAndUpdate(id,updateData,{ new: true })
        if(!updatedProduct) return res.status(404).json({ message: "Product not found" });

        return res.status(200).json({ message: "Product updated", product: updatedProduct });
    }
    catch(error){
        console.error("Error in updating product:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        if(!id) return res.status(400).json({ message: "Product ID is required" });

        const deletedProduct = await Product.findByIdAndDelete(id);

        res.status(200).json({ message: "Product deleted successfully",product: deletedProduct})
    }   
    catch(error){
        console.error("Error in deleting product:", error);
        return res.status(500).json({ message: "Server error", error: error});
    }
}