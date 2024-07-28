import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import { Link } from 'react-router-dom';
const Kids = () => {
const [loader,setLoader]=useState(false);
const [products,setProducts]=useState([]);
 
const fetchData=async()=>{
  setLoader(true);
  const response = await axios.get("https://fakestoreapi.com/products")
  setProducts(response.data);
  setLoader(false)
}

useEffect(()=>{
  fetchData();
},[]);
console.log(loader);
  return (
<>
{
  loader ? <Loader/>: ( <div className='d-flex justify-content-evenly flex-wrap gap-2 mt-5'>
  {products.map((product) => {
    return (
      <Link to={`/products/${product.id}`}>     
       <div className="card" style={{ width: "35rem" }} key={product.id}>
        <img src={product.image} className="card-img-top" style={{height:"100px", width:"100px"}} alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description.slice(0,30)+["...."]}</p>
          <p className=' '>{product.rating.rate}</p>
          <button href="#"  className="btn btn-primary">{product.price}</button>
          <p>Item sold: {product.rating.count}</p>
        </div>
      </div>
      </Link>

    );
  })}
</div> )
}
</>

  
  )
}

export default Kids
