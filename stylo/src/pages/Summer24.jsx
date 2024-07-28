import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Summer24 = () => {
const [loader,setLoader]=useState(false);

  const [products, setProducts] = useState([]);

  const fetchData = async()=> {
  setLoader(true);

    const response = await axios.get("http://localhost:8083/api/admin/product");
    setProducts(response.data.products);
  setLoader(false)

  };

  useEffect(() => {
    fetchData();
  },);

  return (
    <>
    <div className='d-flex justify-content-evenly flex-wrap gap-2 mt-5'>
      {products.map((product) => {
        return (
          <Link to={`/products/${product.id}`}>
          <div className="card" style={{ width: "35rem" }} key={product.id}>
            <img src={product.thumbnail} className="card-img-top" style={{height:"100px", width:"100px"}} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p>{product.description}</p>
              <p className="card-text">{product.description.slice(0,30)+["...."]}</p>
              <button href="#"  className="btn btn-primary">{product.price}</button>
            </div>
          </div>
      </Link>

        );
      })}
    </div>
    </>
  );
};

export default Summer24;
