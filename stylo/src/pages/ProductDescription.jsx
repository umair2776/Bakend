import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios';


const ProductDescription = () => {
    const {id}=useParams();
    const [product,setProduct]=useState(null);
    useEffect(()=>{
        fetchProduct()
    },[])
    const fetchProduct=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(response)
        setProduct(response.data);
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img  src={product?.image} alt={product?.title} width={"100px"} height={"100px"}/>
                </div>
                <div className='col-lg-6'>
                    <h2>{product?.title}</h2>
                    <p>{product?.description}</p>
                    <h3>Price: ${product?.price}</h3>
                    <button className='btn btn-primary'>Add to cart</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductDescription
